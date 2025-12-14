const { createSource } = require('../raceModifiers/shared');

module.exports = [
  {
    slug: 'arco-y-ballesta',
    name: 'Arco y ballesta',
    weaponTag: 'arco',
    description:
      'Escuelas dedicadas a los proyectiles de largo alcance: arcos, ballestas y armas de fuego. Favorecen el hostigamiento y la punteria antes que la defensa directa.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-iniciativa',
        source: createSource('fs-arcos-y-ballestas', 'Especialización: Arco y ballesta'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'arcos-y-ballestas-ataqueDistancia',
        source: createSource('fs-arcos-y-ballestas', 'Especialización: Arco y ballesta'),
        target: { kind: 'combat', key: 'ataqueDistancia' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'arcos-y-ballestas-defensa',
        source: createSource('fs-arcos-y-ballestas', 'Especialización: Arco y ballesta'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'arcos-y-ballestas-dano',
        source: createSource('fs-arcos-y-ballestas', 'Especialización: Arco y ballesta'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'arcos-y-ballestas-crítico',
        source: createSource('fs-arcos-y-ballestas', 'Especialización: Arco y ballesta'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    slug: 'armas-de-asta',
    name: 'Armas de asta',
    weaponTag: 'armaPesada',
    description:
      'Lanzas, picas, alabardas y guadanas capaces de mantener a raya a los enemigos gracias a su enorme alcance y golpes de barrido.',
    modifiers: [
      {
        id: 'armas-de-asta-iniciativa',
        source: createSource('fs-armas-de-asta', 'Especialización: Armas de asta'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-de-asta-ataque',
        source: createSource('fs-armas-de-asta', 'Especialización: Armas de asta'),
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-de-asta-defensa',
        source: createSource('fs-armas-de-asta', 'Especialización: Armas de asta'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'arcos-y-ballestas-dano',
        source: createSource('fs-arcos-y-ballestas', 'Especialización: Arco y ballesta'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'arcos-y-ballestas-crítico',
        source: createSource('fs-arcos-y-ballestas', 'Especialización: Arco y ballesta'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    slug: 'armas-golpeantes',
    name: 'Armas golpeantes',
    weaponTag: 'armaPesada',
    description:
      'Mazazos, martillos y manguales que concentran toda la fuerza del guerrero para destrozar armaduras y huesos por igual.',
    modifiers: [
      {
        id: 'armas-golpeantes-iniciativa',
        source: createSource('fs-armas-golpeantes', 'Especialización: Armas golpeantes'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-golpeantes-ataque',
        source: createSource('fs-armas-golpeantes', 'Especialización: Armas golpeantes'),
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-golpeantes-defensa',
        source: createSource('fs-armas-golpeantes', 'Especialización: Armas golpeantes'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-golpeantes-dano',
        source: createSource('fs-armas-golpeantes', 'Especialización: Armas golpeantes'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'armas-golpeantes-crítico',
        source: createSource('fs-armas-golpeantes', 'Especialización: Armas golpeantes'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    slug: 'hojas-pesadas',
    name: 'Hojas pesadas',
    weaponTag: 'armaPesada',
    description:
      'Hachas anchas y enormes cuchillos de carnicero que priorizan la potencia bruta por encima de la velocidad.',
    modifiers: [
      {
        id: 'hojas-pesadas-iniciativa',
        source: createSource('fs-hojas-pesadas', 'Especialización: Hojas pesadas'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-pesadas-ataque',
        source: createSource('fs-hojas-pesadas', 'Especialización: Hojas pesadas'),
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-pesadas-defensa',
        source: createSource('fs-hojas-pesadas', 'Especialización: Hojas pesadas'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-pesadas-dano',
        source: createSource('fs-hojas-pesadas', 'Especialización: Hojas pesadas'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'hojas-pesadas-crítico',
        source: createSource('fs-hojas-pesadas', 'Especialización: Hojas pesadas'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    slug: 'hojas-cortas',
    name: 'Hojas cortas',
    weaponTag: null,
    description:
      'Cuchillos, dagas y armas facilmente ocultables. Ideales para asesinos y bribones que dependen de la precision y del sigilo.',
    modifiers: [
      {
        id: 'hojas-cortas-iniciativa',
        source: createSource('fs-hojas-cortas', 'Especialización: Hojas cortas'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-cortas-ataque',
        source: createSource('fs-hojas-cortas', 'Especialización: Hojas cortas'),
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-cortas-defensa',
        source: createSource('fs-hojas-cortas', 'Especialización: Hojas cortas'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-cortas-dano',
        source: createSource('fs-hojas-cortas', 'Especialización: Hojas cortas'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'hojas-cortas-crítico',
        source: createSource('fs-hojas-cortas', 'Especialización: Hojas cortas'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    slug: 'hojas-largas',
    name: 'Hojas largas',
    weaponTag: null,
    description:
      'Espadas largas, bastardas y floretes que equilibran elegancia, alcance moderado y criticos devastadores.',
    modifiers: [
      {
        id: 'hojas-largas-iniciativa',
        source: createSource('fs-hojas-largas', 'Especialización: Hojas largas'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-largas-ataque',
        source: createSource('fs-hojas-largas', 'Especialización: Hojas largas'),
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-largas-defensa',
        source: createSource('fs-hojas-largas', 'Especialización: Hojas largas'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'hojas-largas-dano',
        source: createSource('fs-hojas-largas', 'Especialización: Hojas largas'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'hojas-largas-crítico',
        source: createSource('fs-hojas-largas', 'Especialización: Hojas largas'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    slug: 'armas-perforadoras',
    name: 'Armas perforadoras',
    weaponTag: null,
    description:
      'Lanzas cortas, tridentes y armas diseniadas para atravesar escudos o detener caballerias sin perder movilidad.',
    modifiers: [
      {
        id: 'armas-perforadoras-iniciativa',
        source: createSource('fs-armas-perforadoras', 'Especialización: Armas perforadoras'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-perforadoras-ataque',
        source: createSource('fs-armas-perforadoras', 'Especialización: Armas perforadoras'),
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-perforadoras-defensa',
        source: createSource('fs-armas-perforadoras', 'Especialización: Armas perforadoras'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-perforadoras-dano',
        source: createSource('fs-armas-perforadoras', 'Especialización: Armas perforadoras'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'armas-perforadoras-crítico',
        source: createSource('fs-armas-perforadoras', 'Especialización: Armas perforadoras'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    slug: 'latigos',
    name: 'Latigos',
    weaponTag: null,
    description:
      'Latigos tradicionales, flagelos encadenados y cadenas con pesos. Proporcionan control del campo de batalla y grandes bonificaciones a la iniciativa.',
    modifiers: [
      {
        id: 'latigos-iniciativa',
        source: createSource('fs-latigos', 'Especialización: Látigos'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'latigos-ataque',
        source: createSource('fs-latigos', 'Especialización: Látigos'),
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'latigos-defensa',
        source: createSource('fs-latigos', 'Especialización: Látigos'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'latigos-dano',
        source: createSource('fs-latigos', 'Especialización: Látigos'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'latigos-crítico',
        source: createSource('fs-latigos', 'Especialización: Látigos'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    slug: 'escudos',
    name: 'Escudos',
    weaponTag: 'escudo',
    description:
      'Especialistas en la defensa con escudos de todos los tamanos. Protegen aliados, detienen proyectiles y convierten cada parada en una oportunidad ofensiva.',
    modifiers: [
      {
        id: 'escudos-iniciativa',
        source: createSource('fs-escudos', 'Especialización: Escudos'),
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'escudos-ataque',
        source: createSource('fs-escudos', 'Especialización: Escudos'),
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'escudos-defensa',
        source: createSource('fs-escudos', 'Especialización: Escudos'),
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'escudos-dano',
        source: createSource('fs-escudos', 'Especialización: Escudos'),
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'escudos-crítico',
        source: createSource('fs-escudos', 'Especialización: Escudos'),
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  }
];
