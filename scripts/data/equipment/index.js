// EXTENDED EQUIPMENT FILE — PART 1
// This file follows the same modifier schema already present in index.js

module.exports = [
  // ==========================
  // KIT DE AVENTURERO (BASE)
  // ==========================
    {
        slug: 'kit-aventurero',
        name: 'Kit de aventurero',
        slot: 'equipo',
        description: 'Cuerda (3m), bolsa de dormir, comida y bebida por una semana, yesca y pedernal, una antorcha.',
        price: { currency: 'mo', amount: 0 },
        modifiers: [],
        constraints: {}
    },
    // ==========================
    // ARMAS PEQUEÑAS
    // ==========================
    {
        slug: 'cadena',
        name: 'Cadena',
        slot: 'arma',
        description: 'Látigo. 1D3.',
        price: { currency: 'mp', amount: 4 },
        modifiers: []
    },
    {
        slug: 'cuerda-reforzada',
        name: 'Cuerda reforzada',
        slot: 'arma',
        description: 'Látigo. 1D2.',
        price: { currency: 'mp', amount: 3 },
        modifiers: []
    },
    {
        slug: 'escudo-pequeno',
        name: 'Escudo pequeño',
        slot: 'escudo',
        description: 'Otorga Defensa espontánea. +1 Ar y +1 Defensa. Daño 1D3 si se ataca.',
        price: { currency: 'mo', amount: 5 },
        modifiers: [
        { id: 'escudo-peq-ar', source: { id: 'equip-escudo-peq', nombre: 'Escudo pequeño' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 1 } },
        { id: 'escudo-peq-def', source: { id: 'equip-escudo-peq', nombre: 'Escudo pequeño' }, target: { kind: 'combat', key: 'defensa' }, operation: { kind: 'add', value: 1 } }
        ]
    },
    {
        slug: 'latigo',
        name: 'Látigo',
        slot: 'arma',
        description: 'Látigo. 1D4. +2 a la Iniciativa.',
        price: { currency: 'mp', amount: 8 },
        modifiers: [
        { id: 'latigo-init', source: { id: 'equip-latigo', nombre: 'Látigo' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: 2 } }
        ]
    },
    {
        slug: 'manopla',
        name: 'Manopla',
        slot: 'arma',
        description: 'Golpeante. Bonifica +1 al daño de puños.',
        price: { currency: 'mp', amount: 5 },
        modifiers: [
        { id: 'manopla-dmg', source: { id: 'equip-manopla', nombre: 'Manopla' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 1 } }
        ]
    },
    {
        slug: 'manopla-puas',
        name: 'Manopla con púas',
        slot: 'arma',
        description: 'Golpeante. Bonifica +2 al daño de puños.',
        price: { currency: 'mp', amount: 10 },
        modifiers: [
        { id: 'manopla-puas-dmg', source: { id: 'equip-manopla-puas', nombre: 'Manopla con púas' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 2 } }
        ]
    },
    {
        slug: 'manoplete-ogra',
        name: 'Manoplete (ogra)',
        slot: 'arma',
        description: 'Manopla ogra. +3 daño. Sólo ogros.',
        price: { currency: 'mp', amount: 12 },
        modifiers: [
        { id: 'manoplete-ogro-dmg', source: { id: 'equip-manoplete', nombre: 'Manoplete' }, target: { kind: 'combat', key: 'dano' }, operation: { kind: 'add', value: 3 }, conditions: [{ type: 'selection', target: 'race', ids: ['ogros'] }] }
        ],
        constraints: {
        id: 'manoplete-ogro-only',
        type: 'selection',
        target: 'race',
        ids: ['ogros'],
        message: 'Sólo los ogros pueden usar este manoplete.'
        }
    },
    // ==========================
    // ARMAS MEDIANAS
    // ==========================
    {
        slug: 'cimitarra',
        name: 'Cimitarra',
        slot: 'arma',
        description: 'Hoja larga. 1D8.',
        price: { currency: 'mp', amount: 15 },
        modifiers: []
    },
    {
        slug: 'cuchillo-carnicero-ogra',
        name: 'Cuchillo carnicero (ogra)',
        slot: 'arma',
        description: 'Hoja pesada. 1D10. Ogros pueden usarlo a una mano; otros a dos manos.',
        price: { currency: 'mp', amount: 25 },
        modifiers: [],
        constraints: {
        id: 'carnicero-ogro-only',
        type: 'selection',
        target: 'race',
        ids: ['ogros'],
        message: 'Sólo los ogros pueden usar este cuchillo a una mano.'
        }
    },
    {
        slug: 'escudo-mediano',
        name: 'Escudo mediano',
        slot: 'escudo',
        description: 'Otorga Defensa espontánea. +2 Ar y +2 Defensa. Daño 1D4 si se ataca.',
        price: { currency: 'mo', amount: 17 },
        modifiers: [
        { id: 'escudo-med-ar', source: { id: 'equip-escudo-med', nombre: 'Escudo mediano' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 2 } },
        { id: 'escudo-med-def', source: { id: 'equip-escudo-med', nombre: 'Escudo mediano' }, target: { kind: 'combat', key: 'defensa' }, operation: { kind: 'add', value: 2 } }
        ]
    },
    {
        slug: 'escudo-grande',
        name: 'Escudo grande',
        slot: 'escudo',
        description: 'Defensa espontánea. +2 Ar y +2 Defensa (+3 vs proyectiles). Penaliza -1 A. No puede atacar.',
        price: { currency: 'mo', amount: 35 },
        modifiers: [
        { id: 'escudo-gra-ar', source: { id: 'equip-escudo-gra', nombre: 'Escudo grande' }, target: { kind: 'combat', key: 'armadura' }, operation: { kind: 'add', value: 2 } },
        { id: 'escudo-gra-def', source: { id: 'equip-escudo-gra', nombre: 'Escudo grande' }, target: { kind: 'combat', key: 'defensa' }, operation: { kind: 'add', value: 2 } },
        { id: 'escudo-gra-agi', source: { id: 'equip-escudo-gra', nombre: 'Escudo grande' }, target: { kind: 'attribute', key: 'agilidad' }, operation: { kind: 'add', value: -1 } }
        ]
    },
    {
        slug: 'espada-larga',
        name: 'Espada larga',
        slot: 'arma',
        description: 'Hoja larga. 1D8.',
        price: { currency: 'mp', amount: 20 },
        modifiers: []
    },
    {
        slug: 'espada-bastarda-humana',
        name: 'Espada bastarda',
        slot: 'arma',
        description: 'Hoja larga. 1D8+1. -1 Iniciativa. Una o dos manos.',
        price: { currency: 'mp', amount: 25 },
        modifiers: [
        { id: 'bastarda-init', source: { id: 'equip-bastarda', nombre: 'Espada bastarda' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -1 } }
        ]
    },
    {
        slug: 'florete',
        name: 'Florete',
        slot: 'arma',
        description: 'Hoja larga. 1D6. Penaliza en 1 la R contra críticos a la víctima.',
        price: { currency: 'mp', amount: 25 },
        modifiers: [
        { id: 'florete-crit', source: { id: 'equip-florete', nombre: 'Florete' }, target: { kind: 'combat', key: 'resistenciaCritico' }, operation: { kind: 'add', value: -1 } }
        ]
    },
    {
        slug: 'lanza',
        name: 'Lanza',
        slot: 'arma',
        description: 'Perforadora. 1D6+1. +1 Iniciativa.',
        price: { currency: 'mp', amount: 10 },
        modifiers: [
        { id: 'lanza-init', source: { id: 'equip-lanza', nombre: 'Lanza' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: 1 } }
        ]
    },
    {
        slug: 'mangual',
        name: 'Mangual',
        slot: 'arma',
        description: 'Golpeante. 1D8.',
        price: { currency: 'mp', amount: 20 },
        modifiers: []
    },
    {
        slug: 'martillo-guerra',
        name: 'Martillo de guerra',
        slot: 'arma',
        description: 'Golpeante. 1D8.',
        price: { currency: 'mp', amount: 25 },
        modifiers: []
    }
    ,
    // ==========================
    // ARMAS GRANDES
    // ==========================
    {
        slug: 'alabarda',
        name: 'Alabarda',
        slot: 'arma',
        description: 'Asta. 1D10+1. Dos manos.',
        price: { currency: 'mp', amount: 50 },
        modifiers: []
    },
    {
        slug: 'bo-elfico',
        name: 'Bo (élfico)',
        slot: 'arma',
        description: 'Bastón largo. 1D6. +2 a chequeos de Agilidad o Fuerza para saltar. +1 Iniciativa por nivel.',
        price: { currency: 'mp', amount: 15 },
        modifiers: [
        { id: 'bo-salto', source: { id: 'equip-bo', nombre: 'Bo' }, target: { kind: 'skill', key: 'saltar' }, operation: { kind: 'add', value: 2 } }
        ],
        constraints: {
        id: 'bo-elfo-only',
        type: 'selection',
        target: 'race',
        ids: ['elfos'],
        message: 'Sólo los elfos pueden usar el Bo.'
        }
    },
    {
        slug: 'cimitarra-dos-manos',
        name: 'Cimitarra a dos manos',
        slot: 'arma',
        description: 'Hoja larga. 2D6+2. -4 Iniciativa. Dos manos.',
        price: { currency: 'mp', amount: 40 },
        modifiers: [
        { id: 'cimitarra2h-init', source: { id: 'equip-cimitarra2h', nombre: 'Cimitarra a dos manos' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -4 } }
        ]
    },
    {
        slug: 'espada-dos-manos',
        name: 'Espada a dos manos',
        slot: 'arma',
        description: 'Hoja larga. 2D6+2. -4 Iniciativa. Dos manos.',
        price: { currency: 'mp', amount: 55 },
        modifiers: [
        { id: 'espada2h-init', source: { id: 'equip-espada2h', nombre: 'Espada a dos manos' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -4 } }
        ]
    },
    {
        slug: 'espada-dungrim',
        name: 'Espada D’ungrim',
        slot: 'arma',
        description: 'Espada enana. 2D6+2. Ignora Ar en armaduras ligeras. -5 Iniciativa.',
        price: { currency: 'mo', amount: 80 },
        modifiers: [
        { id: 'dungrim-init', source: { id: 'equip-dungrim', nombre: 'Espada D’ungrim' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -5 } }
        ],
        constraints: {
        id: 'dungrim-enano-only',
        type: 'selection',
        target: 'race',
        ids: ['enanos'],
        message: 'Sólo los enanos pueden usar esta espada.'
        }
    },
    {
        slug: 'gran-plancha-ogra',
        name: 'Gran Plancha (ogra)',
        slot: 'arma',
        description: 'Hoja larga. 3D6+2. -4 Iniciativa. Dos manos.',
        price: { currency: 'mp', amount: 45 },
        modifiers: [
        { id: 'gran-plancha-init', source: { id: 'equip-gran-plancha', nombre: 'Gran Plancha' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -4 } }
        ],
        constraints: {
        id: 'gran-plancha-ogro-only',
        type: 'selection',
        target: 'race',
        ids: ['ogros'],
        message: 'Sólo los ogros pueden usar esta arma.'
        }
    },
    {
        slug: 'guadana',
        name: 'Guadaña',
        slot: 'arma',
        description: 'Asta. 1D10. -1 R contra críticos. Dos manos.',
        price: { currency: 'mp', amount: 30 },
        modifiers: [
        { id: 'guadana-crit', source: { id: 'equip-guadana', nombre: 'Guadaña' }, target: { kind: 'combat', key: 'resistenciaCritico' }, operation: { kind: 'add', value: -1 } }
        ]
    },
    {
        slug: 'hacha-batalla',
        name: 'Hacha de batalla',
        slot: 'arma',
        description: 'Hoja pesada. 2D6+2. -4 Iniciativa. Dos manos.',
        price: { currency: 'mp', amount: 45 },
        modifiers: [
        { id: 'hacha-batalla-init', source: { id: 'equip-hacha-batalla', nombre: 'Hacha de batalla' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -4 } }
        ]
    },
    {
        slug: 'lanza-larga',
        name: 'Lanza larga',
        slot: 'arma',
        description: 'Perforadora. 1D10+1. +1 Iniciativa. Dos manos.',
        price: { currency: 'mp', amount: 18 },
        modifiers: [
        { id: 'lanza-larga-init', source: { id: 'equip-lanza-larga', nombre: 'Lanza larga' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: 1 } }
        ]
    },
    {
        slug: 'martillo-dos-manos',
        name: 'Martillo a dos manos',
        slot: 'arma',
        description: 'Golpeante. 2D6+2. -4 Iniciativa. Dos manos.',
        price: { currency: 'mp', amount: 40 },
        modifiers: [
        { id: 'martillo2h-init', source: { id: 'equip-martillo2h', nombre: 'Martillo a dos manos' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -4 } }
        ]
    },
    {
        slug: 'palute-ogra',
        name: 'Palute (ogra)',
        slot: 'arma',
        description: 'Golpeante. 3D6+2. -4 Iniciativa. Dos manos.',
        price: { currency: 'mp', amount: 40 },
        modifiers: [
        { id: 'palute-init', source: { id: 'equip-palute', nombre: 'Palute' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: -4 } }
        ],
        constraints: {
        id: 'palute-ogro-only',
        type: 'selection',
        target: 'race',
        ids: ['ogros'],
        message: 'Sólo los ogros pueden usar esta arma.'
        }
    },
    {
        slug: 'tridente',
        name: 'Tridente',
        slot: 'arma',
        description: 'Perforadora. 1D10+1. +1 Iniciativa. Dos manos.',
        price: { currency: 'mp', amount: 8 },
        modifiers: [
        { id: 'tridente-init', source: { id: 'equip-tridente', nombre: 'Tridente' }, target: { kind: 'combat', key: 'iniciativa' }, operation: { kind: 'add', value: 1 } },
        ]
    },
  // ===============================
// PART 4 – ARMAS A DISTANCIA
// ===============================
    {
        slug: 'arcabuz',
        name: 'Arcabuz',
        slot: 'arma',
        description: 'Arma de fuego. Usa balas. +3D4 daño. Siempre crítico. –1 Disparos cada 50m. Un disparo por turno. Alcance 100m.',
        price: { currency: 'mo', amount: 200 },
        modifiers: [
            {
            id: 'arcabuz-critical',
            source: { id: 'equip-arcabuz', nombre: 'Arcabuz' },
            target: { kind: 'combat', key: 'criticalAlways' },
            operation: { kind: 'set', value: true }
            }
        ],
        constraints: {
            id: 'arcabuz-racial',
            type: 'selection',
            target: 'race',
            ids: ['humanos', 'enanos'],
            message: 'Sólo humanos y enanos pueden usar el arcabuz.'
        }
    },
    {
        slug: 'arco-corto',
        name: 'Arco corto',
        slot: 'arma',
        description: 'Arco. Dos manos. –2 Iniciativa. –1 Disparos cada 30m. Alcance 150m.',
        price: { currency: 'mp', amount: 20 },
        modifiers: [
            {
            id: 'arco-corto-init',
            source: { id: 'equip-arco-corto', nombre: 'Arco corto' },
            target: { kind: 'combat', key: 'iniciativa' },
            operation: { kind: 'add', value: -2 }
            }
        ]
    },
    {
        slug: 'arco-largo-elfico',
        name: 'Arco largo élfico',
        slot: 'arma',
        description: 'Arco élfico. –2 Iniciativa. +1 Disparos. No se rompe por fallo crítico. –1 Disparos cada 80m. Alcance 250m.',
        price: { currency: 'mp', amount: 70 },
        modifiers: [
            {
                id: 'arco-elfico-init',
                source: { id: 'equip-arco-largo-elfico', nombre: 'Arco largo élfico' },
                target: { kind: 'combat', key: 'iniciativa' },
                operation: { kind: 'add', value: -2 }
            },
            {
                id: 'arco-elfico-disparos',
                source: { id: 'equip-arco-largo-elfico', nombre: 'Arco largo élfico' },
                target: { kind: 'skill', key: 'disparos' },
                operation: { kind: 'add', value: 1 }
            }
        ],
        constraints: {
            id: 'arco-elfico-only',
            type: 'selection',
            target: 'race',
            ids: ['elfos'],
            message: 'Sólo los elfos pueden usar este arco.'
        }
    },
    {
        slug: 'red',
        name: 'Red',
        slot: 'arma',
        description: 'Proyectil. Ignora penalizadores por armadura. Inmoviliza 1D3 turnos si falla F o A. Alcance 20m.',
        price: { currency: 'mp', amount: 5 },
        modifiers: []
    },
    // ==========================
    // MUNICIÓN
    // ==========================
    {
        slug: 'bala',
        name: 'Bala',
        slot: 'municion',
        description: 'Munición para arcabuz, pistola y atronador. Daño 2D4.',
        price: { currency: 'mo', amount: 1 },
        modifiers: [],
        constraints: {
            id: 'bala-firearms-only',
            type: 'equipment',
            target: 'weapon',
            ids: ['arcabuz', 'pistola', 'atronador'],
            message: 'Las balas sólo pueden usarse con armas de fuego.'
        }
    },
    {
        slug: 'flecha-madera',
        name: 'Flecha de madera',
        slot: 'municion',
        description: 'Munición estándar para arcos y ballestas. Daño 1D4.',
        price: { currency: 'mc', amount: 1 },
        modifiers: []
    },
    {
        slug: 'flecha-acero',
        name: 'Flecha de acero',
        slot: 'municion',
        description: 'Munición reforzada para arcos y ballestas. Daño 1D6.',
        price: { currency: 'mc', amount: 3 },
        modifiers: []
    },
    {
        slug: 'flecha-elfica',
        name: 'Flecha élfica',
        slot: 'municion',
        description: 'Munición élfica, más ligera y de mayor alcance. Daño 2D3.',
        price: { currency: 'mc', amount: 2 },
        modifiers: [],
        constraints: {
            id: 'flecha-elfica-only',
            type: 'selection',
            target: 'race',
            ids: ['elfos'],
            message: 'Sólo los elfos pueden utilizar flechas élficas.'
        }
    },
    {
        slug: 'dardo',
        name: 'Dardo',
        slot: 'municion',
        description: 'Munición para cerbatana o lanzamiento manual. Daño 1D3.',
        price: { currency: 'mc', amount: 1 },
        modifiers: []
    },
    // ========================== 
    // ARMADURAS
    // ==========================

    {
        slug: 'armadura-pieles',
        name: 'Armadura de pieles',
        slot: 'armadura',
        description: 'Armadura ligera de pieles. Brinda Ar 1. +10 PG.',
        price: { currency: 'mo', amount: 3 },
        modifiers: [
            {
                id: 'pieles-ar',
                source: { id: 'equip-armadura-pieles', nombre: 'Armadura de pieles' },
                target: { kind: 'defense', key: 'armadura' },
                operation: { kind: 'add', value: 1 }
            },
            {
                id: 'pieles-pg',
                source: { id: 'equip-armadura-pieles', nombre: 'Armadura de pieles' },
                target: { kind: 'vital', key: 'pg' },
                operation: { kind: 'add', value: 10 }
            }
        ]
    },
    {
        slug: 'armadura-acolchada',
        name: 'Armadura acolchada',
        slot: 'armadura',
        description: 'Armadura ligera acolchada. Brinda Ar 1. +10 PG.',
        price: { currency: 'mo', amount: 3 },
        modifiers: [
            {
                id: 'acolchada-ar',
                source: { id: 'equip-armadura-acolchada', nombre: 'Armadura acolchada' },
                target: { kind: 'defense', key: 'armadura' },
                operation: { kind: 'add', value: 1 }
            },
            {
                id: 'acolchada-pg',
                source: { id: 'equip-armadura-acolchada', nombre: 'Armadura acolchada' },
                target: { kind: 'vital', key: 'pg' },
                operation: { kind: 'add', value: 10 }
            }
        ]
    },
    {
        slug: 'armadura-cuero',
        name: 'Armadura de cuero',
        slot: 'armadura',
        description: 'Armadura ligera de cuero. Brinda Ar 1. +10 PG.',
        price: { currency: 'mo', amount: 3 },
        modifiers: [
            {
                id: 'cuero-ar',
                source: { id: 'equip-armadura-cuero', nombre: 'Armadura de cuero' },
                target: { kind: 'defense', key: 'armadura' },
                operation: { kind: 'add', value: 1 }
            },
            {
                id: 'cuero-pg',
                source: { id: 'equip-armadura-cuero', nombre: 'Armadura de cuero' },
                target: { kind: 'vital', key: 'pg' },
                operation: { kind: 'add', value: 10 }
            }
        ]
    },
    {
        slug: 'armadura-cuero-endurecido',
        name: 'Armadura de cuero endurecido',
        slot: 'armadura',
        description: 'Armadura ligera. Brinda Ar 2. +15 PG.',
        price: { currency: 'mo', amount: 10 },
        modifiers: [
            {
                id: 'cuero-endurecido-ar',
                source: { id: 'equip-armadura-cuero-endurecido', nombre: 'Armadura de cuero endurecido' },
                target: { kind: 'defense', key: 'armadura' },
                operation: { kind: 'add', value: 2 }
            },
            {
                id: 'cuero-endurecido-pg',
                source: { id: 'equip-armadura-cuero-endurecido', nombre: 'Armadura de cuero endurecido' },
                target: { kind: 'vital', key: 'pg' },
                operation: { kind: 'add', value: 15 }
            }
        ]
    },
    {
        slug: 'cota-mallas',
        name: 'Cota de mallas',
        slot: 'armadura',
        description: 'Armadura ligera. Brinda Ar 5. +35 PG.',
        price: { currency: 'mo', amount: 65 },
        modifiers: [
            {
                id: 'mallas-ar',
                source: { id: 'equip-cota-mallas', nombre: 'Cota de mallas' },
                target: { kind: 'defense', key: 'armadura' },
                operation: { kind: 'add', value: 5 }
            },
            {
                id: 'mallas-pg',
                source: { id: 'equip-cota-mallas', nombre: 'Cota de mallas' },
                target: { kind: 'vital', key: 'pg' },
                operation: { kind: 'add', value: 35 }
            }
        ]
    },
    {
        slug: 'cota-mallas-elfica',
        name: 'Cota de mallas élfica',
        slot: 'armadura',
        description: 'Armadura élfica. Brinda Ar 7. +50 PG. Penaliza 2 PC.',
        price: { currency: 'mo', amount: 85 },
        modifiers: [
            {
                id: 'mallas-elfica-ar',
                source: { id: 'equip-cota-mallas-elfica', nombre: 'Cota de mallas élfica' },
                target: { kind: 'defense', key: 'armadura' },
                operation: { kind: 'add', value: 7 }
            },
            {
                id: 'mallas-elfica-pg',
                source: { id: 'equip-cota-mallas-elfica', nombre: 'Cota de mallas élfica' },
                target: { kind: 'vital', key: 'pg' },
                operation: { kind: 'add', value: 50 }
            },
            {
                id: 'mallas-elfica-pc',
                source: { id: 'equip-cota-mallas-elfica', nombre: 'Cota de mallas élfica' },
                target: { kind: 'resource', key: 'pc' },
                operation: { kind: 'add', value: -2 }
            }
        ],
        constraints: {
            id: 'mallas-elfica-only',
            type: 'selection',
            target: 'race',
            ids: ['elfos'],
            message: 'Sólo los elfos pueden usar esta armadura.'
        }
    },
    {
        slug: 'armadura-runica',
        name: 'Armadura rúnica',
        slot: 'armadura',
        description: 'Armadura enana. Brinda Ar 13. +120 PG. Reduce 5 PG de daño por conjuros.',
        price: { currency: 'mo', amount: 3500 },
        modifiers: [
            {
                id: 'runica-ar',
                source: { id: 'equip-armadura-runica', nombre: 'Armadura rúnica' },
                target: { kind: 'defense', key: 'armadura' },
                operation: { kind: 'add', value: 13 }
            },
            {
                id: 'runica-pg',
                source: { id: 'equip-armadura-runica', nombre: 'Armadura rúnica' },
                target: { kind: 'vital', key: 'pg' },
                operation: { kind: 'add', value: 120 }
            },
            {
                id: 'runica-conjuros',
                source: { id: 'equip-armadura-runica', nombre: 'Armadura rúnica' },
                target: { kind: 'defense', key: 'spellDamageReduction' },
                operation: { kind: 'add', value: 5 }
            }
        ],
        constraints: {
            id: 'runica-enanos-only',
            type: 'selection',
            target: 'race',
            ids: ['enanos'],
            message: 'Sólo los enanos pueden usar esta armadura.'
        }
    },
    {
        slug: 'yelmo',
        name: 'Yelmo',
        slot: 'yelmo',
        description: 'Yelmo básico. Previene críticos en la cabeza.',
        price: { currency: 'mo', amount: 1 },
        modifiers: [
            {
            id: 'yelmo-head',
            source: { id: 'equip-yelmo', nombre: 'Yelmo' },
            target: { kind: 'combat', key: 'preventHeadCriticals' },
            operation: { kind: 'set', value: true }
            }
        ]
    },
    {
        slug: 'yelmo-enanil',
        name: 'Yelmo enanil',
        slot: 'yelmo',
        description: 'Yelmo enano. Previene críticos en la cabeza. Reduce 1 daño de conjuros.',
        price: { currency: 'mo', amount: 20 },
        modifiers: [
            {
                id: 'yelmo-enanil-head',
                source: { id: 'equip-yelmo-enanil', nombre: 'Yelmo enanil' },
                target: { kind: 'combat', key: 'preventHeadCriticals' },
                operation: { kind: 'set', value: true }
            },
            {
                id: 'yelmo-enanil-spell',
                source: { id: 'equip-yelmo-enanil', nombre: 'Yelmo enanil' },
                target: { kind: 'defense', key: 'spellDamageReduction' },
                operation: { kind: 'add', value: 1 }
            }
        ],
        constraints: {
            id: 'yelmo-enanil-only',
            type: 'selection',
            target: 'race',
            ids: ['enanos'],
            message: 'Sólo los enanos pueden usar este yelmo.'
        }
    }
];
