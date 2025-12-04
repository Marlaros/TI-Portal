const { createSource, addAttribute, addResource, addCombat } = require('../raceModifiers/shared');

/**
 * Placeholder map for primary category modifiers.
 * Populate each slug with an array of RuleModifier objects when manuals are codified.
 */
const primaryCategoryModifiers = {
  // Example:
  // guerreros: [
  //   addAttribute(createSource('cat-guerreros', 'Categoría: Guerreros', 0), 'fuerza', 1)
  // ]
};

module.exports = {
  primaryCategoryModifiers
};

