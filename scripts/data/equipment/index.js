module.exports = [
  {
    slug: 'cuchillo',
    name: 'Cuchillo',
    slot: 'arma',
    description: 'Hoja corta. 1D3.',
    price: { currency: 'mp', amount: 2 },
    modifiers: [
      { id: 'cuchillo-iniciativa', source: { id: 'equip-cuchillo', nombre: 'Cuchillo' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -1 } }
    ]
  },
  {
    slug: 'daga',
    name: 'Daga',
    slot: 'arma',
    description: 'Hoja corta. 1D4. -1 a la Iniciativa.',
    price: { currency: 'mp', amount: 5 },
    modifiers: [
      { id: 'daga-iniciativa', source: { id: 'equip-daga', nombre: 'Daga' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -1 } }
    ]
  },
  {
    slug: 'daga-murcielago',
    name: 'Daga murciélago',
    slot: 'arma',
    description: 'Daga racial (duende). 1D4. Retorna al lanzador.',
    price: { currency: 'mo', amount: 15 },
    modifiers: [
      { id: 'daga-murcielago-restric', source: { id: 'equip-daga-murcielago', nombre: 'Daga murciélago' }, target: { kind: 'combat', key: 'ataque' }, operation: { kind: 'add', value: 0 }, conditions: [{ type: 'selection', target: 'race', ids: ['duendes'] }], notes: 'Arma racial: sólo usable por duendes (registro informativo).' }
    ],
    constraints: {
      id: 'equip-daga-murcielago-constraint',
      type: 'selection',
      target: 'race',
      ids: ['duendes'],
      message: 'Sólo los duendes pueden usar esta daga.'
    }
  },
  {
    slug: 'escudo-arrojadizo',
    name: 'Escudo arrojadizo',
    slot: 'escudo',
    description: 'Escudo/proyectil. Otorga tirada espontánea de Defensa. +1 Ar y +1 Defensa. Daño 2D4.',
    price: { currency: 'mo', amount: 20 },
    modifiers: [
      { id: 'escudo-arrojadizo-ar', source: { id: 'equip-escudo-arrojadizo', nombre: 'Escudo arrojadizo' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 1 } },
      { id: 'escudo-arrojadizo-def', source: { id: 'equip-escudo-arrojadizo', nombre: 'Escudo arrojadizo' }, target: { kind: 'combat', key: 'defensa' }, operation: { kind: 'add', value: 1 } }
    ],
    constraints: {}
  },
  {
    slug: 'escudo-colmillo',
    name: 'Escudo colmillo',
    slot: 'escudo',
    description: 'Escudo élfico. +1 Ar y +1 Defensa. Daño 1D8 si se usa para atacar.',
    price: { currency: 'mo', amount: 35 },
    modifiers: [
      { id: 'escudo-colmillo-ar', source: { id: 'equip-escudo-colmillo', nombre: 'Escudo colmillo' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 1 }, conditions: [{ type: 'selection', target: 'race', ids: ['elfos'] }] },
      { id: 'escudo-colmillo-def', source: { id: 'equip-escudo-colmillo', nombre: 'Escudo colmillo' }, target: { kind: 'combat', key: 'defensa' }, operation: { kind: 'add', value: 1 }, conditions: [{ type: 'selection', target: 'race', ids: ['elfos'] }] }
    ],
    constraints: {}
  },
  {
    slug: 'escudo-pequeno',
    name: 'Escudo pequeño',
    slot: 'escudo',
    description: 'Escudo pequeño. +1 Ar y +1 Defensa. Si se usa para atacar provoca 1D3.',
    price: { currency: 'mo', amount: 5 },
    modifiers: [
      { id: 'escudo-pequeno-ar', source: { id: 'equip-escudo-pequeno', nombre: 'Escudo pequeño' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 1 } },
      { id: 'escudo-pequeno-def', source: { id: 'equip-escudo-pequeno', nombre: 'Escudo pequeño' }, target: { kind: 'combat', key: 'defensa' }, operation: { kind: 'add', value: 1 } }
    ],
    constraints: {}
  },
  {
    slug: 'espada-corta',
    name: 'Espada corta',
    slot: 'arma',
    description: 'Hoja corta. 1D6.',
    price: { currency: 'mo', amount: 10 },
    modifiers: [],
    constraints: {}
  },
  {
    slug: 'garfio',
    name: 'Garfio',
    slot: 'arma',
    description: 'Hoja corta. 1D4. -1 a la Iniciativa.',
    price: { currency: 'mp', amount: 5 },
    modifiers: [
      { id: 'garfio-iniciativa', source: { id: 'equip-garfio', nombre: 'Garfio' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -1 } }
    ],
    constraints: {}
  },
  {
    slug: 'garras-de-acero',
    name: 'Garras de acero',
    slot: 'arma',
    description: 'Guantelete con garras. 1D4+1.',
    price: { currency: 'mo', amount: 25 },
    modifiers: [
      { id: 'garras-acero-dano', source: { id: 'equip-garras-acero', nombre: 'Garras de acero' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 1 }, conditions: [{ type: 'selection', target: 'race', ids: ['elfos'] }] }
    ],
    constraints: {}
  },
  {
    slug: 'hoz',
    name: 'Hoz',
    slot: 'arma',
    description: 'Perforadora. 1D4+1.',
    price: { currency: 'mp', amount: 6 },
    modifiers: [
      { id: 'hoz-dano', source: { id: 'equip-hoz', nombre: 'Hoz' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 1 } }
    ],
    constraints: {}
  },
  {
    slug: 'latigo',
    name: 'Látigo',
    slot: 'arma',
    description: 'Látigo. 1D4. +2 a la Iniciativa.',
    price: { currency: 'mo', amount: 8 },
    modifiers: [
      { id: 'latigo-iniciativa', source: { id: 'equip-latigo', nombre: 'Látigo' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: 2 } }
    ],
    constraints: {}
  },
  {
    slug: 'manopla',
    name: 'Manopla',
    slot: 'arma',
    description: 'Manopla: bonifica +1 al daño del puño.',
    price: { currency: 'mp', amount: 5 },
    modifiers: [
      { id: 'manopla-dano', source: { id: 'equip-manopla', nombre: 'Manopla' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 1 } }
    ],
    constraints: {}
  },
  {
    slug: 'manopla-puas',
    name: 'Manopla con púas',
    slot: 'arma',
    description: 'Manopla con púas: bonifica +2 al daño del puño.',
    price: { currency: 'mp', amount: 10 },
    modifiers: [
      { id: 'manopla-puas-dano', source: { id: 'equip-manopla-puas', nombre: 'Manopla con púas' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 2 } }
    ],
    constraints: {}
  },
  {
    slug: 'manoplete',
    name: 'Manoplete',
    slot: 'arma',
    description: 'Manoplete racial (ogra). +3 daño si lo usa un ogro.',
    price: { currency: 'mo', amount: 12 },
    modifiers: [
      { id: 'manoplete-dano-ogro', source: { id: 'equip-manoplete', nombre: 'Manoplete' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 3 }, conditions: [{ type: 'selection', target: 'race', ids: ['ogros'] }] }
    ],
    constraints: {
      id: 'equip-manoplete-constraint',
      type: 'selection',
      target: 'race',
      ids: ['ogros'],
      message: 'Sólo los ogros pueden usar este manoplete.'
    }
  },
  {
    slug: 'palo',
    name: 'Palo',
    slot: 'arma',
    description: 'Palo: 1D3.',
    price: { currency: 'mp', amount: 2 },
    modifiers: []
  },
  {
    slug: 'puñal',
    name: 'Puñal',
    slot: 'arma',
    description: 'Puñal: 1D4. -1 a la Iniciativa.',
    price: { currency: 'mp', amount: 6 },
    modifiers: [
      { id: 'punal-iniciativa', source: { id: 'equip-punal', nombre: 'Puñal' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -1 } }
    ]
  },
  {
    slug: 'puñal-asesino',
    name: 'Puñal de asesino',
    slot: 'arma',
    description: 'Puñal élfico: 1D4. Penaliza 1 adicional la defensa del oponente.',
    price: { currency: 'mp', amount: 8 },
    modifiers: [
      { id: 'punal-asesino-penal-def', source: { id: 'equip-punal-asesino', nombre: 'Puñal de asesino' }, target: { kind: 'combat', key: 'penalizarDefensa' }, operation: { kind: 'add', value: -1 }, conditions: [{ type: 'selection', target: 'race', ids: ['elfos'] }] }
    ],
    constraints: {
      id: 'equip-punal-asesino-constraint',
      type: 'selection',
      target: 'race',
      ids: ['elfos'],
      message: 'Sólo los elfos pueden usar este puñal.'
    }
  },
  // armaduras y otras piezas
  {
    slug: 'armadura-pieles',
    name: 'Armadura de pieles',
    slot: 'armadura',
    description: 'Ligera: +1 Ar, +10 PG.',
    price: { currency: 'mo', amount: 3 },
    modifiers: [
      { id: 'armadura-pieles-ar', source: { id: 'equip-armadura-pieles', nombre: 'Armadura de pieles' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 1 } },
      { id: 'armadura-pieles-pg', source: { id: 'equip-armadura-pieles', nombre: 'Armadura de pieles' }, target: { kind: 'resource', key: 'pg' }, operation: { kind: 'add', value: 10 } }
    ]
  },
  {
    slug: 'armadura-cuero-endurecido',
    name: 'Armadura de cuero endurecido',
    slot: 'armadura',
    description: 'Ligera: +2 Ar, +15 PG.',
    price: { currency: 'mo', amount: 10 },
    modifiers: [
      { id: 'armadura-cuero-ar', source: { id: 'equip-armadura-cuero', nombre: 'Armadura de cuero endurecido' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 2 } },
      { id: 'armadura-cuero-pg', source: { id: 'equip-armadura-cuero', nombre: 'Armadura de cuero endurecido' }, target: { kind: 'resource', key: 'pg' }, operation: { kind: 'add', value: 15 } }
    ]
  },
  {
    slug: 'cota-de-mallas',
    name: 'Cota de mallas',
    slot: 'armadura',
    description: 'Ligera: +5 Ar, +35 PG.',
    price: { currency: 'mo', amount: 65 },
    modifiers: [
      { id: 'cota-mallas-ar', source: { id: 'equip-cota-mallas', nombre: 'Cota de mallas' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 5 } },
      { id: 'cota-mallas-pg', source: { id: 'equip-cota-mallas', nombre: 'Cota de mallas' }, target: { kind: 'resource', key: 'pg' }, operation: { kind: 'add', value: 35 } }
    ],
    constraints: {}
  },
   {
    slug: 'cota-de-mallas-elfica',
    name: 'Cota de mallas élfica',
    slot: 'armadura',
    description: 'Ligera: +7 Ar, +50 PG. Penaliza en 2 los PC.',
    price: { currency: 'mo', amount: 100 },
    modifiers: [
      { id: 'cota-mallas-ar', source: { id: 'equip-cota-mallas', nombre: 'Cota de mallas élfica' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 7 } },
      { id: 'cota-mallas-pg', source: { id: 'equip-cota-mallas', nombre: 'Cota de mallas élfica' }, target: { kind: 'resource', key: 'pg' }, operation: { kind: 'add', value: 50 } },
      { id: 'cota-de-mallas-penalizacion-pc', source: { id: 'equip-cota-mallas-elfica', nombre: 'Cota de mallas élfica' }, target: { kind: 'resource', key: 'pc' }, operation: { kind: 'add', value: -2 }, notes: 'Penalización de 2 PC por usar esta armadura.' }
    ],
    constraints: {
      id: 'equip-cota-mallas-elfica-constraint',
      type: 'selection',
      target: 'race',
      ids: ['elfos'],
      message: 'Sólo los elfos pueden usar esta armadura.'
    }
  },
  {
    slug: 'dardos-de-amazona',
    name: 'Dardos de amazona',
    slot: 'equipo',
    description: 'Dardos envenenados que provocan 5D10 PG cada uno.',
    price: { currency: 'mc', amount: 0 },
    modifiers: [
      { id: 'dardos-amazona-restric', source: { id: 'equip-dardos-amazona', nombre: 'Dardos de amazona' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 10 }, conditions: [{ type: 'selection', target: 'specialty', ids: ['amazonas'] }], notes: 'Equipo racial: sólo usable por amazonas (registro informativo).' }
    ],
    constraints: {
      id: 'equip-dardos-amazona-constraint',
      type: 'selection',
      target: 'specialty',
      ids: ['amazonas'],
      message: 'Sólo las amazonas pueden usar este equipo.'
    }
  }
];

