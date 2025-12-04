const { createSource, addResource, addAttribute, addCombat } = require('./shared');

const ogreSource = createSource('race-ogros', 'Raza: Ogros');

const ogreModifiers = {
  ogros: [
    addAttribute(ogreSource, 'fuerza', 4),
    addAttribute(ogreSource, 'resistencia', 4),
    addAttribute(ogreSource, 'agilidad', -2),
    addAttribute(ogreSource, 'percepcion', -2),
    addResource(ogreSource, 'pg', 60),
    addResource(ogreSource, 'xpModifier', 10),
    addCombat(ogreSource, 'iniciativa', -2, 'Más lentos para actuar.'),
    addCombat(ogreSource, 'intimidar', 4, 'Aspecto grotesco e imponente.'),
    addCombat(ogreSource, 'valentia', 2),
    addCombat(
      ogreSource,
      'reduccionDefensaEnemiga',
      2,
      'Los rivales sufren -2 al intentar frenar sus golpes.'
    )
  ]
};

module.exports = {
  ogreModifiers
};

