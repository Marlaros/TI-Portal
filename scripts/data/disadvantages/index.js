module.exports = [
  {
    "slug": "fealdad",
    "name": "Fealdad",
    "reward": 2,
    "description": "Debido a una horrible verruga o mancha de nacimiento, el personaje tendrá que restarse 2 puntos de Belleza. También se verán afectados aquellos personajes con un número mínimo de Belleza (como las amazonas).",
    "modifiers": [
      {
        "id": "fealdad-belleza",
        "source": {
          "id": "desv-fealdad",
          "nombre": "Fealdad"
        },
        "target": {
          "kind": "attribute",
          "key": "belleza"
        },
        "operation": {
          "kind": "add",
          "value": -2
        }
      }
    ]
  },
  {
    "slug": "despilfarro",
    "name": "Despilfarro",
    "reward": 2,
    "description": "El personaje solamente comenzará el juego con monedas de oro, ignorando sus tiradas para determinar Mc o Mp. Esta desventaja no puede acumularse con Asaltado.",
    "modifiers": [
      {
        "id": "despilfarro-mp",
        "source": {
          "id": "desv-mp-despilfarro",
          "nombre": "Despilfarro"
        },
        "target": {
          "kind": "resource",
          "key": "Mp"
        },
        "operation": {
          "kind": "set",
          "value": 0
        }
      },
      {
        "id": "despilfarro-mc",
        "source": {
          "id": "desv-mc-despilfarro",
          "nombre": "Despilfarro"
        },
        "target": {
          "kind": "resource",
          "key": "Mc"
        },
        "operation": {
          "kind": "set",
          "value": 0
        }
      }
    ]
  },
  {
    "slug": "rechazado-por-la-sociedad",
    "name": "Rechazado por la sociedad",
    "reward": 3,
    "description": "Por una injusticia de la vida misma, el personaje tendrá una existencia más difícil que la de otras personas y deberá repetir la tirada determinante de su categoría social (la misma no puede ser superior a la original, así que si eso llegase a ocurrir quedará igual).",
    "modifiers": [
      {
        "id": "rechazado-categoria-social",
        "source": {
          "id": "desv-rechazado-sociedad",
          "nombre": "Rechazado por la sociedad"
        },
        "target": {
          "kind": "attribute",
          "key": "categoriaSocial"
        },
        "operation": {
          "kind": "rerollMax"
        }
      }
    ]
  },
  {
    "slug": "poco-practico-no-apto-para-hechiceros",
    "name": "Poco práctico (no apto para hechiceros)",
    "reward": 3,
    "description": "El guerrero sólo puede especializarse en 1 grupo de armas a nivel 1. Si su categoría le otorgase especializaciones gratuitas, éste sólo recibirá aquellas.",
    "modifiers": [
      {
        "id": "poco-practico-especializacion",
        "source": {
          "id": "desv-poco-practico",
          "nombre": "Poco práctico (no apto para hechiceros)"
        },
        "target": {
          "kind": "combat",
          "key": "weaponMastery"
        },
        "operation": {
          "kind": "setMax",
          "value": 1
        }
      }
    ]
  },
  {
    "slug": "asaltado",
    "name": "Asaltado",
    "reward": 4,
    "description": "Unos rufianes le han quitado todas las pertenencias al personaje y comenzará el juego sin dinero ni armamento.",
    "modifiers": [
      {
        "id": "asaltado-mo",
        "source": {
          "id": "desv-mo-asaltado",
          "nombre": "Asaltado"
        },
        "target": {
          "kind": "resource",
          "key": "Mo"
        },
        "operation": {
          "kind": "set",
          "value": 0
        }
      },
      {
        "id": "asaltado-mp",
        "source": {
          "id": "desv-mp-asaltado",
        },
        "operation": {
          "kind": "set",
          "value": 0
        }
      },
      {
        "id": "asaltado-mp",
        "source": {
          "id": "desv-mp-asaltado",
          "nombre": "Asaltado"
        },
        "target": {
          "kind": "resource",
          "key": "Mp"
        },
        "operation": {
          "kind": "set",
          "value": 0
        }
      },
      {
        "id": "asaltado-mc",
        "source": {
          "id": "desv-mc-asaltado",
          "nombre": "Asaltado"
        },
        "target": {
          "kind": "resource",
          "key": "Mc"
        },
        "operation": {
          "kind": "set",
          "value": 0
        }
      },
      {
        "id": "asaltado-equipamiento",
        "source": {
          "id": "desv-equipamiento-asaltado",
          "nombre": "Asaltado"
        },
        "target": {
          "kind": "equipment",
          "key": "all"
        },
        "operation": {
          "kind": "removeAll"
        }
      }
    ]
  },
  {
    "slug": "alergia-fobia",
    "name": "Alergia/Fobia",
    "reward": 4,
    "description": "Elegir uno de los puntos listados más abajo: Grupo de animales (felinos, caninos, insectos, reptiles, etc.) Espacios (espacios muy amplios, lugares cerrados, lugares oscuros, océanos, alturas, etc.) Partículas (polen, flores, polvo, humo, etc.) Si contrae alergia penalizará en 2 todas sus tiradas en el D20 por ver, sentir, probar, ingerir, etc., uno de los condicionantes mencionados.",
    "modifiers": [],
    "contstraints": [
      {
        "type": "maximun",
        "target": {
          "kind": "resource",
          "key": "disadvantage",
          "name": "Alergia/Fobia"
        },
        "value": 3
      }
    ]
  },
  {
    "slug": "desaforado",
    "name": "Desaforado",
    "reward": 4,
    "description": "Al comienzo de la batalla la adrenalina del personaje comienza a subir en grandes niveles y gastará 2 PC adicionales en el primer turno.",
    "modifiers": [
      {
        "id": "desaforado-pc",
        "source": {
          "id": "desv-desaforado",
          "nombre": "Desaforado"
        },
        "target": {
          "kind": "resource",
          "key": "PC"
        },
        "operation": {
          "kind": "add",
          "value": -1
        }
      }
    ]
  },
  {
    "slug": "todo-a-su-tiempo",
    "name": "Todo a su tiempo",
    "reward": 4,
    "description": "El personaje no podrá vestir ningún tipo de yelmo, coraza o armadura hasta ser nivel 2, aunque sí podrá utilizar escudos, en este caso la desventaja cuesta 4 puntos. No se puede emplear Todo a su tiempo si el personaje utiliza el Estilo de Lucha en Combate sin Corazas. (4)",
    "modifiers": [
      {
        "id": "todo-a-su-tiempo-armadura",
        "source": {
          "id": "desv-todo-a-su-tiempo",
          "nombre": "Todo a su tiempo"
        },
        "target": {
          "kind": "equipmentRestriction",
          "key": "armadura"
        },
        "operation": {
          "kind": "restrictUntilLevel",
          "value": 2
        }
      }
    ],
    "contstraints": [
      {
        "type": "hasSelected",
        "target": {
          "kind": "fightingStyle",
          "key": "combate-sin-corazas"
        }
      },
      {
        "type": "hasSelected",
        "target": {
          "kind": "disadvantage",
          "key": "todo-a-su-tiempo-full"
        }
      }
    ]
  },
  {
    "slug": "todo-a-su-tiempo-full",
    "name": "Todo a su tiempo-full",
    "reward": 3,
    "description": "El personaje no podrá vestir ningún tipo de yelmo, coraza o armadura hasta ser nivel 3, aunque sí podrá utilizar escudos. No se puede emplear Todo a su tiempo Full si el personaje utiliza el Estilo de Lucha en Combate sin Corazas. (7)",
    "modifiers": [
      {
        "id": "todo-a-su-tiempo-armadura",
        "source": {
          "id": "desv-todo-a-su-tiempo",
          "nombre": "Todo a su tiempo"
        },
        "target": {
          "kind": "equipmentRestriction",
          "key": "armadura"
        },
        "operation": {
          "kind": "restrictUntilLevel",
          "value": 3
        }
      }
    ],
    "contstraints": [
      {
        "type": "hasSelected",
        "target": {
          "kind": "fightingStyle",
          "key": "combate-sin-corazas"
        }
      },
      {
        "type": "hasSelected",
        "target": {
          "kind": "disadvantage",
          "key": "todo-a-su-tiempo-full"
        }
      }
    ]
  },
  {
    "slug": "poco-instructivo-solo-para-personajes-con-i-13-o-mas",
    "name": "Poco instructivo (sólo para personajes con (I) 13 o más)",
    "reward": 4,
    "description": "Por su naturaleza floja o desinteresada, el personaje no ganará puntos adicionales de pericia por su tirada de (I) en ningún nivel.",
    "modifiers": [
      {
        "id": "poco-instructivo-skillPoints",
        "source": {
          "id": "desv-poco-instructivo",
          "nombre": "Poco instructivo (sólo para personajes con (I) 13 o más)"
        },
        "target": {
          "kind": "resource",
          "key": "skillPoints"
        },
        "operation": {
          "kind": "add",
          "value": "-IntelligenceModifier"
        }
      }
    ],
    "contstraints": [
      {
        "type": "minimum",
        "target": {
          "kind": "attribute",
          "key": "inteligencia"
        },
        "value": 13
      }
    ]
  },
  {
    "slug": "lento",
    "name": "Lento",
    "reward": 5,
    "description": "El primer turno de combate el personaje actuará último en el turno de manera obligatoria. Si alguien más posee esta desventaja el primero en reaccionar será aquel que posea un mayor valor de (A), en caso de tablas, desempatar con 1D20. Este defecto ignora conjuros, habilidades y demás trucos para ganar automáticamente la Iniciativa."
  },
  {
    "slug": "temeroso",
    "name": "Temeroso",
    "reward": 5,
    "description": "El jugador no deberá jugar necesariamente “cobarde” al personaje, no obstante éste actuará hacia la huida como mero reflejo, penalizando en 2 su Valentía e Intimidar. Las categorías inmunes al Miedo o al Terror no podrán escoger esta desventaja. No puede utilizarse si se eligió la ventaja Bonificar Intimidar y Valentía.",
    "modifiers": [
      {
        "id": "temeroso-valentia",
        "source": {
          "id": "desv-temeroso",
          "nombre": "Temeroso"
        },
        "target": {
          "kind": "combat",
          "key": "valentia"
        },
        "operation": {
          "kind": "add",
          "value": -2
        }
      },
      {
        "id": "temeroso-intimidar",
        "source": {
          "id": "desv-temeroso",
          "nombre": "Temeroso"
        },
        "target": {
          "kind": "combat",
          "key": "intimidar"
        },
        "operation": {
          "kind": "add",
          "value": -2
        }
      }
    ]
  },
  {
    "slug": "desconcentrado-solo-para-lanzadores-de-conjuros",
    "name": "Desconcentrado (sólo para lanzadores de conjuros)",
    "reward": 6,
    "description": "El personaje comienza con -1 en su tirada de Concentración.",
    "modifiers": [
      {
        "id": "desconcentrado-concentracion",
        "source": {
          "id": "desv-desconcentrado",
          "nombre": "Desconcentrado (sólo para lanzadores de conjuros)"
        },
        "target": {
          "kind": "combat",
          "key": "concentracion"
        },
        "operation": {
          "kind": "add",
          "value": -1
        }
      }
    ]
  },
  {
    "slug": "desprevenido-soberbio",
    "name": "Desprevenido/Soberbio",
    "reward": 6,
    "description": "Por distintos motivos el personaje no podrá usar sus tiradas de Defensa durante el primer turno de combate (o sea, a partir de la primer tirada de Iniciativa.). Funciona únicamente contra un solo rival, una vez finalizadas las agresiones de éste el personaje sí podrá protegerse lo que queda del turno ante los demás enemigos. Para elegir dicha desventaja se deberá tener al menos una tirada de Defensa o esquiva, de lo contrario no podrá escogerse.",
    "modifiers": [],
    "contstraints": [
      {
        "type": "minimum",
        "target": {
          "kind": "combat",
          "key": "defensaEspontanea"
        },
        "value": 1
      }
    ]
  },
  {
    "slug": "odiado",
    "name": "Odiado",
    "reward": null,
    "description": "Elegir sólo una vez uno de los siguientes pueblos de las TIERRAS INMORTALES del listado, los individuos pertenecientes a esa raza, grupo o religión odiarán al personaje por algún asunto del pasado. Cuando luchen contra este (una vez conocida su identidad), dichos rivales obtendrán la regla del ODIO y se aplicará únicamente a este personaje, por lo tanto, contra los compañeros del “odiado” combatirán normalmente. (6) 1- Altos elfos 2- Colegios de Magia 3- Elfos oscuros 4- Enanos de las Montañas 5- Iglesia de Kalgoth 6- Iglesia de Tarnus 7- Ogros 8- Orcos y goblins"
  },
  {
    "slug": "sacrificar-estilo-de-lucha",
    "name": "Sacrificar Estilo de Lucha",
    "reward": null,
    "description": "El personaje no gana ningún Estilo de Lucha adicional a nivel 4 (7).",
    "modifiers": [
      {
        "id": "sacrificar-estilo-de-lucha",
        "source": {
          "id": "desv-sacrificar-estilo-de-lucha",
          "nombre": "Sacrificar Estilo de Lucha"
        },
        "target": {
          "kind": "fightingStyle",
          "key": "all"
        },
        "operation": {
          "kind": "set",
          "value": 1
        }
      }
    ]
  },
  {
    "slug": "ser-horrible",
    "name": "Ser horrible",
    "reward": 7,
    "description": "Tremendas deformaciones o heridas irreparables causarán estragos en el cuerpo del individuo, haciendo que tire su Belleza con 2D4. También se verán afectados aquellos personajes con un número mínimo de Belleza (como las amazonas).",
    "modifiers": [
      {
        "id": "ser-horrible-belleza",
        "source": {
          "id": "desv-ser-horrible",
          "nombre": "Ser horrible"
        },
        "target": {
          "kind": "attribute",
          "key": "belleza"
        },
        "operation": {
          "kind": "setRoll",
          "value": "2D4"
        }
      }
    ]
  },
  {
    "slug": "vulnerable-a-una-esfera-elemental",
    "name": "Vulnerable a una esfera elemental",
    "reward": 8,
    "description": "Habrá que elegir entre el elemento fuego/calor, agua/hielo y viento/electricidad. Todo daño sufrido con dados por la fuente escogida (ya sea mediante golpes físicos, conjuros o habilidades) siempre será con el máximo daño para el personaje con esta desventaja. Por ejemplo, si un ataque hiciese 5D6 PG el sufrido recibirá 30 PG automáticamente."
  },
  {
    "slug": "defectuoso",
    "name": "Defectuoso",
    "reward": 10,
    "description": "Ya sea por enfermedades constantes, o problemas de nacimiento, el personaje tendrá –1 permanente en un atributo que escoja.",
    "modifiers": [
      {
        "id": "defectuoso-atributo",
        "source": {
          "id": "desv-defectuoso",
          "nombre": "Defectuoso"
        },
        "target": {
          "kind": "attribute",
          "key": "fuerza|resistencia|agilidad|percepcion|liderazgo|integligencia"
        },
        "operation": {
          "kind": "add",
          "value": -1
        }
      }
    ]
  },
  {
    "slug": "lento-pero-seguro",
    "name": "Lento pero seguro",
    "reward": 10,
    "description": "Siendo paciente y nada competitivo, el personaje se tomará su propio tiempo para incrementar su poder. A la hora de ascender de nivel, requerirá un 10% más de experiencia que el resto de los personajes.",
    "modifiers": [
      {
        "id": "lento-pero-seguro-experiencia",
        "source": {
          "id": "desv-lento-pero-seguro",
          "nombre": "Lento pero seguro"
        },
        "target": {
          "kind": "resource",
          "key": "experienceModifier"
        },
        "operation": {
          "kind": "add",
          "value": -10
        }
      }
    ]
  },
  {
    "slug": "fortuna",
    "name": "Fortuna",
    "reward": null,
    "description": "Tirar 1D6 y dependiendo del resultado seguir lo indicado:"
  }
];
