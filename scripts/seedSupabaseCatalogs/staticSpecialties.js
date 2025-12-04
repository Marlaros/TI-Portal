const { staticSpecialties } = require('../data/staticSpecialties');
const { cloneModifiers } = require('./utils');

const buildStaticSpecialtyRows = (categoryMap, uuidv5, namespace) =>
  staticSpecialties
    .map((entry) => {
      const categoryId = categoryMap.get(entry.categoryName);
      if (!categoryId) {
        console.warn(
          `⚠️  No se encontró categoría "${entry.categoryName}" para la especialidad estática "${entry.name}"`
        );
        return null;
      }
      return {
        id: uuidv5(`especialidades:static:${entry.slug}`, namespace),
        legacy_id: entry.legacy_id ?? null,
        category_id: categoryId,
        slug: entry.slug,
        name: entry.name,
        short_description: entry.short_description ?? null,
        description: entry.description ?? null,
        image_urls: entry.image_urls ?? [],
        allowed_races: entry.allowed_races ?? [],
        modifiers: cloneModifiers(entry.modifiers ?? [])
      };
    })
    .filter(Boolean);

const insertStaticSpecialties = async (categoryMap, upsert, uuidv5, namespace) => {
  const rows = buildStaticSpecialtyRows(categoryMap, uuidv5, namespace);
  if (!rows.length) {
    console.log('ℹ️  No se definieron especialidades estáticas, se omite su inserción.');
    return;
  }
  await upsert('specialties', rows);
};

module.exports = {
  insertStaticSpecialties
};

