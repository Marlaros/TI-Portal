const { createSource, addAttribute, addResource, addCombat } = require('../raceModifiers/shared');

/**
 * Placeholder map for primary category modifiers.
 * Populate each slug with an array of RuleModifier objects when manuals are codified.
 */
const primaryCategoryModifiers = {
  guerrero: [
    { 
      level: 1, 
      modifiers: [
        addAttribute(createSource('cat-guerreros', 'Categoría: Guerrero', 1), 'fuerza|resistencia|agilidad', 1, 'Elige entre fuerza, resistencia o agilidad para aumentar en 1.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 1), 'numeroDeAtaques', 1, 'Se tiene un ataque a nivel 1.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 1), 'numeroDeAtaquesDistancia', 1, 'Se tiene un ataque a distancia a nivel 1.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 1), 'weaponMastery', 2, '2 especializacion en armas a nivel 1'),
        addResource(createSource('cat-guerreros', 'Categoría: Guerrero', 1), 'puntosDeHabilidad', 1, 'Gana 1 punto de habilidad al subir de nivel.'),
        addResource(createSource('cat-guerreros', 'Categoría: Guerrero', 1), 'PC', 5, 'Gana 5 puntos de cansancio adicionales por nivel.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 1), 'concentracion', 5, 'Comienza con 5 en la tirada de Concentración.'),
      ]
    },
    { 
      level: 2, 
      modifiers: [
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 2), 'ataque', 2, '+2 a la tirada de Ataque.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 2), 'ataqueDistancia', 2, '+2 a la tirada de Ataque a Distancia.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 2), 'defensa', 2, '+2 a la tirada de Defensa.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 2), 'ataqueDistancia', 2, '+2 a la tirada de Ataque a Distancia.'),
        addResource(createSource('cat-guerreros', 'Categoría: Guerrero', 2), 'PC', 5, 'Gana 5 puntos de cansancio adicionales por nivel.'),
        addResource(createSource('cat-guerreros', 'Categoría: Guerrero', 2), 'advantagePoints', 5, 'Gana 5 puntos de ventajas al subir de nivel.'),
        addResource(createSource('cat-guerreros', 'Categoría: Guerrero', 2), 'skillPoints', 4, 'Gana 5 punto de pericias al subir de nivel.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'concentracion', 1, '+1 a la tirada de Concentración.'),
      ]
    },
    {
      level: 3,
      modifiers: [
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'numeroDeAtaques', 1, 'Gana un ataque adicional a nivel 3.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'ataque', 1, '+1 a la tirada de Ataque.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'ataqueDistancia', 1, '+1 a la tirada de Ataque a Distancia.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'defensa', 1, '+1 a la tirada de Defensa.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'weaponMastery', 1, '1 especializacion en armas adicional.'),
        addResource(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'PC', 5, 'Gana 5 puntos de cansancio adicionales por nivel.'),
        addResource(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'advantagePoints', 5, 'Gana 5 puntos de ventajas al subir de nivel.'),
        addResource(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'skillPoints', 4, 'Gana 5 punto de pericias al subir de nivel.'),
        addCombat(createSource('cat-guerreros', 'Categoría: Guerrero', 3), 'concentracion', 1, '+1 a la tirada de Concentración.'),
      ]
    }
  ],
  hechicero: [
    { 
      level: 1, 
      modifiers: [
        addAttribute(createSource('cat-hechicero', 'Categoría: Hechicero', 1), 'inteligencia|percepcion|liderazgo', 1, 'Elige entre inteligencia, percepción o liderazgo para aumentar en 1.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 1), 'PM', 20, 'Gana 20 puntos de magia adicionales.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 1), 'detectarMagia', 8, 'Comienza con 8 en la tirada de Detectar Magia.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 1), 'dispersarMagia', 1, 'Comienza con +1 a la tirada de Dispersar Magia.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 1), 'concentracion', 5, 'Comienza con 5 en la tirada de Concentración.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 1), 'PC', 3, 'Gana 3 puntos de cansancio adicionales por nivel.'),
      ]
    },
    { 
      level: 2, 
      modifiers: [
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 2), 'PM', 20, 'Gana 20 puntos de magia adicionales.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 2), 'detectarMagia', 1, '+1 a la tirada de Detectar Magia.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 2), 'dispersarMagia', 1, '+1 a la tirada de Dispersar Magia.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 2), 'PC', 3, 'Gana 3 puntos de cansancio adicionales por nivel.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 2), 'concentracion', 1, '+1 a la tirada de Concentración.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 2), 'advantagePoints', 5, 'Gana 5 puntos de ventajas al subir de nivel.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 2), 'skillPoints', 4, 'Gana 5 punto de pericias al subir de nivel.'),
      ]
    },
    { 
      level: 3, 
      modifiers: [
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 3), 'numeroDeAtaques', 1, 'Aumenta en 1 el número de ataques.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 3), 'PM', 20, 'Gana 20 puntos de magia adicionales.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 3), 'detectarMagia', 1, '+1 a la tirada de Detectar Magia.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 3), 'dispersarMagia', 1, '+1 a la tirada de Dispersar Magia.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 3), 'PC', 3, 'Gana 3 puntos de cansancio adicionales por nivel.'),
        addCombat(createSource('cat-hechicero', 'Categoría: Hechicero', 3), 'concentracion', 1, '+1 a la tirada de Concentración.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 3), 'advantagePoints', 5, 'Gana 5 puntos de ventajas al subir de nivel.'),
        addResource(createSource('cat-hechicero', 'Categoría: Hechicero', 3), 'skillPoints', 4, 'Gana 5 punto de pericias al subir de nivel.'),
      ]
    }
  ]
};

module.exports = {
  primaryCategoryModifiers
};

