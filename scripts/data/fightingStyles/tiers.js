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
    description:
      'Los ataques pasan a infligir 1D10 PG y cuentan como magicos para superar resistencias.'
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 3,
    order: 2,
    title: 'Precision impecable',
    description: 'Se obtiene +4 al Ataque al emplear el cuerpo como arma.'
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 3,
    order: 3,
    title: 'Defensa contra proyectiles',
    description:
      'Puede esquivar hasta cuatro proyectiles o conjuros basados en Disparos en un mismo turno sin penalizacion.'
  },
  {
    styleSlug: 'lucha-sin-armas',
    group: 4,
    order: 1,
    title: 'Golpear puntos especificos sin penalizacion',
    description:
      'Permite llamar a lugares concretos (cabeza, desarme, etc.) sin aplicar penalizadores, siempre contra humanoides.'
  },

  // Lucha con una sola arma
  {
    styleSlug: 'arma-una-mano',
    group: 1,
    order: 1,
    title: 'Mejorar el Ataque',
    description:
      'La ligereza de la hoja concede +1 al Ataque cuando se combate con un arma mediana a una sola mano.'
  },
  {
    styleSlug: 'arma-una-mano',
    group: 1,
    order: 2,
    title: 'Mejorar el dano del golpe',
    description:
      'Los cortes elegantes se enfocan en organos vitales y anaden +2 PG de dano a cada impacto.'
  },
  {
    styleSlug: 'arma-una-mano',
    group: 1,
    order: 3,
    title: 'Reflejos superiores',
    description:
      'El arma se mueve con tal soltura que otorga -2 a la Iniciativa y +2 a la Defensa durante la batalla.'
  },
  {
    styleSlug: 'arma-una-mano',
    group: 2,
    order: 1,
    title: 'Golpes criticos frecuentes',
    description:
      'El personaje obtiene +1 al rango de critico con cada ataque realizado con el estilo.'
  },
  {
    styleSlug: 'arma-una-mano',
    group: 2,
    order: 2,
    title: 'Rebanar extremidades',
    description:
      'Penaliza en 1 el D6 de efectos secundarios cuando se obtiene un critico con armas cortantes.'
  },
  {
    styleSlug: 'arma-una-mano',
    group: 2,
    order: 3,
    title: 'Defensa espontanea',
    description:
      'Mientras se empuna una sola arma, se gana una parada gratuita en combate cuerpo a cuerpo.'
  },
  {
    styleSlug: 'arma-una-mano',
    group: 3,
    order: 1,
    title: 'Criticos mortales',
    description:
      'Se suma +2 adicional al rango de critico, acumulandose con las mejoras anteriores.'
  },
  {
    styleSlug: 'arma-una-mano',
    group: 3,
    order: 2,
    title: 'Impasible ante flancos',
    description:
      'Se obtiene +2 a la Ar y los enemigos no reciben bonificadores por atacar desde los flancos o la retaguardia.'
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
    description:
      'Anade +1 al rango de critico de cualquier lanza, alabarda o guadana empunada con este estilo.'
  },
  {
    styleSlug: 'arma-de-astas',
    group: 1,
    order: 3,
    title: 'Defensa de baston',
    description: 'Permite recibir una Defensa espontanea gracias al propio mango del arma.'
  },
  {
    styleSlug: 'arma-de-astas',
    group: 2,
    order: 1,
    title: 'Romper guardias',
    description: 'Los golpes precisos penalizan en 2 la Defensa de los enemigos alcanzados.'
  },
  {
    styleSlug: 'arma-de-astas',
    group: 2,
    order: 2,
    title: 'Golpe de barrido',
    description:
      'Cada ataque afecta tambien a los enemigos adyacentes, que sufren 1 PG por nivel del usuario.'
  },
  {
    styleSlug: 'arma-de-astas',
    group: 2,
    order: 3,
    title: 'Criticos quirurgicos',
    description: 'Se resta 1 al D6 de efectos secundarios cuando se logra un critico con armas de asta.'
  },
  {
    styleSlug: 'arma-de-astas',
    group: 3,
    order: 1,
    title: 'Defensa reforzada',
    description: 'El largo mango actua como escudo improvisado y concede +2 a la Defensa.'
  },
  {
    styleSlug: 'arma-de-astas',
    group: 3,
    order: 2,
    title: 'Impactos implacables',
    description: 'Cada ataque suma +2 al ajuste de dano total.'
  },
  {
    styleSlug: 'arma-de-astas',
    group: 3,
    order: 3,
    title: 'Preparado contra gigantes',
    description:
      'Anade +5 PG de dano cuando golpea criaturas enormes, monturas enemigas o voladores que se acerquen.'
  },
  {
    styleSlug: 'arma-de-astas',
    group: 4,
    order: 1,
    title: 'Muralla movil',
    description:
      'En duelos uno a uno, el adversario debe superar una tirada de Agilidad menos el nivel del experto para poder alcanzarlo ese turno.'
  },

  // Lucha con arma a dos manos
  {
    styleSlug: 'arma-dos-manos',
    group: 1,
    order: 1,
    title: 'Golpes que rompen defensa',
    description: 'Cada impacto reduce en 2 la Defensa del objetivo.'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 1,
    order: 2,
    title: 'Ataques poderosos',
    description: 'Otorga +2 al Ataque al blandir armas enormes.'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 1,
    order: 3,
    title: 'Criticos brutales',
    description: 'Incrementa el rango de critico en +1.'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 2,
    order: 1,
    title: 'Iniciativa contra todo pronostico',
    description: 'Aumenta la Iniciativa en +4 pese a cargar armas pesadas.'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 2,
    order: 2,
    title: 'Defensa espontanea',
    description:
      'Aunque use ambas manos, el guerrero es capaz de obtener una parada gratuita cada turno.'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 2,
    order: 3,
    title: 'Dispersar conjuros',
    description:
      'Cada golpe exitoso contra un lanzador obliga a un duelo de 1D10; si gana, disipa un conjuro de Defensa activo.'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 3,
    order: 1,
    title: 'Dano demoledor',
    description: 'El ajuste de dano pasa de +2 a +4.'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 3,
    order: 2,
    title: 'Mejorar el dado del arma',
    description: 'El arma incrementa su categoria (1D8 pasa a 1D10, 2D4+2 a 2D6+2, etc.).'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 3,
    order: 3,
    title: 'Romper concentracion',
    description:
      'Cada impacto contra un conjurador acumula -1 a su tirada de Concentracion hasta fin de combate.'
  },
  {
    styleSlug: 'arma-dos-manos',
    group: 4,
    order: 1,
    title: 'Criticos inevitables',
    description: 'Anade +2 extra al rango de critico (acumulable con las mejoras previas).'
  },

  // Lucha con dos armas
  {
    styleSlug: 'dos-armas',
    group: 1,
    order: 1,
    title: 'Sin penalizaciones',
    description:
      'El personaje aprende a atacar con ambas manos sin sufrir los penalizadores habituales y puede resolver ambos ataques en la misma fase.'
  },
  {
    styleSlug: 'dos-armas',
    group: 1,
    order: 2,
    title: 'Intercambio instantaneo',
    description:
      'Puede cambiar de armas, desenfundar o recoger equipo durante el turno sin gastar acciones.'
  },
  {
    styleSlug: 'dos-armas',
    group: 1,
    order: 3,
    title: 'Dos armas medianas',
    description:
      'Permite empunar un arma mediana en cada mano sin penalizadores adicionales (incluye armas magicas).'
  },
  {
    styleSlug: 'dos-armas',
    group: 2,
    order: 1,
    title: 'Defensa adicional',
    description: 'La mano no habil concede una Defensa espontanea contra ataques cuerpo a cuerpo.'
  },
  {
    styleSlug: 'dos-armas',
    group: 2,
    order: 2,
    title: 'Muralla contra proyectiles',
    description:
      'Los movimientos freneticos permiten utilizar la Defensa para detener Disparos sin penalizacion.'
  },
  {
    styleSlug: 'dos-armas',
    group: 2,
    order: 3,
    title: 'Confundir defensas enemigas',
    description: 'Los rivales sufren -5 a su Defensa cuando intentan parar los ataques del duelista.'
  },
  {
    styleSlug: 'dos-armas',
    group: 3,
    order: 1,
    title: 'Golpe ineludible',
    description: 'El ataque de la mano no habil no puede ser defendido en el primer intercambio.'
  },
  {
    styleSlug: 'dos-armas',
    group: 3,
    order: 2,
    title: 'Escudo de acero',
    description: 'Gana tres Defensas adicionales por turno exclusivas contra proyectiles.'
  },
  {
    styleSlug: 'dos-armas',
    group: 3,
    order: 3,
    title: 'Dano al inicio del turno',
    description:
      'Todo enemigo en contacto cuerpo a cuerpo sufre 3 PG automaticos al comienzo de cada turno del personaje.'
  },
  {
    styleSlug: 'dos-armas',
    group: 4,
    order: 1,
    title: 'Dos armas grandes',
    description:
      'Permite blandir armas grandes en ambas manos sin restricciones adicionales, incluso versiones magicas.'
  },

  // Lucha con arma y escudo
  {
    styleSlug: 'arma-y-escudo',
    group: 1,
    order: 1,
    title: 'Escudo como muralla',
    description: 'Otorga +1 a la Defensa al combatir con un escudo.'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 1,
    order: 2,
    title: 'Defensa contra disparos',
    description:
      'Se puede emplear la tirada de Defensa para detener proyectiles fisicos que impacten al guerrero.'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 1,
    order: 3,
    title: 'Proteger aliados',
    description:
      'El escudo permite desviar golpes dirigidos a un companero a menos de 2 metros, aunque aplica -5 a la tirada.'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 2,
    order: 1,
    title: 'Resistencia extra',
    description: 'El personaje gana 1 PC adicional por nivel gracias a su estilo defensivo.'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 2,
    order: 2,
    title: 'Defensas por ataque',
    description:
      'Concede una parada por cada ataque disponible del personaje (sin contar ataques adicionales por magia o tecnicas).'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 2,
    order: 3,
    title: 'Escudo anti-criticos',
    description:
      'Las defensas contra golpes criticos solo aplican -2 en lugar de -5, facilitando bloquear ataques letales.'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 3,
    order: 1,
    title: 'Fortaleza inmovil',
    description:
      'Mientras no se mueva en el turno, obtiene +2 a la Ar natural como si formara una muralla.'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 3,
    order: 2,
    title: 'Debilitar defensas enemigas',
    description: 'Los rivales tienen -4 a la Defensa al intentar bloquear los golpes del personaje.'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 3,
    order: 3,
    title: 'Defensa explosiva',
    description:
      'Puede gastar PC adicionales para sumar +1 por punto a una tirada de Defensa concreta.'
  },
  {
    styleSlug: 'arma-y-escudo',
    group: 4,
    order: 1,
    title: 'Desviar conjuros',
    description:
      'El escudo desvia conjuros que requieran Disparos tirando Defensa con -8; si tiene exito, cambia el rumbo del hechizo.'
  },

  // Arcos y ballestas
  {
    styleSlug: 'arcos-y-ballestas',
    group: 1,
    order: 1,
    title: 'Impacto agotador',
    description: 'Cada disparo preciso resta 1 PC al blanco ademas del dano habitual.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 1,
    order: 2,
    title: 'Perforar armaduras livianas',
    description:
      'Contra armaduras no metalicas o naturales se suma +1 al dano por nivel del personaje.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 1,
    order: 3,
    title: 'Precision y rapidez',
    description:
      'No hay penalizadores al disparar cerca de aliados y se elimina el malus a la Iniciativa al usar proyectiles.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 2,
    order: 1,
    title: 'Dano acumulado',
    description:
      'Cada flecha inflige +1 PG adicional por nivel impar del arquero.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 2,
    order: 2,
    title: 'Criticos afinados',
    description: 'Resta 1 al D6 de efectos secundarios cuando se consigue un critico con proyectiles.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 2,
    order: 3,
    title: 'Primer disparo certero',
    description: 'El primer ataque de cada combate obtiene +4 al Ataque/Disparos.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 3,
    order: 1,
    title: 'Derribar voladores',
    description:
      'Los impactos obligan a criaturas voladoras a chequear Fuerza (o Concentracion si vuelan por magia) o caer al suelo.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 3,
    order: 2,
    title: 'Ignorar defensas',
    description:
      'Los proyectiles se vuelven tan rapidos que los enemigos no pueden usar Defensa contra ellos.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 3,
    order: 3,
    title: 'Anular barreras magicas',
    description:
      'Con municion magica, los disparos ignoran conjuros de Defensa y reducciones de dano basadas en magia.'
  },
  {
    styleSlug: 'arcos-y-ballestas',
    group: 4,
    order: 1,
    title: 'Criticos permanentes',
    description:
      'Todos los disparos se consideran golpes criticos automaticos; las armas de fuego obtienen +2 al rango.'
  },

  // Armas arrojadizas
  {
    styleSlug: 'armas-arrojadizas',
    group: 1,
    order: 1,
    title: 'Dano adicional',
    description:
      'Cada proyectil inflige +1 PG por nivel impar del usuario cuando impacta.'
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 1,
    order: 2,
    title: 'Iniciativa relampago',
    description: 'Los lanzamientos obtienen +4 a la Iniciativa gracias a desenfundes veloces.'
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 1,
    order: 3,
    title: 'Bonificar todos los ataques I',
    description:
      'Permite usar ciertas armas arrojadizas en cuerpo a cuerpo, otorga ataques adicionales con dardos y mejora el alcance del disco de acero.'
    ,
    modifiers: [
      {
        id: 'armas-arrojadizas-g1-a3-numeroDeAtaques',
        source: { id: 'manual:armas-arrojadizas-g1-a3', nombre: 'Bonificar todos los ataques I' },
        target: { kind: 'combat', key: 'numeroDeAtaques' },
        operation: { kind: 'add', value: 1 }
      }
    ]
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 2,
    order: 1,
    title: 'Criticos precisos',
    description: 'Anade +2 al rango de critico con armas arrojadizas.'
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
        target: { kind: 'combat', key: 'ataqueDistancia' },
        operation: { kind: 'add', value: 4 }
      }
    ],
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 2,
    order: 3,
    title: 'Bonificar todos los ataques II',
    description: 'Concede un ataque adicional adicional con armas arrojadizas.'
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 3,
    order: 1,
    title: 'Ataque final imparable',
    description:
      'El ultimo proyectil del turno ignora cualquier intento de Defensa por parte del objetivo.'
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 3,
    order: 2,
    title: 'Resistencia atletica',
    description: 'El personaje gana 1 PC adicional por nivel gracias al entrenamiento con multiples lanzamientos.'
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 3,
    order: 3,
    title: 'Bonificar todos los ataques III',
    description: 'Obtiene un tercer ataque adicional con armas arrojadizas.'
  },
  {
    styleSlug: 'armas-arrojadizas',
    group: 4,
    order: 1,
    title: 'Ignorar barreras magicas',
    description:
      'Con municion magica, los proyectiles atraviesan conjuros de Defensa y reducciones de dano igual que en el grupo 3 de arqueria.'
  },

  // Lucha montada
  {
    styleSlug: 'lucha-montada',
    group: 1,
    order: 1,
    title: 'Combatir junto al corcel',
    description:
      'La montura puede atacar durante la batalla sin penalizar al jinete.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 1,
    order: 2,
    title: 'Montura de nivel 3',
    description:
      'Caballos y corceles elficos ascienden a nivel 3, ganando +1 al Ataque y un golpe extra con sus cascos.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 1,
    order: 3,
    title: 'Ventaja de altura',
    description:
      'Mientras golpee desde la montura contra enemigos mas bajos obtiene +1 a la Ar y +1 al Ataque.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 2,
    order: 1,
    title: 'Iniciativa compartida',
    description: 'La montura usa los mismos bonificadores de Iniciativa que su jinete.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 2,
    order: 2,
    title: 'Montura de nivel 4',
    description: 'El corcel asciende a nivel 4 y suma +2 adicionales a sus tiradas de Ataque.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 2,
    order: 3,
    title: 'Carga ininterrumpida',
    description:
      'La carga no se cancela aunque el jinete reciba ataques durante el desplazamiento.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 3,
    order: 1,
    title: 'Carga devastadora',
    description: 'Cuando carga, el modificador de dano se triplica en el primer ataque exitoso.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 3,
    order: 2,
    title: 'Escudo para la montura',
    description: 'La montura se vuelve inmune a conjuros de area que no la tengan como objetivo directo.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 3,
    order: 3,
    title: 'Montura de nivel 5',
    description: 'El animal alcanza nivel 5, gana +1 al Ataque y mejora su probabilidad de critico.'
  },
  {
    styleSlug: 'lucha-montada',
    group: 4,
    order: 1,
    title: 'Ofensiva de la montura',
    description:
      'La montura obtiene un ataque adicional y todos sus golpes incrementan en una categoria de dado.'
  },

  // Combate sin corazas
  {
    styleSlug: 'combate-sin-corazas',
    group: 1,
    order: 1,
    title: 'Defensa espontanea',
    description:
      'La falta de armadura permite moverse con rapidez y obtener una parada gratuita en cada turno.'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 1,
    order: 2,
    title: 'Mejorar la guarda',
    description:
      'Bonifica en +4 la Iniciativa y reduce en 4 PG cualquier dano recibido (excepto venenos o efectos internos).'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 1,
    order: 3,
    title: 'Reservas de PG',
    description:
      'Gana +5 PG raciales por nivel y aplica la bonificacion por Resistencia a todos los niveles, no solo al primero.'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 2,
    order: 1,
    title: 'Descanso potenciado',
    description:
      'Curar descanso equivale a la tirada completa de Resistencia, y si es lanzador, anade ese valor a PF/PM recuperados.'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 2,
    order: 2,
    title: 'Anular un golpe recibido',
    description: 'Una vez al dia puede ignorar por completo el dano de un ataque.'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 2,
    order: 3,
    title: 'Resistencia contra criticos',
    description:
      'Otorga +4 a la tirada de Resistencia contra golpes criticos, acumulando con futuras mejoras.'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 3,
    order: 1,
    title: 'Evasion constante',
    description:
      'Ademas de la parada gratuita, ahora puede esquivar proyectiles y conjuros sin penalizacion alguna.'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 3,
    order: 2,
    title: 'Resistencia magica natural',
    description:
      'Por cada nivel impar se obtiene 1 punto de resistencia a la magia perjudicial en 1D20 (no aplica a conjuros psiquicos).'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 3,
    order: 3,
    title: 'Defensa reforzada',
    description: 'Suma +3 permanentes a la Defensa.'
  },
  {
    styleSlug: 'combate-sin-corazas',
    group: 4,
    order: 1,
    title: 'Imposible de rodear',
    description:
      'Cada enemigo pierde 1 ataque por turno contra el personaje; el jugador decide que ataque se cancela.'
  }
];

