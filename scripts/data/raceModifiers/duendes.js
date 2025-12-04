const { createSource, addResource, addAttribute, addCombat } = require('./shared');

const duendeSource = createSource('race-duendes', 'Raza: Duendes');

const duendeModifiers = {
  duendes: [
    addAttribute(duendeSource, 'agilidad', 3),
    addAttribute(duendeSource, 'percepcion', 2),
    addAttribute(duendeSource, 'inteligencia', 1),
    addResource(duendeSource, 'pg', 15),
    addResource(duendeSource, 'xpModifier', -20),
    addCombat(duendeSource, 'valentia', 2),
    addCombat(duendeSource, 'armadura', 1, 'Armadura natural por tamaño diminuto.')
  ]
};

module.exports = {
  duendeModifiers
};

