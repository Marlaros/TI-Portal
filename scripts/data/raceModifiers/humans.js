const { createSource, addResource, addPerPointResource, addCombat } = require('./shared');

const humanRaceSource = createSource('race-humanos', 'Raza: Humanos');

const humanRaceModifiers = {
  humanos: [
    addResource(
      humanRaceSource,
      'pg',
      20,
      'PG raciales base sin considerar la Resistencia.'
    ),
    addResource(
      humanRaceSource,
      'advantagePoints',
      30,
      'Total de puntos de ventaja iniciales (30).'
    ),
    addResource(
      humanRaceSource,
      'skillPoints',
      15,
      'Total de puntos de pericia iniciales (15).'
    ),
    addResource(
      humanRaceSource,
      'xpModifier',
      -10,
      'Reducción global del 10% en el costo de experiencia.'
    )
  ],
  semielfos: []
};

const variantSource = (slug, nombre) =>
  createSource(`variant-${slug}`, `Subraza: ${nombre}`);

const humanVariantModifiers = {
  'humanos-humanos-de-almoon': [
    addCombat(variantSource('humanos-de-almoon', 'Humanos de Almoon'), 'valentia', 2, '+2 a Valentía.')
  ],
  'humanos-humanos-de-amara': [
    addCombat(
      variantSource('humanos-de-amara', 'Humanos de Amara'),
      'percepcionChequeo',
      1,
      '+1 a todas las habilidades de Percepción.'
    )
  ],
  'humanos-humanos-de-draconia': [
    addResource(
      variantSource('humanos-de-draconia', 'Humanos de Draconia'),
      'advantagePoints',
      5,
      'Obtienen 5 puntos adicionales de ventajas.'
    )
  ],
  'humanos-humanos-de-murabia-joadim': [
    addPerPointResource(
      variantSource('humanos-de-murabia-joadim', 'Humanos de Murabia Joadim'),
      'xpModifier',
      'inteligencia',
      13,
      -2,
      {},
      'Por cada punto de Inteligencia ≥ 13 reduce en 2% el costo de experiencia.'
    ),
    addResource(
      variantSource('humanos-de-murabia-joadim', 'Humanos de Murabia Joadim'),
      'skillPoints',
      10,
      'Obtienen 10 puntos adicionales de pericia.'
    )
  ],
  'humanos-humanos-de-northland': [
    addCombat(
      variantSource('humanos-de-northland', 'Humanos de Northland'),
      'liderazgoChequeo',
      1,
      '+1 a las habilidades basadas en Liderazgo.'
    )
  ],
  'humanos-humanos-de-los-pueblos-libres': [
    addCombat(
      variantSource('humanos-de-los-pueblos-libres', 'Humanos de los Pueblos Libres'),
      'liderazgoChequeo',
      1,
      '+1 en Hablar a Masas y Negociar/Rogar.'
    ),
    addCombat(
      variantSource('humanos-de-los-pueblos-libres', 'Humanos de los Pueblos Libres'),
      'sospecha',
      1,
      '+1 en Sospecha.'
    )
  ],
  'humanos-humanos-de-shitza': [
    addCombat(variantSource('humanos-de-shitza', 'Humanos de Shitza'), 'valentia', 2, '+2 a Valentía.'),
    addCombat(
      variantSource('humanos-de-shitza', 'Humanos de Shitza'),
      'intimidar',
      2,
      '+2 a Intimidar / causar miedo.'
    )
  ],
  'humanos-humanos-de-tar': [
    addResource(
      variantSource('humanos-de-tar', 'Humanos de Tar'),
      'xpModifier',
      -10,
      'Reducción adicional del 10% en experiencia (se acumula con el rasgo humano).'
    )
  ],
  'humanos-humanos-de-las-tribus-barbaras': [
    addCombat(
      variantSource('humanos-de-las-tribus-barbaras', 'Humanos de las Tribus Bárbaras'),
      'valentia',
      2,
      '+2 a la tirada de Valentía.'
    )
  ]
};

module.exports = {
  humanRaceModifiers,
  humanVariantModifiers
};

