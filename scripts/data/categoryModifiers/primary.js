const { createSource, addAttribute, addResource, addCombat } = require('../raceModifiers/shared');

/**
 * Placeholder map for primary category modifiers.
 * Populate each slug with an array of RuleModifier objects when manuals are codified.
 */
const primaryCategoryModifiers = {
  guerrero: [
    addAttribute(createSource('cat-guerreros', 'Categoría: Guerrero', 0), 'fuerza', 1),
    addAttribute(createSource('cat-guerreros', 'Categoría: Guerrero', 0), 'resistencia', 1),
    addAttribute(createSource('cat-guerreros', 'Categoría: Guerrero', 0), 'agilidad', 1),
    addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 0), 'ataque', 1, '+1 a la tirada de Ataque.'),
    addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 0), 'defensa', 1, '+1 a la tirada de Defensa.')
  ],
  hechicero: [
    addAttribute(createSource('cat-hechicero', 'Categoría: Hechicero', 0), 'inteligencia', 1),
    addAttribute(createSource('cat-hechicero', 'Categoría: Hechicero', 0), 'percepcion', 1),
    addAttribute(createSource('cat-hechicero', 'Categoría: Hechicero', 0), 'liderazgo', 1),
  ]
};

module.exports = {
  primaryCategoryModifiers
};

