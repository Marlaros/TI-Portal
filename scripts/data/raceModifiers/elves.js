const { createSource, addResource, addAttribute, addCombat } = require('./shared');

const variantSource = (slug, nombre) =>
  createSource(`variant-${slug}`, `Subraza: ${nombre}`);

const elfVariantModifiers = {
  'elfos-altos-elfos': [
    addResource(variantSource('altos-elfos', 'Altos elfos'), 'pg', 15),
    addAttribute(variantSource('altos-elfos', 'Altos elfos'), 'fuerza', -1),
    addAttribute(variantSource('altos-elfos', 'Altos elfos'), 'resistencia', -2),
    addAttribute(variantSource('altos-elfos', 'Altos elfos'), 'agilidad', 1),
    addAttribute(variantSource('altos-elfos', 'Altos elfos'), 'liderazgo', 1),
    addAttribute(variantSource('altos-elfos', 'Altos elfos'), 'inteligencia', 2),
    addCombat(
      variantSource('altos-elfos', 'Altos elfos'),
      'intimidar',
      1,
      '+1 solo para la tirada de Intimidar.'
    ),
    addCombat(
      variantSource('altos-elfos', 'Altos elfos'),
      'valentia',
      2,
      '+2 solo para la tirada de Valentía.'
    ),
    addCombat(
      variantSource('altos-elfos', 'Altos elfos'),
      'negociarRogar',
      -2,
      '-2 a Negociar / Rogar.'
    )
  ],
  'elfos-elfos-marinos': [
    addResource(variantSource('elfos-marinos', 'Elfos marinos'), 'pg', 15),
    addAttribute(variantSource('elfos-marinos', 'Elfos marinos'), 'fuerza', -1),
    addAttribute(variantSource('elfos-marinos', 'Elfos marinos'), 'resistencia', -2),
    addAttribute(variantSource('elfos-marinos', 'Elfos marinos'), 'agilidad', 1),
    addAttribute(variantSource('elfos-marinos', 'Elfos marinos'), 'percepcion', 1),
    addAttribute(variantSource('elfos-marinos', 'Elfos marinos'), 'inteligencia', 2),
    addCombat(
      variantSource('elfos-marinos', 'Elfos marinos'),
      'climaTerrenos',
      2,
      '+2 a Clima / Terrenos.'
    ),
    addCombat(variantSource('elfos-marinos', 'Elfos marinos'), 'orientacion', 2, '+2 a Orientación.'),
    addCombat(
      variantSource('elfos-marinos', 'Elfos marinos'),
      'detectarMagia',
      2,
      '+2 a la tirada de Detectar Magia.'
    )
  ],
  'elfos-elfos-oscuros': [
    addResource(variantSource('elfos-oscuros', 'Elfos oscuros'), 'pg', 15),
    addAttribute(variantSource('elfos-oscuros', 'Elfos oscuros'), 'fuerza', -1),
    addAttribute(variantSource('elfos-oscuros', 'Elfos oscuros'), 'resistencia', -2),
    addAttribute(variantSource('elfos-oscuros', 'Elfos oscuros'), 'agilidad', 1),
    addAttribute(variantSource('elfos-oscuros', 'Elfos oscuros'), 'inteligencia', 1),
    addAttribute(variantSource('elfos-oscuros', 'Elfos oscuros'), 'liderazgo', 2),
    addCombat(
      variantSource('elfos-oscuros', 'Elfos oscuros'),
      'intimidar',
      2,
      '+2 a Intimidar.'
    ),
    addCombat(
      variantSource('elfos-oscuros', 'Elfos oscuros'),
      'valentia',
      1,
      '+1 a Valentía.'
    )
  ],
  'elfos-elfos-silvanos': [
    addResource(variantSource('elfos-silvanos', 'Elfos silvanos'), 'pg', 15),
    addAttribute(variantSource('elfos-silvanos', 'Elfos silvanos'), 'fuerza', -1),
    addAttribute(variantSource('elfos-silvanos', 'Elfos silvanos'), 'resistencia', -1),
    addAttribute(variantSource('elfos-silvanos', 'Elfos silvanos'), 'agilidad', 2),
    addAttribute(variantSource('elfos-silvanos', 'Elfos silvanos'), 'percepcion', 1),
    addCombat(
      variantSource('elfos-silvanos', 'Elfos silvanos'),
      'observacion',
      1,
      '+1 a Observación.'
    ),
    addCombat(
      variantSource('elfos-silvanos', 'Elfos silvanos'),
      'defensa',
      1,
      '+1 a Defensa.'
    ),
    addCombat(
      variantSource('elfos-silvanos', 'Elfos silvanos'),
      'ataqueDistancia',
      1,
      '+1 a los chequeos de Disparos.'
    )
  ]
};

module.exports = {
  elfVariantModifiers
};

