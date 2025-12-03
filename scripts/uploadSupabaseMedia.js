#!/usr/bin/env node
/**
 * Sube archivos de pb_data/storage hacia Supabase Storage y actualiza las URLs en las tablas.
 *
 * Requisitos:
 *  - .env.local con SUPABASE_URL, SUPABASE_SERVICE_ROLE, SUPABASE_STORAGE_BUCKET
 *  - pb_data/data.db y pb_data/storage disponibles (no se necesita PocketBase corriendo).
 *  - El bucket indicado debe permitir acceso público (política read-only).
 *
 * Ejecutar con: npm run seed:supabase:media
 */

const fs = require('node:fs');
const path = require('node:path');
const Database = require('better-sqlite3');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, '.env.local');
if (fs.existsSync(ENV_PATH)) {
  dotenv.config({ path: ENV_PATH });
}

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE, SUPABASE_STORAGE_BUCKET } = process.env;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE) {
  console.error('❌ SUPABASE_URL o SUPABASE_SERVICE_ROLE faltan en .env.local');
  process.exit(1);
}

if (!SUPABASE_STORAGE_BUCKET) {
  console.error('❌ Define SUPABASE_STORAGE_BUCKET en .env.local (por ejemplo: SUPABASE_STORAGE_BUCKET=tierras-media)');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
  auth: { autoRefreshToken: false, persistSession: false }
});

const dbPath = path.join(ROOT, 'pb_data', 'data.db');
if (!fs.existsSync(dbPath)) {
  console.error('❌ No se encontró pb_data/data.db');
  process.exit(1);
}

const STORAGE_ROOT = path.join(ROOT, 'pb_data', 'storage');
if (!fs.existsSync(STORAGE_ROOT)) {
  console.error('❌ No se encontró el directorio pb_data/storage');
  process.exit(1);
}

const db = new Database(dbPath, { readonly: true });
const collections = db
  .prepare('select name, id from _collections')
  .all()
  .reduce((acc, row) => {
    acc[row.name] = row.id;
    return acc;
  }, {});

const storageBaseUrl = `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_STORAGE_BUCKET}`;

const MIME_MAP = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif'
};

const getContentType = (fileName) => MIME_MAP[path.extname(fileName).toLowerCase()] || 'application/octet-stream';

const parseJsonArray = (value) => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const TABLES = [
  { supabase: 'races', pbTable: 'razas', fileField: 'image', targetColumn: 'image_url', isArray: false },
  { supabase: 'race_variants', pbTable: 'tiporazas', fileField: 'image', targetColumn: 'image_url', isArray: false },
  { supabase: 'categories', pbTable: 'categorias', fileField: 'images', targetColumn: 'image_urls', isArray: true },
  { supabase: 'specialties', pbTable: 'especialidades', fileField: 'images', targetColumn: 'image_urls', isArray: true }
];

const uploadFile = async (localPath, remoteKey) => {
  const contentType = getContentType(remoteKey);
  const fileBuffer = fs.readFileSync(localPath);
  const { error } = await supabase.storage
    .from(SUPABASE_STORAGE_BUCKET)
    .upload(remoteKey, fileBuffer, { upsert: true, contentType });
  if (error) {
    throw error;
  }
  return `${storageBaseUrl}/${remoteKey}`;
};

const processTable = async (config) => {
  const collectionId = collections[config.pbTable];
  if (!collectionId) {
    console.warn(`⚠️ No se encontró collectionId para ${config.pbTable}, se omite.`);
    return;
  }

  const rows = db.prepare(`select id, ${config.fileField} as field from ${config.pbTable}`).all();
  let updated = 0;

  for (const row of rows) {
    if (!row.field) continue;
    const fileList = config.isArray ? parseJsonArray(row.field) : [row.field];
    const uploadedUrls = [];

    for (const fileName of fileList) {
      if (!fileName) continue;
      const localPath = path.join(STORAGE_ROOT, collectionId, row.id, fileName);
      if (!fs.existsSync(localPath)) {
        console.warn(`⚠️ Archivo no encontrado: ${localPath}`);
        continue;
      }
      const remoteKey = `${config.supabase}/${row.id}/${fileName}`;
      try {
        const url = await uploadFile(localPath, remoteKey);
        uploadedUrls.push(url);
      } catch (error) {
        console.error(`❌ Error subiendo ${localPath}:`, error.message);
      }
    }

    if (!uploadedUrls.length) continue;

    const payload = config.isArray ? uploadedUrls : uploadedUrls[0];
    const { error } = await supabase
      .from(config.supabase)
      .update({ [config.targetColumn]: payload })
      .eq('legacy_id', row.id);

    if (error) {
      console.error(`❌ Error actualizando ${config.supabase} (${row.id}):`, error.message);
    } else {
      updated += 1;
    }
  }

  console.log(`✅ ${config.supabase}: ${updated} registros actualizados.`);
};

(async () => {
  console.log('🚀 Iniciando carga de imágenes a Supabase Storage…');
  try {
    for (const table of TABLES) {
      await processTable(table);
    }
    console.log('🎉 Migración de imágenes completa.');
    console.log(`Recuerda que el bucket "${SUPABASE_STORAGE_BUCKET}" debe ser público para servir las URLs.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
    process.exit(1);
  }
})();

