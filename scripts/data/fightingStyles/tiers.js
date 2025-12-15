module.exports = [
  // Lucha sin armas
  {
    styleSlug: 'lucha-sin-armas',
    group: 1,
    order: 1,
    title: 'Recibir una defensa espontanea',
    description: 'La velocidad de manos y pies permite interponer una guardia gratuita aunque no se porte escudo.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g1-a1-defensa',
        source: { id: 'manual:lucha-sin-armas-g1-a1', nombre: 'Recibir una defensa espontanea' },
        target: { kind: 'combat', key: 'cantidadDeDefensas' },
        operation: { kind: 'add', value: 1 }
      } 
    ]
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 1,
    order: 2,
    title: 'Mejorar el dano del golpe',
    description:
      'Cada golpe de puno o patada canaliza todo el peso del cuerpo e inflige 1D6 PG en vez de 1D2.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g1-a2-dano',
        source: { id: 'manual:lucha-sin-armas-g1-a2', nombre: 'Mejorar el dano del golpe' },
        target: { kind: 'combat', key: 'dadosDeDaño' },
        operation: { kind: 'set', value: '1D6' }
      }
    ]

  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 1,
    order: 3,
    title: 'Lanzar dos golpes',
    description:
      'El combatiente obtiene un ataque adicional con el cuerpo; no suma modificador de Fuerza pero si ventajas.'
    ,
    modifiers: [
      {
        id: 'lucha-sin-armas-g1-a3-numeroDeAtaques',
        source: { id: 'manual:lucha-sin-armas-g1-a3', nombre: 'Lanzar dos golpes' },
        target: { kind: 'combat', key: 'numeroDeAtaques' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 2,
    order: 1,
    title: 'Duplicar la Fuerza en el dano',
    description:
      'El dano de los golpes aplica el modificador por Fuerza (o Agilidad 16+) multiplicado por dos.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g2-a1-fuerzaDano',
        source: { id: 'manual:lucha-sin-armas-g2-a1', nombre: 'Duplicar la Fuerza en el dano' },
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: '(F)Modifier|(A)Modifier' }
      }
    ]
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 2,
    order: 2,
    title: 'Anular la defensa rival',
    description:
      'El primer ataque del turno no puede ser detenido por ninguna tirada de Defensa del oponente.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g2-a2-anularDefensa',
        source: { id: 'manual:lucha-sin-armas-g2-a2', nombre: 'Anular la defensa rival' },
        target: { kind: 'specialPerks', key: 'anularDefensa' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 2,
    order: 3,
    title: 'Mejorar el golpe critico',
    description:
      'A la hora de determinar efectos secundarios de un critico, se resta 2 al D8 y 1 al D6 correspondiente.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g2-a3-mejorarCritico-d8',
        source: { id: 'manual:lucha-sin-armas-g2-a3', nombre: 'Mejorar el golpe critico' },
        target: { kind: 'specialPerks', key: 'mejorarD8Critico' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'lucha-sin-armas-g2-a3-mejorarCritico-d6',
        source: { id: 'manual:lucha-sin-armas-g2-a3', nombre: 'Mejorar el golpe critico' },
        target: { kind: 'specialPerks', key: 'mejorarD6Critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 3,
    order: 1,
    title: 'Golpes magicos devastadores',
    description: 'Los ataques pasan a infligir 1D10 PG y cuentan como magicos para superar resistencias.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g3-a1-dadosDeDaño',
        source: { id: 'manual:lucha-sin-armas-g3-a1', nombre: 'Golpes magicos devastadores' },
        target: { kind: 'combat', key: 'dadosDeDaño' },
        operation: { kind: 'set', value: '1D10' }
      }
    ]
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 3,
    order: 2,
    title: 'Precision impecable',
    description: 'Se obtiene +4 al Ataque al emplear el cuerpo como arma.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g3-a2-ataque',
        source: { id: 'manual:lucha-sin-armas-g3-a2', nombre: 'Precision impecable' },
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 4 }
      }
    ]
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 3,
    order: 3,
    title: 'Defensa contra proyectiles',
    description: 'Puede esquivar hasta cuatro proyectiles o conjuros basados en Disparos en un mismo turno sin penalizacion.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g3-a3-defensa-proyectiles',
        source: { id: 'manual:lucha-sin-armas-g3-a3', nombre: 'Defensa contra proyectiles' },
        target: { kind: 'combat', key: 'defensaEspontaneaProyectiles' },
        operation: { kind: 'add', value: 4 }
      }
    ]
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 4,
    order: 1,
    title: 'Golpear puntos especificos sin penalizacion',
    description: 'Permite llamar a lugares concretos (cabeza, desarme, etc.) sin aplicar penalizadores, siempre contra humanoides.',
    modifiers: [
      {
        id: 'lucha-sin-armas-g4-a1-golpear-puntos-especificos',
        source: { id: 'manual:lucha-sin-armas-g4-a1', nombre: 'Golpear puntos especificos sin penalizacion' },
        target: { kind: 'specialPerks', key: 'ignorarPenalizacionGolpearPuntosEspecificos' },
        operation: { kind: 'set', value: true }
      }
    ]
  },

  // Lucha con una sola arma
  {
    styleSlug: 'arma-una-mano',
    group: 1,
    order: 1,
    title: 'Mejorar el Ataque',
    description: 'La ligereza de la hoja concede +1 al Ataque cuando se combate con un arma mediana a una sola mano.',
    modifiers: [
      {
        id: 'arma-una-mano-g1-a1-ataque',
        source: { id: 'manual:arma-una-mano-g1-a1', nombre: 'Mejorar el Ataque' },
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-una-mano',
    group: 1,
    order: 2,
    title: 'Mejorar el dano del golpe',
    description: 'Los cortes elegantes se enfocan en organos vitales y anaden +2 PG de dano a cada impacto.',
    modifiers: [
      {
        id: 'arma-una-mano-g1-a2-dano',
        source: { id: 'manual:arma-una-mano-g1-a2', nombre: 'Mejorar el dano del golpe' },
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-una-mano',
    group: 1,
    order: 3,
    title: 'Reflejos superiores',
    description: 'El arma se mueve con tal soltura que otorga -2 a la Iniciativa y +2 a la Defensa durante la batalla.',
    modifiers: [
      {
        id: 'arma-una-mano-g1-a3-iniciativa',
        source: { id: 'manual:arma-una-mano-g1-a3', nombre: 'Reflejos superiores' },
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 2 }
      },
    ]
  },
  {
    styleSlug: 'arma-una-mano',
    group: 2,
    order: 1,
    title: 'Golpes criticos frecuentes',
    description: 'El personaje obtiene +1 al rango de critico con cada ataque realizado con el estilo.',
    modifiers: [
      {
        id: 'arma-una-mano-g2-a1-critico',
        source: { id: 'manual:arma-una-mano-g2-a1', nombre: 'Golpes criticos frecuentes' },
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-una-mano',
    group: 2,
    order: 2,
    title: 'Rebanar extremidades',
    description: 'Penaliza en 1 el D6 de efectos secundarios cuando se obtiene un critico con armas cortantes.',
    modifiers: [
      {
        id: 'arma-una-mano-g2-a2-rebanar-extremidades',
        source: { id: 'manual:arma-una-mano-g2-a2', nombre: 'Rebanar extremidades' },
        target: { kind: 'specialPerks', key: 'mejorarD6Critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-una-mano',
    group: 2,
    order: 3,
    title: 'Defensa espontanea',
    description: 'Mientras se empuna una sola arma, se gana una parada gratuita en combate cuerpo a cuerpo.',
    modifiers: [
      {
        id: 'arma-una-mano-g2-a3-defensa-espontanea',
        source: { id: 'manual:arma-una-mano-g2-a3', nombre: 'Defensa espontanea' },
        target: { kind: 'combat', key: 'defensaEspontanea' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-una-mano',
    group: 3,
    order: 1,
    title: 'Criticos mortales',
    description: 'Se suma +2 adicional al rango de critico, acumulandose con las mejoras anteriores.',
    modifiers: [
      {
        id: 'arma-una-mano-g3-a1-critico',
        source: { id: 'manual:arma-una-mano-g3-a1', nombre: 'Criticos mortales' },
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-una-mano',
    group: 3,
    order: 2,
    title: 'Impasible ante flancos',
    description: 'Se obtiene +2 a la Ar y los enemigos no reciben bonificadores por atacar desde los flancos o la retaguardia.',
    modifiers: [
      {
        id: 'arma-una-mano-g3-a2-armadura',
        source: { id: 'manual:arma-una-mano-g3-a2', nombre: 'Impasible ante flancos' },
        target: { kind: 'combat', key: 'armadura' },
        operation: { kind: 'add', value: 2 }
      },
      {
        id: 'arma-una-mano-g3-a2-ignorar-bonificadores-flancos',
        source: { id: 'manual:arma-una-mano-g3-a2', nombre: 'Impasible ante flancos' },
        target: { kind: 'specialPerks', key: 'ignorarBonificadoresFlancos' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arma-una-mano',
    group: 3,
    order: 3,
    title: 'Quebrar defensa ajena',
    description: 'El primer golpe del turno penaliza en 6 la Defensa del rival, el segundo en 4 y el tercero en 2.'
  },
  {
    styleSlug: 'arma-una-mano',
    group: 4,
    order: 1,
    title: 'Paradas perfectas',
    description: 'El guerrero coordina su mano libre para obtener una Defensa extra en cada turno cuerpo a cuerpo.',
    modifiers: [
      {
        id: 'arma-una-mano-g4-a1-defensa',
        source: { id: 'manual:arma-una-mano-g4-a1', nombre: 'Paradas perfectas' },
        target: { kind: 'combat', key: 'cantidadDeDefensas' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },

  // Lucha con arma de astas
  {
    styleSlug: 'arma-de-astas',
    group: 1,
    order: 1,
    title: 'Iniciativa extendida',
    description: 'Aprovecha el alcance del asta y obtiene +3 a la Iniciativa.',
    modifiers: [
      {
        id: 'arma-de-astas-g1-a1-iniciativa',
        source: { id: 'manual:arma-de-astas-g1-a1', nombre: 'Iniciativa extendida' },
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 3 }
      }
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 1,
    order: 2,
    title: 'Criticos perforantes',
    description: 'Anade +1 al rango de critico de cualquier lanza, alabarda o guadana empunada con este estilo.',
    modifiers: [
      {
        id: 'arma-de-astas-g1-a2-critico',
        source: { id: 'manual:arma-de-astas-g1-a2', nombre: 'Criticos perforantes' },
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 1,
    order: 3,
    title: 'Defensa de baston',
    description: 'Permite recibir una Defensa espontanea gracias al propio mango del arma.',
    modifiers: [
      {
        id: 'arma-de-astas-g1-a3-defensa',
        source: { id: 'manual:arma-de-astas-g1-a3', nombre: 'Defensa de baston' },
        target: { kind: 'combat', key: 'defensaEspontanea' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 2,
    order: 1,
    title: 'Romper guardias',
    description: 'Los golpes precisos penalizan en 2 la Defensa de los enemigos alcanzados.',
    modifiers: [
      {
        id: 'arma-de-astas-g2-a1-romper-guardias',
        source: { id: 'manual:arma-de-astas-g2-a1', nombre: 'Romper guardias' },
        target: { kind: 'combat', key: 'penalizacionDefensaEnemiga' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 2,
    order: 2,
    title: 'Golpe de barrido',
    description: 'Cada ataque afecta tambien a los enemigos adyacentes, que sufren 1 PG por nivel del usuario.',
    modifiers: [
      {
        id: 'arma-de-astas-g2-a2-golpe-barrido',
        source: { id: 'manual:arma-de-astas-g2-a2', nombre: 'Golpe de barrido' },
        target: { kind: 'specialPerks', key: 'golpeDeBarrido' },
        operation: { kind: 'add', value: "nivel" }
      },
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 2,
    order: 3,
    title: 'Criticos quirurgicos',
    description: 'Se resta 1 al D6 de efectos secundarios cuando se logra un critico con armas de asta.',
    modifiers: [
      {
        id: 'arma-de-astas-g2-a3-criticos-quirurgicos',
        source: { id: 'manual:arma-de-astas-g2-a3', nombre: 'Criticos quirurgicos' },
        target: { kind: 'specialPerks', key: 'mejorarD6Critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 3,
    order: 1,
    title: 'Defensa reforzada',
    description: 'El largo mango actua como escudo improvisado y concede +2 a la Defensa.',
    modifiers: [
      {
        id: 'arma-de-astas-g3-a1-defensa',
        source: { id: 'manual:arma-de-astas-g3-a1', nombre: 'Defensa reforzada' },
        target: { kind: 'combat', key: 'defensa' }, 
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 3,
    order: 2,
    title: 'Impactos implacables',
    description: 'Cada ataque suma +2 al ajuste de dano total.',
    modifiers: [
      {
        id: 'arma-de-astas-g3-a2-dano',
        source: { id: 'manual:arma-de-astas-g3-a2', nombre: 'Impactos implacables' },
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 3,
    order: 3,
    title: 'Preparado contra gigantes',
    description: 'Anade +5 PG de dano cuando golpea criaturas enormes, monturas enemigas o voladores que se acerquen.',
    modifiers: [
      {
        id: 'arma-de-astas-g3-a3-dano-enemigos-grandes',
        source: { id: 'manual:arma-de-astas-g3-a3', nombre: 'Preparado contra gigantes' },
        target: { kind: 'specialPerks', key: 'danoEnemigosGrandes' },
        operation: { kind: 'add', value: 5 }
      }
    ]
  },
  {
    styleSlug: 'arma-de-astas',
    group: 4,
    order: 1,
    title: 'Muralla movil',
    description: 'En duelos uno a uno, el adversario debe superar una tirada de Agilidad menos el nivel del experto para poder alcanzarlo ese turno.',
    modifiers: [
      {
        id: 'arma-de-astas-g4-a1-muralla-movil',
        source: { id: 'manual:arma-de-astas-g4-a1', nombre: 'Muralla movil' },
        target: { kind: 'specialPerks', key: 'murallaMovil' },
        operation: { kind: 'set', value: true }
      }
    ]
  },

  // Lucha con arma a dos manos
  {
    styleSlug: 'arma-dos-manos',
    group: 1,
    order: 1,
    title: 'Golpes que rompen defensa',
    description: 'Cada impacto reduce en 2 la Defensa del objetivo.',
    modifiers: [
      {
        id: 'arma-dos-manos-g1-a1-romper-defensa',
        source: { id: 'manual:arma-dos-manos-g1-a1', nombre: 'Golpes que rompen defensa' },
        target: { kind: 'combat', key: 'penalizacionDefensaEnemiga' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 1,
    order: 2,
    title: 'Ataques poderosos',
    description: 'Otorga +2 al Ataque al blandir armas enormes.',
    modifiers: [
      {
        id: 'arma-dos-manos-g1-a2-ataque',
        source: { id: 'manual:arma-dos-manos-g1-a2', nombre: 'Ataques poderosos' },
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 1,
    order: 3,
    title: 'Criticos brutales',
    description: 'Incrementa el rango de critico en +1.',
    modifiers: [
      {
        id: 'arma-dos-manos-g1-a3-critico',
        source: { id: 'manual:arma-dos-manos-g1-a3', nombre: 'Criticos brutales' },
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 2,
    order: 1,
    title: 'Iniciativa contra todo pronostico',
    description: 'Aumenta la Iniciativa en +4 pese a cargar armas pesadas.',
    modifiers: [
      {
        id: 'arma-dos-manos-g2-a1-iniciativa',
        source: { id: 'manual:arma-dos-manos-g2-a1', nombre: 'Iniciativa contra todo pronostico' },
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 4 }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 2,
    order: 2,
    title: 'Defensa espontanea',
    description: 'Aunque use ambas manos, el guerrero es capaz de obtener una parada gratuita cada turno.',
    modifiers: [
      {
        id: 'arma-dos-manos-g2-a2-defensa',
        source: { id: 'manual:arma-dos-manos-g2-a2', nombre: 'Defensa espontanea' },
        target: { kind: 'combat', key: 'defensaEspontanea' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 2,
    order: 3,
    title: 'Dispersar conjuros',
    description: 'Cada golpe exitoso contra un lanzador obliga a un duelo de 1D10; si gana, disipa un conjuro de Defensa activo.',
    modifiers: [
      {
        id: 'arma-dos-manos-g2-a3-dispersar-conjuros',
        source: { id: 'manual:arma-dos-manos-g2-a3', nombre: 'Dispersar conjuros' },
        target: { kind: 'specialPerks', key: 'dispersarConjurosConGolpesADosManos' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 3,
    order: 1,
    title: 'Dano demoledor',
    description: 'El ajuste de dano pasa de +2 a +4.',
    modifiers: [
      {
        id: 'arma-dos-manos-g3-a1-dano',
        source: { id: 'manual:arma-dos-manos-g3-a1', nombre: 'Dano demoledor' },
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 3,
    order: 2,
    title: 'Mejorar el dado del arma',
    description: 'El arma incrementa su categoria (1D8 pasa a 1D10, 2D4+2 a 2D6+2, etc.).',
    modifiers: [
      {
        id: 'arma-dos-manos-g3-a2-mejorar-dado-arma',
        source: { id: 'manual:arma-dos-manos-g3-a2', nombre: 'Mejorar el dado del arma' },
        target: { kind: 'specialPerk', key: 'aumentarCategoriaDado' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 3,
    order: 3,
    title: 'Romper concentracion',
    description: 'Cada impacto contra un conjurador acumula -1 a su tirada de Concentracion hasta fin de combate.',
    modifiers: [
      {
        id: 'arma-dos-manos-g3-a3-romper-concentracion',
        source: { id: 'manual:arma-dos-manos-g3-a3', nombre: 'Romper concentracion' },
        target: { kind: 'specialPerks', key: 'romperConcentracionConGolpesADosManos' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 4,
    order: 1,
    title: 'Criticos inevitables',
    description: 'Anade +2 extra al rango de critico (acumulable con las mejoras previas).',
    modifiers: [
      {
        id: 'arma-dos-manos-g4-a1-critico',
        source: { id: 'manual:arma-dos-manos-g4-a1', nombre: 'Criticos inevitables' },
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },

  // Lucha con dos armas
  {
    styleSlug: 'dos-armas',
    group: 1,
    order: 1,
    title: 'Sin penalizaciones',
    description: 'El personaje aprende a atacar con ambas manos sin sufrir los penalizadores habituales y puede resolver ambos ataques en la misma fase.',
    modifiers: [
      {
        id: 'dos-armas-g1-a1-sin-penalizaciones-ataque-mano-secundaria',
        source: { id: 'manual:dos-armas-g1-a1', nombre: 'Sin penalizaciones' },
        target: { kind: 'specialPerks', key: 'ignorarPenalizacionAtaqueManoSecundaria' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 1,
    order: 2,
    title: 'Intercambio instantaneo',
    description: 'Puede cambiar de armas, desenfundar o recoger equipo durante el turno sin gastar acciones.',
    modifiers: [
      {
        id: 'dos-armas-g1-a2-intercambio-instantaneo',
        source: { id: 'manual:dos-armas-g1-a2', nombre: 'Intercambio instantaneo' },
        target: { kind: 'specialPerks', key: 'intercambioInstantaneoDeArmas' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 1,
    order: 3,
    title: 'Dos armas medianas',
    description: 'Permite empunar un arma mediana en cada mano sin penalizadores adicionales (incluye armas magicas).',
    modifiers: [
      {
        id: 'dos-armas-g1-a3-dos-armas-medianas',
        source: { id: 'manual:dos-armas-g1-a3', nombre: 'Dos armas medianas' },
        target: { kind: 'specialPerks', key: 'usarDosArmasMedianas' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 2,
    order: 1,
    title: 'Defensa adicional',
    description: 'La mano no habil concede una Defensa espontanea contra ataques cuerpo a cuerpo.',
    modifiers: [
      {
        id: 'dos-armas-g2-a1-defensa-adicional',
        source: { id: 'manual:dos-armas-g2-a1', nombre: 'Defensa adicional' },
        target: { kind: 'combat', key: 'defensaEspontanea' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 2,
    order: 2,
    title: 'Muralla contra proyectiles',
    description: 'Los movimientos freneticos permiten utilizar la Defensa para detener Disparos sin penalizacion.',
    modifiers: [
      {
        id: 'dos-armas-g2-a2-muralla-contra-proyectiles',
        source: { id: 'manual:dos-armas-g2-a2', nombre: 'Muralla contra proyectiles' },
        target: { kind: 'specialPerks', key: 'defensaContraProyectilesConDosArmas' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 2,
    order: 3,
    title: 'Confundir defensas enemigas',
    description: 'Los rivales sufren -5 a su Defensa cuando intentan parar los ataques del duelista.',
    modifiers: [
      {
        id: 'dos-armas-g2-a3-confundir-defensas-enemigas',
        source: { id: 'manual:dos-armas-g2-a3', nombre: 'Confundir defensas enemigas' },
        target: { kind: 'combat', key: 'penalizacionDefensaEnemiga' },
        operation: { kind: 'add', value: 5 }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 3,
    order: 1,
    title: 'Golpe ineludible',
    description: 'El ataque de la mano no habil no puede ser defendido en el primer intercambio.',
    modifiers: [
      {
        id: 'dos-armas-g3-a1-golpe-ineludible',
        source: { id: 'manual:dos-armas-g3-a1', nombre: 'Golpe ineludible' },
        target: { kind: 'specialPerks', key: 'ignorarDefensaManoIzquierda' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 3,
    order: 2,
    title: 'Escudo de acero',
    description: 'Gana tres Defensas adicionales por turno exclusivas contra proyectiles.',
    modifiers: [
      {
        id: 'dos-armas-g3-a2-escudo-de-acero',
        source: { id: 'manual:dos-armas-g3-a2', nombre: 'Escudo de acero' },
        target: { kind: 'combat', key: 'defensaEspontaneaProyectiles' },
        operation: { kind: 'add', value: 3 }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 3,
    order: 3,
    title: 'Dano al inicio del turno',
    description: 'Todo enemigo en contacto cuerpo a cuerpo sufre 3 PG automaticos al comienzo de cada turno del personaje.',
    modifiers: [
      {
        id: 'dos-armas-g3-a3-dano-al-inicio-del-turno',
        source: { id: 'manual:dos-armas-g3-a3', nombre: 'Dano al inicio del turno' },
        target: { kind: 'specialPerks', key: 'danoCuerpoACuerpoAlInicioDelTurno' },
        operation: { kind: 'add', value: 3 }
      }
    ]
  },
  {
    styleSlug: 'dos-armas',
    group: 4,
    order: 1,
    title: 'Dos armas grandes',
    description: 'Permite blandir armas grandes en ambas manos sin restricciones adicionales, incluso versiones magicas.',
    modifiers: [
      {
        id: 'dos-armas-g4-a1-dos-armas-grandes',
        source: { id: 'manual:dos-armas-g4-a1', nombre: 'Dos armas grandes' },
        target: { kind: 'specialPerks', key: 'usarDosArmasGrandes' },
        operation: { kind: 'set', value: true }
      }
    ]
  },

  // Lucha con arma y escudo
  {
    styleSlug: 'arma-y-escudo',
    group: 1,
    order: 1,
    title: 'Escudo como muralla',
    description: 'Otorga +1 a la Defensa al combatir con un escudo.',
    modifiers: [
      {
        id: 'arma-y-escudo-g1-a1-defensa',
        source: { id: 'manual:arma-y-escudo-g1-a1', nombre: 'Escudo como muralla' },
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 1,
    order: 2,
    title: 'Defensa contra disparos',
    description: 'Se puede emplear la tirada de Defensa para detener proyectiles fisicos que impacten al guerrero.',
    modifiers: [
      {
        id: 'arma-y-escudo-g1-a2-defensa-contra-disparos',
        source: { id: 'manual:arma-y-escudo-g1-a2', nombre: 'Defensa contra disparos' },
        target: { kind: 'specialPerks', key: 'ignorarPenalizacionefensaContraProyectiles' },
        operation: { kind: 'set', value: true }
      }
    ],
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 1,
    order: 3,
    title: 'Proteger aliados',
    description: 'El escudo permite desviar golpes dirigidos a un companero a menos de 2 metros, aunque aplica -5 a la tirada.',
    modifiers: [
      {
        id: 'arma-y-escudo-g1-a3-proteger-aliados',
        source: { id: 'manual:arma-y-escudo-g1-a3', nombre: 'Proteger aliados' },
        target: { kind: 'specialPerks', key: 'protegerAliadosConEscudo' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 2,
    order: 1,
    title: 'Resistencia extra',
    description: 'El personaje gana 1 PC adicional por nivel gracias a su estilo defensivo.',
    modifiers: [
      {
        id: 'arma-y-escudo-g2-a1-puntos-de-combate',
        source: { id: 'manual:arma-y-escudo-g2-a1', nombre: 'Resistencia extra' },
        target: { kind: 'attributes', key: 'puntosDeCombate' },
        operation: { kind: 'add', value: "nivel" }
      }
    ]
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 2,
    order: 2,
    title: 'Defensas por ataque',
    description: 'Concede una parada por cada ataque disponible del personaje (sin contar ataques adicionales por magia o tecnicas).',
    modifiers: [
      {
        id: 'arma-y-escudo-g2-a2-defensas-por-ataque',
        source: { id: 'manual:arma-y-escudo-g2-a2', nombre: 'Defensas por ataque' },
        target: { kind: 'combat', key: 'defensaEspontanea' },
        operation: { kind: 'add', value: "cantidadAtaques" }
      }
    ]
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 2,
    order: 3,
    title: 'Escudo anti-criticos',
    description:  'Las defensas contra golpes criticos solo aplican -2 en lugar de -5, facilitando bloquear ataques letales.',
    modifiers: [
      {
        id: 'arma-y-escudo-g2-a3-escudo-anti-criticos',
        source: { id: 'manual:arma-y-escudo-g2-a3', nombre: 'Escudo anti-criticos' },
        target: { kind: 'specialPerks', key: 'reducirPenalizacionDefensaCriticos' },
        operation: { kind: 'add', value: 3 }
      }
    ]

  },
  {
    styleSlug: 'arma-y-escudo',
    group: 3,
    order: 1,
    title: 'Fortaleza inmovil',
    description: 'Mientras no se mueva en el turno, obtiene +2 a la Ar natural como si formara una muralla.',
    modifiers: [
      {
        id: 'arma-y-escudo-g3-a1-fortaleza-inmovil-armadura',
        source: { id: 'manual:arma-y-escudo-g3-a1', nombre: 'Fortaleza inmovil' },
        target: { kind: 'combat', key: 'armadura' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 3,
    order: 2,
    title: 'Debilitar defensas enemigas',
    description: 'Los rivales tienen -4 a la Defensa al intentar bloquear los golpes del personaje.',
    modifiers: [
      {
        id: 'arma-y-escudo-g3-a2-debilitar-defensas-enemigas',
        source: { id: 'manual:arma-y-escudo-g3-a2', nombre: 'Debilitar defensas enemigas' },
        target: { kind: 'combat', key: 'penalizacionDefensaEnemiga' },
        operation: { kind: 'add', value: 4 }
      }
    ]
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 3,
    order: 3,
    title: 'Defensa explosiva',
    description: 'Puede gastar PC adicionales para sumar +1 por punto a una tirada de Defensa concreta.',
    modifiers: [
      {
        id: 'arma-y-escudo-g3-a3-defensa-explosiva',
        source: { id: 'manual:arma-y-escudo-g3-a3', nombre: 'Defensa explosiva' },
        target: { kind: 'specialPerks', key: 'potenciarDefensaConPCs' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 4,
    order: 1,
    title: 'Desviar conjuros',
    description: 'El escudo desvia conjuros que requieran Disparos tirando Defensa con -8; si tiene exito, cambia el rumbo del hechizo.',
    modifiers: [
      {
        id: 'arma-y-escudo-g4-a1-desviar-conjuros',
        source: { id: 'manual:arma-y-escudo-g4-a1', nombre: 'Desviar conjuros' },
        target: { kind: 'specialPerks', key: 'desviarConjurosConEscudo' },
        operation: { kind: 'set', value: true }
      }
    ]
  },

  // Arcos y ballestas
  {
    styleSlug: 'arcos-y-ballestas',
    group: 1,
    order: 1,
    title: 'Impacto agotador',
    description: 'Cada disparo preciso resta 1 PC al blanco ademas del dano habitual.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g1-a1-puntos-de-combate',
        source: { id: 'manual:arcos-y-ballestas-g1-a1', nombre: 'Impacto agotador' },
        target: { kind: 'specialPerks', key: 'restarPCsConDisparosPrecisos' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 1,
    order: 2,
    title: 'Perforar armaduras livianas',
    description:
      'Contra armaduras no metalicas o naturales se suma +1 al dano por nivel del personaje.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g1-a2-dano-armaduras-livianas',
        source: { id: 'manual:arcos-y-ballestas-g1-a2', nombre: 'Perforar armaduras livianas' },
        target: { kind: 'specialPerks', key: 'danoExtraContraArmadurasLivianas' },
        operation: { kind: 'set', value: "nivel" }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 1,
    order: 3,
    title: 'Precision y rapidez',
    description: 'No hay penalizadores al disparar cerca de aliados y se elimina el malus a la Iniciativa al usar proyectiles.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g1-a3-precision',
        source: { id: 'manual:arcos-y-ballestas-g1-a3', nombre: 'Precision' },
        target: { kind: 'specialPerks', key: 'ignorarPenalizacionaDisparosPorRivalesCercanos' },
        operation: { kind: 'set', value: true }
      },
      {
        id: 'arcos-y-ballestas-g1-a3-iniciativa',
        source: { id: 'manual:arcos-y-ballestas-g1-a3', nombre: 'Rapidez' },
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 2,
    order: 1,
    title: 'Dano acumulado',
    description: 'Cada flecha inflige +1 PG adicional por nivel impar del arquero.',
    moddfiers: [
      {
        id: 'arcos-y-ballestas-g2-a1-dano-acumulado',
        source: { id: 'manual:arcos-y-ballestas-g2-a1', nombre: 'Dano acumulado' },
        target: { kind: 'specialPerks', key: 'danoAdicionalPorNivelImpar' },
        operation: { kind: 'set', value:"nivelImpar" }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 2,
    order: 2,
    title: 'Criticos afinados',
    description: 'Resta 1 al D6 de efectos secundarios cuando se consigue un critico con proyectiles.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g2-a2-criticos-afinados',
        source: { id: 'manual:arcos-y-ballestas-g2-a2', nombre: 'Criticos afinados' },
        target: { kind: 'specialPerks', key: 'mejorarD6Critico' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 2,
    order: 3,
    title: 'Primer disparo certero',
    description: 'El primer ataque de cada combate obtiene +4 al Ataque/Disparos.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g2-a3-ataque-primer-disparo',
        source: { id: 'manual:arcos-y-ballestas-g2-a3', nombre: 'Primer disparo certero' },
        target: { kind: 'combat', key: 'disparos' },
        operation: { kind: 'add', value: 4 }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 3,
    order: 1,
    title: 'Derribar voladores',
    description: 'Los impactos obligan a criaturas voladoras a chequear Fuerza (o Concentracion si vuelan por magia) o caer al suelo.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g3-a1-derribar-voladores',
        source: { id: 'manual:arcos-y-ballestas-g3-a1', nombre: 'Derribar voladores' },
        target: { kind: 'specialPerks', key: 'derribarVoladoresConDisparos' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 3,
    order: 2,
    title: 'Ignorar defensas',
    description: 'Los proyectiles se vuelven tan rapidos que los enemigos no pueden usar Defensa contra ellos.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g3-a2-ignorar-defensas',
        source: { id: 'manual:arcos-y-ballestas-g3-a2', nombre: 'Ignorar defensas' },
        target: { kind: 'specialPerks', key: 'ignorarDefensaß' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 3,
    order: 3,
    title: 'Anular barreras magicas',
    description: 'Con municion magica, los disparos ignoran conjuros de Defensa y reducciones de dano basadas en magia.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g3-a3-anular-barreras-magicas',
        source: { id: 'manual:arcos-y-ballestas-g3-a3', nombre: 'Anular barreras magicas' },
        target: { kind: 'specialPerks', key: 'ignorarDefensasMagicasConDisparos' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 4,
    order: 1,
    title: 'Criticos permanentes',
    description: 'Todos los disparos se consideran golpes criticos automaticos; las armas de fuego obtienen +2 al rango.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g4-a1-criticos-permanentes',
        source: { id: 'manual:arcos-y-ballestas-g4-a1', nombre: 'Criticos permanentes' },
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'set', value: "disparos" }
      },
      {
        id: 'arcos-y-ballestas-g4-a1-criticos-permanentes-armas-de-fuego',
        source: { id: 'manual:arcos-y-ballestas-g4-a1', nombre: 'Criticos permanentes' },
        target: { kind: 'specialPerks', key: 'alcanceArmasDeFuego' },
        operation: { kind: 'add', value: 20 }
      }
    ]
  },

  // Armas arrojadizas
  {
    styleSlug: 'armas-arrojadizas',
    group: 1,
    order: 1,
    title: 'Dano adicional',
    description:'Cada proyectil inflige +1 PG por nivel impar del usuario cuando impacta.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g1-a1-dano-adicional',
        source: { id: 'manual:armas-arrojadizas-g1-a1', nombre: 'Dano adicional' },
        target: { kind: 'combat', key: 'dano' },
        operation: { kind: 'add', value: "nivelImpar" }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 1,
    order: 2,
    title: 'Iniciativa relampago',
    description: 'Los lanzamientos obtienen +4 a la Iniciativa gracias a desenfundes veloces.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g1-a2-iniciativa',
        source: { id: 'manual:armas-arrojadizas-g1-a2', nombre: 'Iniciativa relampago' },
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 4 }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 1,
    order: 3,
    title: 'Bonificar todos los ataques I',
    description:'Permite usar ciertas armas arrojadizas en cuerpo a cuerpo, otorga ataques adicionales con dardos y mejora el alcance del disco de acero.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g1-a3-numeroDeAtaques',
        source: { id: 'manual:armas-arrojadizas-g1-a3', nombre: 'Bonificar todos los ataques I' },
        target: { kind: 'combat', key: 'numeroDeDisparos' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'armas-arrojadizas-g1-a3-alcanceDiscoDeAcero',
        source: { id: 'manual:armas-arrojadizas-g1-a3', nombre: 'Bonificar todos los ataques I' },
        target: { kind: 'specialPerks', key: 'alcanceDiscoDeAcero' },
        operation: { kind: 'add', value: 20 }
      },
      {
        id: 'armas-arrojadizas-g1-a3-usoCuerpoACuerpo',
        source: { id: 'manual:armas-arrojadizas-g1-a3', nombre: 'Bonificar todos los ataques I' },
        target: { kind: 'specialPerks', key: 'usarArmasArrojadizasEnCuerpoACuerpo' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 2,
    order: 1,
    title: 'Criticos precisos',
    description: 'Anade +2 al rango de critico con armas arrojadizas.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g2-a1-criticos-precisos',
        source: { id: 'manual:armas-arrojadizas-g2-a1', nombre: 'Criticos precisos' },
        target: { kind: 'combat', key: 'critico' },
        operation: { kind: 'add', value: 2 }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 2,
    order: 2,
    title: 'Mayor distancia',
    description: 'Suma 5 metros al alcance por nivel del personaje.',
    modifiers: [
      {
        id: 'arcos-y-ballestas-g2-a3-ataqueDistancia',
        source: { id: 'manual:arcos-y-ballestas-g2-a3', nombre: 'Primer disparo certero' },
        target: { kind: 'specialPerks', key: 'extenderAlcanceDisparos' },
        operation: { kind: 'add', value: "nivel*5" }
      }
    ],
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 2,
    order: 3,
    title: 'Bonificar todos los ataques II',
    description: 'Concede un ataque adicional adicional con armas arrojadizas.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g2-a3-numeroDeAtaques',
        source: { id: 'manual:armas-arrojadizas-g2-a3', nombre: 'Bonificar todos los ataques II' },
        target: { kind: 'combat', key: 'numeroDeDisparos' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 3,
    order: 1,
    title: 'Ataque final imparable',
    description: 'El ultimo proyectil del turno ignora cualquier intento de Defensa por parte del objetivo.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g3-a1-ataque-final-imparable',
        source: { id: 'manual:armas-arrojadizas-g3-a1', nombre: 'Ataque final imparable' },
        target: { kind: 'specialPerks', key: 'ignorarDefensaUltimoDisparo' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 3,
    order: 2,
    title: 'Resistencia atletica',
    description: 'El personaje gana 1 PC adicional por nivel gracias al entrenamiento con multiples lanzamientos.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g3-a2-puntos-de-combate',
        source: { id: 'manual:armas-arrojadizas-g3-a2', nombre: 'Resistencia atletica' },
        target: { kind: 'combat', key: 'pc' },
        operation: { kind: 'add', value: "nivel" }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 3,
    order: 3,
    title: 'Bonificar todos los ataques III',
    description: 'Obtiene un tercer ataque adicional con armas arrojadizas.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g3-a3-numeroDeAtaques',
        source: { id: 'manual:armas-arrojadizas-g3-a3', nombre: 'Bonificar todos los ataques III' },
        target: { kind: 'combat', key: 'numeroDeDisparos' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 4,
    order: 1,
    title: 'Ignorar barreras magicas',
    description: 'Con municion magica, los proyectiles atraviesan conjuros de Defensa y reducciones de dano igual que en el grupo 3 de arqueria.',
    modifiers: [
      {
        id: 'armas-arrojadizas-g4-a1-ignorar-barreras-magicas',
        source: { id: 'manual:armas-arrojadizas-g4-a1', nombre: 'Ignorar barreras magicas' },
        target: { kind: 'specialPerks', key: 'ignorarDefensasMagicasConDisparos' },
        operation: { kind: 'set', value: true }
      }
    ]
  },

  // Lucha montada
  {
    styleSlug: 'lucha-montada',
    group: 1,
    order: 1,
    title: 'Combatir junto al corcel',
    description: 'La montura puede atacar durante la batalla sin penalizar al jinete.',
    modifiers: [
      {
        id: 'lucha-montada-g1-a1-combatir-junto-al-corcel',
        source: { id: 'manual:lucha-montada-g1-a1', nombre: 'Combatir junto al corcel' },
        target: { kind: 'specialPerks', key: 'lucharJuntoAMontura' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 1,
    order: 2,
    title: 'Montura de nivel 3',
    description: 'Caballos y corceles elficos ascienden a nivel 3, ganando +1 al Ataque y un golpe extra con sus cascos.',
    modifiers: [
      {
        id: 'lucha-montada-g1-a2-montura-nivel-3',
        source: { id: 'manual:lucha-montada-g1-a2', nombre: 'Montura de nivel 3' },
        target: { kind: 'specialPerks', key: 'monturaNivel3' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 1,
    order: 3,
    title: 'Ventaja de altura',
    description: 'Mientras golpee desde la montura contra enemigos mas bajos obtiene +1 a la Ar y +1 al Ataque.',
    modifiers: [
      {
        id: 'lucha-montada-g1-a3-ventaja-de-altura-armadura',
        source: { id: 'manual:lucha-montada-g1-a3', nombre: 'Ventaja de altura' },
        target: { kind: 'combat', key: 'armadura' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'lucha-montada-g1-a3-ventaja-de-altura-ataque',
        source: { id: 'manual:lucha-montada-g1-a3', nombre: 'Ventaja de altura' },
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 2,
    order: 1,
    title: 'Iniciativa compartida',
    description: 'La montura usa los mismos bonificadores de Iniciativa que su jinete.',
    modifiers: [
      {
        id: 'lucha-montada-g2-a1-iniciativa-compartida',
        source: { id: 'manual:lucha-montada-g2-a1', nombre: 'Iniciativa compartida' },
        target: { kind: 'specialPerks', key: 'iniciativaMonturaIgualAJinete' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 2,
    order: 2,
    title: 'Montura de nivel 4',
    description: 'El corcel asciende a nivel 4 y suma +2 adicionales a sus tiradas de Ataque.',
    modifiers: [
      {
        id: 'lucha-montada-g2-a2-montura-nivel-4',
        source: { id: 'manual:lucha-montada-g2-a2', nombre: 'Montura de nivel 4' },
        target: { kind: 'specialPerks', key: 'monturaNivel4' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 2,
    order: 3,
    title: 'Carga ininterrumpida',
    description: 'La carga no se cancela aunque el jinete reciba ataques durante el desplazamiento.',
    modifiers: [
      {
        id: 'lucha-montada-g2-a3-carga-ininterrumpida',
        source: { id: 'manual:lucha-montada-g2-a3', nombre: 'Carga ininterrumpida' },
        target: { kind: 'specialPerks', key: 'cargaNoInterrumpidaPorAtaques' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 3,
    order: 1,
    title: 'Carga devastadora',
    description: 'Cuando carga, el modificador de dano se triplica en el primer ataque exitoso.',
    modifiers: [
      {
        id: 'lucha-montada-g3-a1-carga-devastadora',
        source: { id: 'manual:lucha-montada-g3-a1', nombre: 'Carga devastadora' },
        target: { kind: 'specialPerks', key: 'triplicarDanoCarga' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 3,
    order: 2,
    title: 'Escudo para la montura',
    description: 'La montura se vuelve inmune a conjuros de area que no la tengan como objetivo directo.',
    modifiers: [
      {
        id: 'lucha-montada-g3-a2-escudo-para-la-montura',
        source: { id: 'manual:lucha-montada-g3-a2', nombre: 'Escudo para la montura' },
        target: { kind: 'specialPerks', key: 'monturaInmuneAConjurosDeArea' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 3,
    order: 3,
    title: 'Montura de nivel 5',
    description: 'El animal alcanza nivel 5, gana +1 al Ataque y mejora su probabilidad de critico.',
    modifiers: [
      {
        id: 'lucha-montada-g3-a3-montura-nivel-5',
        source: { id: 'manual:lucha-montada-g3-a3', nombre: 'Montura de nivel 5' },
        target: { kind: 'specialPerks', key: 'monturaNivel5' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'lucha-montada',
    group: 4,
    order: 1,
    title: 'Ofensiva de la montura',
    description: 'La montura obtiene un ataque adicional y todos sus golpes incrementan en una categoria de dado.',
    modifiers: [
      {
        id: 'lucha-montada-g4-a1-ofensiva-de-la-montura-numero-de-ataques',
        source: { id: 'manual:lucha-montada-g4-a1', nombre: 'Ofensiva de la montura' },
        target: { kind: 'combat', key: 'numeroDeAtaquesMontura' },
        operation: { kind: 'add', value: 1 }
      },
      {
        id: 'lucha-montada-g4-a1-ofensiva-de-la-montura-dano',
        source: { id: 'manual:lucha-montada-g4-a1', nombre: 'Ofensiva de la montura' },
        target: { kind: 'specialPerks', key: 'incrementarDanoMontura' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },

  // Combate sin corazas
  {
    styleSlug: 'combate-sin-corazas',
    group: 1,
    order: 1,
    title: 'Defensa espontanea',
    description: 'La falta de armadura permite moverse con rapidez y obtener una parada gratuita en cada turno.',
    modifiers: [
      {
        id: 'combate-sin-corazas-g1-a1-defensa-espontanea',
        source: { id: 'manual:combate-sin-corazas-g1-a1', nombre: 'Defensa espontanea' },
        target: { kind: 'combat', key: 'defensaEspontanea' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 1,
    order: 2,
    title: 'Mejorar la guarda',
    description: 'Bonifica en +4 la Iniciativa y reduce en 4 PG cualquier dano recibido (excepto venenos o efectos internos).',
    modifiers: [
      {
        id: 'combate-sin-corazas-g1-a2-iniciativa',
        source: { id: 'manual:combate-sin-corazas-g1-a2', nombre: 'Mejorar la guarda' },
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: 4 }
      },
      {
        id: 'combate-sin-corazas-g1-a2-reduccion-de-dano',
        source: { id: 'manual:combate-sin-corazas-g1-a2', nombre: 'Mejorar la guarda' },
        target: { kind: 'specialPerks', key: 'reduccionDano' },
        operation: { kind: 'add', value: 4 }
      }
    ]
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 1,
    order: 3,
    title: 'Reservas de PG',
    description: 'Gana +5 PG raciales por nivel y aplica la bonificacion por Resistencia a todos los niveles, no solo al primero.',
    modifiers: [
      {
        id: 'combate-sin-corazas-g1-a3-puntos-de-golpe',
        source: { id: 'manual:combate-sin-corazas-g1-a3', nombre: 'Reservas de PG' },
        target: { kind: 'combat', key: 'pg' },
        operation: { kind: 'add', value: "5*nivel" }
      },
      {
        id: 'combate-sin-corazas-g1-a3-bonificacion-resistencia',
        source: { id: 'manual:combate-sin-corazas-g1-a3', nombre: 'Reservas de PG' },
        target: { kind: 'combat', key: 'pg' },
        operation: { kind: 'add', value: "(R)Modifier*(nivel-1)" }
      }
    ] 
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 2,
    order: 1,
    title: 'Descanso potenciado',
    description: 'Curar descanso equivale a la tirada completa de Resistencia, y si es lanzador, anade ese valor a PF/PM recuperados.',
    modifiers: [
      {
        id: 'combate-sin-corazas-g2-a1-descanso-potenciado',
        source: { id: 'manual:combate-sin-corazas-g2-a1', nombre: 'Descanso potenciado' },
        target: { kind: 'resource', key: 'regenracionPGDescanso' },
        operation: { kind: 'set', value: "(R)Modifier" }
      }
    ]
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 2,
    order: 2,
    title: 'Anular un golpe recibido',
    description: 'Una vez al dia puede ignorar por completo el dano de un ataque.',
    modifiers: [
      {
        id: 'combate-sin-corazas-g2-a2-anular-un-golpe-recibido',
        source: { id: 'manual:combate-sin-corazas-g2-a2', nombre: 'Anular un golpe recibido' },
        target: { kind: 'specialPerks', key: 'anularUnGolpeRecibido' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 2,
    order: 3,
    title: 'Resistencia contra criticos',
    description: 'Otorga +4 a la tirada de Resistencia contra golpes criticos, acumulando con futuras mejoras.',
    modifiers: [
      {
        id: 'combate-sin-corazas-g2-a3-resistencia-contra-criticos',
        source: { id: 'manual:combate-sin-corazas-g2-a3', nombre: 'Resistencia contra criticos' },
        target: { kind: 'combat', key: 'resistenciaCriticos' },
        operation: { kind: 'add', value: 4 }
      }
    ]
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 3,
    order: 1,
    title: 'Evasion constante',
    description: 'Ademas de la parada gratuita, ahora puede esquivar proyectiles y conjuros sin penalizacion alguna.',
    modifiers: [
      {
        id: 'combate-sin-corazas-g3-a1-evasion-constante',
        source: { id: 'manual:combate-sin-corazas-g3-a1', nombre: 'Evasion constante' },
        target: { kind: 'specialPerks', key: 'ignorarPenalizacionADefensaPorProyectilesYConjuros' },
        operation: { kind: 'set', value: true }
      }
    ]
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 3,
    order: 2,
    title: 'Resistencia magica natural',
    description: 'Por cada nivel impar se obtiene 1 punto de resistencia a la magia perjudicial en 1D20 (no aplica a conjuros psiquicos).',
    modifiers: [
      {
        id: 'combate-sin-corazas-g3-a2-resistencia-magica-natural',
        source: { id: 'manual:combate-sin-corazas-g3-a2', nombre: 'Resistencia magica natural' },
        target: { kind: 'combat', key: 'resistenciaMagica' },
        operation: { kind: 'add', value: "nivelImpar" }
      }
    ]
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 3,
    order: 3,
    title: 'Defensa reforzada',
    description: 'Suma +3 permanentes a la Defensa.',
    modifiers: [
      {
        id: 'combate-sin-corazas-g3-a3-defensa-reforzada',
        source: { id: 'manual:combate-sin-corazas-g3-a3', nombre: 'Defensa reforzada' },
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: 3 }
      }
    ]
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 4,
    order: 1,
    title: 'Imposible de rodear',
    description: 'Cada enemigo pierde 1 ataque por turno contra el personaje; el jugador decide que ataque se cancela.',
    modifiers: [
      {
        id: 'combate-sin-corazas-g4-a1-imposible-de-rodear',
        source: { id: 'manual:combate-sin-corazas-g4-a1', nombre: 'Imposible de rodear' },
        target: { kind: 'specialPerks', key: 'reducirNumeroDeAtaquesEnemigos' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  }
];

