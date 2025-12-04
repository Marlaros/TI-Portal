const { createSource, addAttribute, addResource, addCombat } = require('../raceModifiers/shared');

const makeSource = (slug, name, manualPage) =>
  createSource(`spec-${slug}`, `Especialidad: ${name}`, manualPage);

const amazonSource = makeSource('amazonas', 'Amazonas', 812);
const assassinSource = makeSource('asesinos', 'Asesinos', 842);
const barbarianSource = makeSource('barbaros', 'Bárbaros', 864);
const berserkerSource = makeSource('berserker', 'Berserker', 890);

const staticSpecialties = [
  {
    slug: 'amazonas',
    name: 'Amazonas',
    categoryName: 'Guerrero',
    short_description: 'Guerreras tribales devotas a Shavaloon.',
    description:
      'Veloz fuerza de choque integrada sólo por mujeres humanas. Forjadas en la selva, combinan jabalinas, acrobacias y tácticas de emboscada para desorientar a sus presas.',
    image_urls: [],
    allowed_races: ['Humanos', 'Semielfos'],
    modifiers: [
      addAttribute(amazonSource, 'fuerza', 1),
      addAttribute(amazonSource, 'resistencia', 1),
      addAttribute(amazonSource, 'agilidad', 1),
      addAttribute(amazonSource, 'liderazgo', 1),
      addResource(amazonSource, 'pg', 5, 'PG adicionales al nivel 1.'),
      addResource(amazonSource, 'pc', 2, 'PC adicionales por su disciplina.')
    ]
  },
  {
    slug: 'asesinos',
    name: 'Asesinos',
    categoryName: 'Guerrero',
    short_description: 'Especialistas en sigilo, venenos y suplantación.',
    description:
      'Cohortes de alquimistas y verdugos que viven de la sombra. Se destacan por su agilidad imposible y el dominio absoluto de toxinas y disfraces.',
    image_urls: [],
    allowed_races: ['Humanos', 'Elfos', 'Semielfos'],
    modifiers: [
      addAttribute(assassinSource, 'agilidad', 2),
      addAttribute(assassinSource, 'inteligencia', 1),
      addCombat(assassinSource, 'alerta', 1),
      addCombat(assassinSource, 'climaTerrenos', 1),
      addCombat(assassinSource, 'detectarRuidos', 1),
      addCombat(assassinSource, 'detectarTrampas', 1),
      addCombat(assassinSource, 'observacion', 1),
      addCombat(assassinSource, 'orientacion', 1),
      addCombat(assassinSource, 'sospecha', 1),
      addCombat(assassinSource, 'rastreo', 1)
    ]
  },
  {
    slug: 'barbaros',
    name: 'Bárbaros',
    categoryName: 'Guerrero',
    short_description: 'Guerreros tribales curtidos por el frío y la batalla.',
    description:
      'Clanes nómadas que basan su cultura en la caza y los ritos de sangre. Prefieren la furia y la fuerza desmedida sobre la etiqueta de las cortes.',
    image_urls: [],
    allowed_races: ['Humanos'],
    modifiers: [
      addAttribute(barbarianSource, 'fuerza', 2),
      addAttribute(barbarianSource, 'resistencia', 2),
      addAttribute(barbarianSource, 'inteligencia', -1),
      addResource(barbarianSource, 'pg', 10, 'Reserva corporal superior.'),
      addCombat(barbarianSource, 'dano', 1, 'Golpes más potentes con armas de F.')
    ]
  },
  {
    slug: 'berserker',
    name: 'Berserker',
    categoryName: 'Guerrero',
    short_description: 'Portadores de la furia que todo lo arrasa.',
    description:
      'Campeones que canalizan traumas o entrenamientos extremos en estallidos de rabia. Sus músculos se tensan hasta romper acero cuando desatan el estado berserker.',
    image_urls: [],
    allowed_races: ['Humanos', 'Elfos'],
    modifiers: [
      addAttribute(berserkerSource, 'fuerza', 1),
      addAttribute(berserkerSource, 'resistencia', 1)
    ]
  }
];

module.exports = {
  staticSpecialties
};

