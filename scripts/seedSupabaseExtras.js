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

const source = (id, nombre, manualPage) => ({ id, nombre, manualPage });
const modifier = (id, target, value, src) => ({
  id,
  source: src,
  target,
  operation: { kind: 'add', value }
});

const advantages = [
  {
    slug: 'sentidos-elficos',
    name: 'Sentidos élficos',
    cost: 2,
    description: 'Percepción y reflejos afinados heredados de los bosques eternos.',
    modifiers: [
      modifier(
        'ventaja-sentidos-percepcion',
        { kind: 'combat', key: 'percepcionChequeo' },
        2,
        source('ventaja-sentidos', 'Ventaja: Sentidos élficos', 78)
      ),
      modifier(
        'ventaja-sentidos-iniciativa',
        { kind: 'combat', key: 'iniciativa' },
        1,
        source('ventaja-sentidos', 'Ventaja: Sentidos élficos', 78)
      )
    ]
  },
  {
    slug: 'voluntad-de-hierro',
    name: 'Voluntad de hierro',
    cost: 2,
    description: 'Disciplina mental capaz de resistir magia y terrores ancestrales.',
    modifiers: [
      modifier(
        'ventaja-voluntad-concentracion',
        { kind: 'combat', key: 'concentracion' },
        2,
        source('ventaja-voluntad', 'Ventaja: Voluntad de hierro', 79)
      )
    ]
  },
  {
    slug: 'entrenamiento-marcial',
    name: 'Entrenamiento marcial',
    cost: 3,
    description: 'Años de práctica con armas, escudos y tácticas de asedio.',
    modifiers: [
      modifier(
        'ventaja-marcial-ataque',
        { kind: 'combat', key: 'ataque' },
        1,
        source('ventaja-marcial', 'Ventaja: Entrenamiento marcial', 80)
      ),
      modifier(
        'ventaja-marcial-dano',
        { kind: 'combat', key: 'dano' },
        1,
        source('ventaja-marcial', 'Ventaja: Entrenamiento marcial', 80)
      )
    ]
  }
];

const disadvantages = [
  {
    slug: 'juramento-sagrado',
    name: 'Juramento sagrado',
    reward: 1,
    description: 'Votos rígidos que impiden actuar con total libertad.',
    modifiers: [
      modifier(
        'desventaja-juramento-armadura',
        { kind: 'combat', key: 'armadura' },
        -1,
        source('desventaja-juramento', 'Desventaja: Juramento sagrado', 83)
      )
    ]
  },
  {
    slug: 'temor-a-la-magia',
    name: 'Temor a la magia',
    reward: 1,
    description: 'Los conjuros cercanos desconcentran y entorpecen las decisiones.',
    modifiers: [
      modifier(
        'desventaja-temor-concentracion',
        { kind: 'combat', key: 'concentracion' },
        -2,
        source('desventaja-temor', 'Desventaja: Temor a la magia', 84)
      )
    ]
  },
  {
    slug: 'armadura-pesada',
    name: 'Armadura pesada',
    reward: 2,
    description: 'Protección extrema que reduce la movilidad.',
    modifiers: [
      modifier(
        'desventaja-armadura-iniciativa',
        { kind: 'combat', key: 'iniciativa' },
        -1,
        source('desventaja-armadura', 'Desventaja: Armadura pesada', 84)
      ),
      modifier(
        'desventaja-armadura-percepcion',
        { kind: 'combat', key: 'percepcionChequeo' },
        -1,
        source('desventaja-armadura', 'Desventaja: Armadura pesada', 84)
      )
    ]
  }
];

const equipment = [
  {
    slug: 'espada-escudo',
    name: 'Espada corta + escudo',
    slot: 'arma',
    description: 'Configuración equilibrada para guerreros disciplinados.',
    modifiers: [
      modifier(
        'equipo-espada-defensa',
        { kind: 'combat', key: 'defensa' },
        1,
        source('equipo-espada', 'Equipo: Espada y escudo', 71)
      ),
      modifier(
        'equipo-escudo-armadura',
        { kind: 'combat', key: 'armadura' },
        1,
        source('equipo-espada', 'Equipo: Espada y escudo', 71)
      )
    ]
  },
  {
    slug: 'arco-ligero',
    name: 'Arco ligero y carcaj',
    slot: 'arma',
    description: 'Ideal para combatientes ágiles que hostigan desde la distancia.',
    modifiers: [
      modifier(
        'equipo-arco-ataque',
        { kind: 'combat', key: 'ataqueDistancia' },
        2,
        source('equipo-arco', 'Equipo: Arco ligero', 71)
      )
    ]
  },
  {
    slug: 'cota-de-malla',
    name: 'Cota de malla templada',
    slot: 'armadura',
    description: 'Protección intermedia que permite movimientos fluidos.',
    modifiers: [
      modifier(
        'equipo-malla-armadura',
        { kind: 'combat', key: 'armadura' },
        2,
        source('equipo-malla', 'Equipo: Cota de malla', 71)
      )
    ]
  },
  {
    slug: 'kit-aventurero',
    name: 'Kit aventurero',
    slot: 'kit',
    description: 'Cuerdas, antorchas y útiles para la exploración.',
    modifiers: [
      modifier(
        'equipo-kit-percepcion',
        { kind: 'combat', key: 'percepcionChequeo' },
        1,
        source('equipo-kit', 'Equipo: Kit aventurero', 71)
      )
    ]
  }
];

const fightingStyles = [
  {
    slug: 'sin-armadura',
    name: 'Sin armadura',
    style_key: 'sinArmadura',
    description: 'Movimientos fluidos y evasivos propios de monjes y duelistas.',
    modifiers: [
      modifier(
        'estilo-sin-armadura-defensa',
        { kind: 'combat', key: 'defensa' },
        1,
        source('estilo-sin-armadura', 'Estilo: Sin armadura', 66)
      ),
      modifier(
        'estilo-sin-armadura-iniciativa',
        { kind: 'combat', key: 'iniciativa' },
        1,
        source('estilo-sin-armadura', 'Estilo: Sin armadura', 66)
      )
    ]
  },
  {
    slug: 'arma-una-mano',
    name: 'Arma a una mano',
    style_key: 'armaUnaMano',
    description: 'Estilo versátil que equilibra defensa y ataque.',
    modifiers: [
      modifier(
        'estilo-una-mano-ataque',
        { kind: 'combat', key: 'ataque' },
        1,
        source('estilo-una-mano', 'Estilo: Arma a una mano', 67)
      ),
      modifier(
        'estilo-una-mano-defensa',
        { kind: 'combat', key: 'defensa' },
        1,
        source('estilo-una-mano', 'Estilo: Arma a una mano', 67)
      )
    ]
  },
  {
    slug: 'dos-armas',
    name: 'Dos armas',
    style_key: 'dosArmas',
    description: 'Ataques veloces que sacrifican protección por ofensiva.',
    modifiers: [
      modifier(
        'estilo-dos-armas-ataque',
        { kind: 'combat', key: 'ataque' },
        2,
        source('estilo-dos-armas', 'Estilo: Dos armas', 68)
      ),
      modifier(
        'estilo-dos-armas-defensa',
        { kind: 'combat', key: 'defensa' },
        -1,
        source('estilo-dos-armas', 'Estilo: Dos armas', 68)
      )
    ]
  },
  {
    slug: 'arqueria',
    name: 'Arquería',
    style_key: 'arqueria',
    description: 'Especialistas en hostigar desde la distancia.',
    modifiers: [
      modifier(
        'estilo-arqueria-ataque',
        { kind: 'combat', key: 'ataqueDistancia' },
        2,
        source('estilo-arqueria', 'Estilo: Arquería', 69)
      ),
      modifier(
        'estilo-arqueria-iniciativa',
        { kind: 'combat', key: 'iniciativa' },
        1,
        source('estilo-arqueria', 'Estilo: Arquería', 69)
      )
    ]
  }
];

const weaponMasteries = [
  {
    slug: 'maestria-mandoble',
    name: 'Mandoble',
    weapon_tag: 'armaPesada',
    description: 'Espada a dos manos que inflige cortes demoledores.',
    modifiers: [
      modifier(
        'maestria-mandoble-dano',
        { kind: 'combat', key: 'dano' },
        2,
        source('maestria-mandoble', 'Maestría: Mandoble', 71)
      ),
      modifier(
        'maestria-mandoble-ataque',
        { kind: 'combat', key: 'ataque' },
        1,
        source('maestria-mandoble', 'Maestría: Mandoble', 71)
      )
    ]
  },
  {
    slug: 'maestria-arco-largo',
    name: 'Arco largo',
    weapon_tag: 'arco',
    description: 'Especialización en disparos de largo alcance.',
    modifiers: [
      modifier(
        'maestria-arco-ataque',
        { kind: 'combat', key: 'ataqueDistancia' },
        2,
        source('maestria-arco', 'Maestría: Arco largo', 71)
      )
    ]
  },
  {
    slug: 'maestria-lanza-montada',
    name: 'Lanza montada',
    weapon_tag: 'montada',
    description: 'Ataques devastadores desde corcel o grifo.',
    modifiers: [
      modifier(
        'maestria-lanza-dano',
        { kind: 'combat', key: 'dano' },
        1,
        source('maestria-lanza', 'Maestría: Lanza montada', 71)
      ),
      modifier(
        'maestria-lanza-critico',
        { kind: 'combat', key: 'critico' },
        1,
        source('maestria-lanza', 'Maestría: Lanza montada', 71)
      )
    ]
  }
];

const skills = [
  {
    slug: 'cabalgar',
    name: 'Cabalgar',
    description: 'Dominas monturas bélicas y maniobras evasivas.',
    modifiers: [
      modifier(
        'pericia-cabalgar-defensa',
        { kind: 'combat', key: 'defensa' },
        1,
        source('pericia-cabalgar', 'Pericia: Cabalgar', 84)
      )
    ]
  },
  {
    slug: 'acrobacias',
    name: 'Acrobacias',
    description: 'Saltos, volteretas y estabilidad al trepar o caer.',
    modifiers: [
      modifier(
        'pericia-acrobacias-iniciativa',
        { kind: 'combat', key: 'iniciativa' },
        1,
        source('pericia-acrobacias', 'Pericia: Acrobacias', 84)
      )
    ]
  },
  {
    slug: 'diplomacia',
    name: 'Diplomacia',
    description: 'Negociaciones y liderazgo frente a tropas aliadas.',
    modifiers: [
      modifier(
        'pericia-diplomacia-liderazgo',
        { kind: 'combat', key: 'liderazgoChequeo' },
        2,
        source('pericia-diplomacia', 'Pericia: Diplomacia', 84)
      )
    ]
  }
];

const catalogSeed = [
  { table: 'advantages', rows: advantages },
  { table: 'disadvantages', rows: disadvantages },
  { table: 'equipment', rows: equipment },
  { table: 'fighting_styles', rows: fightingStyles },
  { table: 'weapon_masteries', rows: weaponMasteries },
  { table: 'skills', rows: skills }
];

const upsertTable = async (table, rows) => {
  const { error } = await supabase.from(table).upsert(rows, { onConflict: 'slug' });
  if (error) {
    throw new Error(`Error insertando en ${table}: ${error.message}`);
  }
  console.log(`✅ ${table}: ${rows.length} registros`);
};

(async () => {
  try {
    console.log('🚀 Iniciando seed de ventajas, equipo y estilos…');
    for (const entry of catalogSeed) {
      await upsertTable(entry.table, entry.rows);
    }
    console.log('🎉 Catálogos actualizados.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error durante la seed:', error);
    process.exit(1);
  }
})();

