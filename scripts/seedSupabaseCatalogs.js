#!/usr/bin/env node
/**
 * Seed script that migrates PocketBase catalog data (razas, tipos, categorías, especialidades)
 * into Supabase using the service role key.
 *
 * Requisitos:
 *  - Variables en .env.local: SUPABASE_URL, SUPABASE_SERVICE_ROLE, optional POCKETBASE_URL
 *  - Archivo pb_data/data.db presente (SQLite de PocketBase)
 */

const path = require('node:path');
const fs = require('node:fs');
const crypto = require('node:crypto');
const Database = require('better-sqlite3');
const { v5: uuidv5 } = require('uuid');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, '.env.local');

if (fs.existsSync(ENV_PATH)) {
  dotenv.config({ path: ENV_PATH });
}

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE, POCKETBASE_URL = 'http://127.0.0.1:8090' } = process.env;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE) {
  console.error('❌ Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE en .env.local');
  process.exit(1);
}

const UUID_NAMESPACE = '5f6a8b8e-1b43-4b60-8b0d-b8a1c48f9a0b';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
  auth: { autoRefreshToken: false, persistSession: false }
});

const sqlitePath = path.join(ROOT, 'pb_data', 'data.db');
if (!fs.existsSync(sqlitePath)) {
  console.error('❌ No se encontró pb_data/data.db. Ejecuta PocketBase o asegúrate de tener el archivo.');
  process.exit(1);
}

const db = new Database(sqlitePath, { readonly: true });
const collections = db.prepare('select name, id from _collections').all()
  .reduce((acc, row) => {
    acc[row.name] = row.id;
    return acc;
  }, {});

const slugify = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const buildImageUrl = (collectionName, recordId, fileName) => {
  if (!fileName) return null;
  const collectionId = collections[collectionName];
  if (!collectionId) return null;
  return `${POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${fileName}`;
};

const tableHasColumn = (table, column) => {
  return db.prepare(`pragma table_info(${table})`).all().some((col) => col.name === column);
};

const selectColumnOrEmpty = (table, column) => (tableHasColumn(table, column) ? column : "''");

const fetchRaces = () => {
  const detailsExpr = selectColumnOrEmpty('razas', 'details');
  const rows = db.prepare(`select id, name, short_desc, ${detailsExpr} as details, image from razas`).all();
  const map = new Map();
  const payload = rows.map((row) => {
    const uuid = uuidv5(`razas:${row.id}`, UUID_NAMESPACE);
    map.set(row.id, { uuid, name: row.name });
    return {
      id: uuid,
      legacy_id: row.id,
      slug: slugify(row.name),
      name: row.name,
      short_description: row.short_desc || null,
      description: row.details || null,
      image_url: buildImageUrl('razas', row.id, row.image)
    };
  });
  return { payload, map };
};

const fetchRaceVariants = (raceMap) => {
  const rows = db.prepare('select id, name, parent, short_desc, details, image from tiporazas').all();
  return rows
    .map((row) => {
      const raceEntry = Array.from(raceMap.values()).find((r) => r.name === row.parent);
      if (!raceEntry) {
        console.warn(`⚠️  No se encontró raza para la subraza "${row.name}" (parent: ${row.parent})`);
        return null;
      }
      return {
        id: uuidv5(`tiporazas:${row.id}`, UUID_NAMESPACE),
        legacy_id: row.id,
        race_id: raceEntry.uuid,
        slug: slugify(`${raceEntry.name}-${row.name}`),
        name: row.name,
        short_description: row.short_desc || null,
        description: row.details || null,
        image_url: buildImageUrl('tiporazas', row.id, row.image)
      };
    })
    .filter(Boolean);
};

const parseJsonArray = (value) => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const fetchCategories = () => {
  const detailsExpr = selectColumnOrEmpty('categorias', 'details');
  const rows = db.prepare(`select id, name, short_desc, ${detailsExpr} as details, images from categorias`).all();
  const map = new Map();
  const payload = rows.map((row) => {
    const uuid = uuidv5(`categorias:${row.id}`, UUID_NAMESPACE);
    map.set(row.name, uuid);
    return {
      id: uuid,
      legacy_id: row.id,
      slug: slugify(row.name),
      name: row.name,
      role: 'principal',
      short_description: row.short_desc || null,
      description: row.details || null,
      image_urls: parseJsonArray(row.images).map((img) => buildImageUrl('categorias', row.id, img)).filter(Boolean)
    };
  });
  return { payload, map };
};

const fetchSpecialties = (categoryMap) => {
  const detailsExpr = selectColumnOrEmpty('especialidades', 'details');
  const rows = db.prepare(
    `select id, name, category, short_desc, ${detailsExpr} as details, images, parent from especialidades`
  ).all();
  return rows
    .map((row) => {
      const categoryId = categoryMap.get(row.category);
      if (!categoryId) {
        console.warn(`⚠️  No se encontró categoría "${row.category}" para la especialidad "${row.name}"`);
        return null;
      }
      const imageUrls = parseJsonArray(row.images)
        .map((img) => buildImageUrl('especialidades', row.id, img))
        .filter(Boolean);
      const allowedRaces = row.parent
        ? row.parent.split(',').map((value) => value.trim()).filter(Boolean)
        : [];
      return {
        id: uuidv5(`especialidades:${row.id}`, UUID_NAMESPACE),
        legacy_id: row.id,
        category_id: categoryId,
        slug: slugify(`${row.category}-${row.name}`),
        name: row.name,
        short_description: row.short_desc || null,
        description: row.details || null,
        image_urls: imageUrls,
        allowed_races: allowedRaces
      };
    })
    .filter(Boolean);
};

const insertInChunks = async (table, rows) => {
  const chunkSize = 500;
  for (let i = 0; i < rows.length; i += chunkSize) {
    const chunk = rows.slice(i, i + chunkSize);
    const { error } = await supabase.from(table).upsert(chunk, { onConflict: 'slug' });
    if (error) {
      throw new Error(`Error insertando en ${table}: ${error.message}`);
    }
    console.log(`✅ ${table}: +${chunk.length} registros`);
  }
};

const run = async () => {
  console.log('🚀 Iniciando migración de catálogos hacia Supabase…');
  try {
    const { payload: racePayload, map: raceMap } = fetchRaces();
    await insertInChunks('races', racePayload);

    const raceVariants = fetchRaceVariants(raceMap);
    await insertInChunks('race_variants', raceVariants);

    const { payload: categoryPayload, map: categoryMap } = fetchCategories();
    await insertInChunks('categories', categoryPayload);

    const specialties = fetchSpecialties(categoryMap);
    await insertInChunks('specialties', specialties);

    console.log('🎉 Migration completa.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
    process.exit(1);
  }
};

run();

