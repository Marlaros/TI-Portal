const { createSource, addResource, addAttribute, addCombat } = require('./shared');

const variantSource = (slug, nombre) =>
  createSource(`variant-${slug}`, `Subraza: ${nombre}`);

const dwarfSource = createSource('race-enanos', 'Raza: Enanos');

const dwarfModifiers = {
  enanos: [
    addResource(dwarfSource, 'advantagePoints', 20, 'Puntos de ventaja base para razas no humanas.'),
    addResource(dwarfSource, 'skillPoints', 8, 'Puntos de pericia base para razas no humanas.'),
    addResource(dwarfSource, 'pg', 30)
  ]
};

const dwarfVariantModifiers = {
  'enanos-enanos-de-las-montanas': [
    addResource(variantSource('enanos-de-las-montanas', 'Enanos de las Montañas'), 'pg', 35),
    addAttribute(variantSource('enanos-de-las-montanas', 'Enanos de las Montañas'), 'fuerza', 1),
    addAttribute(variantSource('enanos-de-las-montanas', 'Enanos de las Montañas'), 'resistencia', 1),
    addAttribute(variantSource('enanos-de-las-montanas', 'Enanos de las Montañas'), 'agilidad', -2),
    addCombat(
      variantSource('enanos-de-las-montanas', 'Enanos de las Montañas'),
      'ataque',
      1,
      '+1 a la tirada de Ataque.'
    ),
    addCombat(
      variantSource('enanos-de-las-montanas', 'Enanos de las Montañas'),
      'ataqueDistancia',
      -1,
      'Penalización al usar arcos/armas arrojadizas.'
    )
  ],
  'enanos-enanos-de-las-llanuras': [
    addResource(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'pg', 30),
    addAttribute(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'resistencia', 1),
    addAttribute(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'agilidad', -2),
    addAttribute(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'inteligencia', 2),
    addCombat(
      variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'),
      'ataqueDistancia',
      1,
      '+1 a Disparos con armas de proyectil.'
    ),
    addCombat(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'alerta', 1),
    addCombat(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'climaTerrenos', 1),
    addCombat(
      variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'),
      'detectarRuidos',
      1
    ),
    addCombat(
      variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'),
      'detectarTrampas',
      1
    ),
    addCombat(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'observacion', 1),
    addCombat(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'orientacion', 1),
    addCombat(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'sospecha', 1),
    addCombat(variantSource('enanos-de-las-llanuras', 'Enanos de las Llanuras'), 'rastreo', 1)
  ]
};

module.exports = {
  dwarfVariantModifiers
};

