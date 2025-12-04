#!/usr/bin/env node
/**
 * Seed de catálogos declarativos (ventajas, desventajas, equipo, estilos, etc.)
 * Ejecutar con: npm run seed:supabase:extras
 *
 * Requiere SUPABASE_URL y SUPABASE_SERVICE_ROLE en .env.local
 */

const path = require('node:path');
const fs = require('node:fs');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const { v5: uuidv5 } = require('uuid');
const manualAdvantages = require('./data/advantages');
const manualDisadvantages = require('./data/disadvantages');
const manualSkills = require('./data/pericias');
const manualBeautyTiers = require('./data/beautyTiers');
const manualFightingStyles = require('./data/fightingStyles');
const manualFightingStyleTiers = require('./data/fightingStyles/tiers');
const manualEquipment = require('./data/equipment');
const manualWeaponMasteries = require('./data/weaponMasteries');
const { insertInChunks } = require('./seedSupabaseCatalogs/utils');

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, '.env.local');
if (fs.existsSync(ENV_PATH)) {
  dotenv.config({ path: ENV_PATH });
}

const { SUPABASE_URL, SUPABASE_SERVICE_ROLE } = process.env;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE) {
  console.error('❌ SUPABASE_URL o SUPABASE_SERVICE_ROLE no definidos en .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE, {
  auth: { autoRefreshToken: false, persistSession: false }
});
const upsert = (table, rows) => insertInChunks(supabase, table, rows);

const UUID_NAMESPACE = '5f6a8b8e-1b43-4b60-8b0d-b8a1c48f9a0b';
const BEAUTY_MANUAL_PAGE = 1846;

const source = (id, nombre, manualPage) => ({ id, nombre, manualPage });

const advantages = manualAdvantages.map((entry) => ({
  id: uuidv5(`advantage:${entry.slug}`, UUID_NAMESPACE),
  slug: entry.slug,
  name: entry.name,
  cost: entry.cost ?? 0,
  description: entry.description ?? '',
  modifiers: entry.modifiers ?? []
}));

const disadvantages = manualDisadvantages.map((entry) => ({
  id: uuidv5(`disadvantage:${entry.slug}`, UUID_NAMESPACE),
  slug: entry.slug,
  name: entry.name,
  reward: entry.reward ?? 0,
  description: entry.description ?? '',
  modifiers: entry.modifiers ?? []
}));

const beautyTiers = manualBeautyTiers.map((tier) => {
  const sourceId = `beau-${tier.slug}`;
  const tierSource = source(sourceId, `Belleza: ${tier.label}`, BEAUTY_MANUAL_PAGE);
  const modifiers =
    tier.effects?.map((effect, idx) => ({
      id: `${sourceId}-mod-${idx + 1}`,
      source: tierSource,
      target: { kind: effect.kind ?? 'combat', key: effect.key },
      operation: { kind: 'add', value: effect.value }
    })) ?? [];
  return {
    id: uuidv5(`beauty:${tier.slug}`, UUID_NAMESPACE),
    slug: tier.slug,
    label: tier.label,
    min_value: tier.min,
    max_value: tier.max,
    description: tier.description,
    notes: tier.notes ?? null,
    modifiers
  };
});

const equipment = manualEquipment.map((item) => ({
  id: uuidv5(`equipment:${item.slug}`, UUID_NAMESPACE),
  slug: item.slug,
  name: item.name,
  slot: item.slot ?? 'arma',
  description: item.description ?? '',
  modifiers: item.modifiers ?? []
}));

const fightingStyles = manualFightingStyles.map((style) => ({
  id: uuidv5(`fighting-style:${style.slug}`, UUID_NAMESPACE),
  slug: style.slug,
  name: style.name,
  style_key: style.styleKey,
  description: style.description,
  modifiers: style.modifiers ?? []
}));

const fightingStyleTiers = manualFightingStyleTiers.map((tier, index) => ({
  id: uuidv5(
    `fighting-style-tier:${tier.styleSlug}:g${tier.group}:a${tier.order ?? index}`,
    UUID_NAMESPACE
  ),
  fighting_style_id: uuidv5(`fighting-style:${tier.styleSlug}`, UUID_NAMESPACE),
  slug: `${tier.styleSlug}-g${tier.group}-a${tier.order}`,
  group_index: tier.group,
  order_index: tier.order,
  title: tier.title,
  description: tier.description,
  modifiers: tier.modifiers ?? []
}));

const weaponMasteries = manualWeaponMasteries.map((entry) => ({
  id: uuidv5(`weapon-mastery:${entry.slug}`, UUID_NAMESPACE),
  slug: entry.slug,
  name: entry.name,
  weapon_tag: entry.weaponTag ?? null,
  description: entry.description ?? '',
  modifiers: entry.modifiers ?? []
}));

const skills = manualSkills.map((entry) => ({
  id: uuidv5(`skill:${entry.slug}`, UUID_NAMESPACE),
  slug: entry.slug,
  name: entry.name,
  description: entry.description ?? '',
  attribute: entry.attribute ?? null,
  cost: entry.cost ?? null,
  modifiers: entry.modifiers ?? []
}));

const catalogSeed = [
  { table: 'beauty_tiers', rows: beautyTiers },
  { table: 'advantages', rows: advantages },
  { table: 'disadvantages', rows: disadvantages },
  { table: 'equipment', rows: equipment },
  { table: 'fighting_styles', rows: fightingStyles },
  { table: 'fighting_style_tiers', rows: fightingStyleTiers },
  { table: 'weapon_masteries', rows: weaponMasteries },
  { table: 'skills', rows: skills }
];

(async () => {
  try {
    console.log('🚀 Iniciando seed de ventajas, equipo y estilos…');
    for (const entry of catalogSeed) {
      await upsert(entry.table, entry.rows);
    }
    console.log('🎉 Catálogos actualizados.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error durante la seed:', error);
    process.exit(1);
  }
})();

