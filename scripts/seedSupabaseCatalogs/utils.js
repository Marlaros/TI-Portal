const cloneModifiers = (mods = []) => mods.map((modifier) => JSON.parse(JSON.stringify(modifier)));

const parseJsonArray = (value) => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const insertInChunks = async (supabase, table, rows) => {
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

module.exports = {
  cloneModifiers,
  parseJsonArray,
  insertInChunks
};

