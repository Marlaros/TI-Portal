module.exports = [
  {
    slug: 'belleza-1-4',
    label: 'Monstruoso (1-4)',
    min: 1,
    max: 4,
    description:
      'El personaje presenta deformidades evidentes; la gente reacciona con miedo o rechazo ante su presencia.',
    notes:
      'El DJ puede describir cicatrices profundas o miembros faltantes. Inspira temor incluso en villanos empedernidos.',
    effects: [
      { kind: 'combat', key: 'intimidar', value: 1 },
      { kind: 'combat', key: 'hablarMasas', value: -1 },
      { kind: 'combat', key: 'negociarRogar', value: -1 },
      { kind: 'combat', key: 'adular', value: -1 }
    ]
  },
  {
    slug: 'belleza-5-8',
    label: 'Poco agraciado (5-8)',
    min: 5,
    max: 8,
    description:
      'Rasgos marcados o una postura poco estetica impiden que cause buena impresion en reuniones sociales.',
    notes: 'Penalizaciones menores al trato cortesano.',
    effects: [
      { kind: 'combat', key: 'negociarRogar', value: -1 },
      { kind: 'combat', key: 'adular', value: -1 }
    ]
  },
  {
    slug: 'belleza-9-12',
    label: 'Promedio (9-12)',
    min: 9,
    max: 12,
    description:
      'La belleza pasa desapercibida: sin ventajas ni desventajas innatas relacionadas al aspecto fisico.',
    notes: 'Estandar para la mayoria de los habitantes de Kalaguand.',
    effects: []
  },
  {
    slug: 'belleza-13-16',
    label: 'Atractivo (13-16)',
    min: 13,
    max: 16,
    description:
      'Rasgos agradables y cuidados que atraen miradas, aunque sin beneficios mecanicos adicionales.',
    notes:
      'Sirve como referencia narrativa para describir la buena presencia del aventurero.',
    effects: []
  },
  {
    slug: 'belleza-17-19',
    label: 'Encantador (17-19)',
    min: 17,
    max: 19,
    description:
      'Una mezcla perfecta de sonrisa, postura y voz. La mayoria de la gente disfruta tratar con el personaje.',
    notes:
      'Ademas de las bonificaciones indicadas, el manual concede +1 a la pericia Seducir si el personaje la posee.',
    effects: [
      { kind: 'combat', key: 'adular', value: 1 },
      { kind: 'combat', key: 'negociarRogar', value: 1 }
    ]
  },
  {
    slug: 'belleza-20-plus',
    label: 'Mitico (20+)',
    min: 20,
    max: null,
    description:
      'Belleza legendaria, casi sobrenatural. El aventurero consigue favores y atencion con apenas un gesto.',
    notes:
      'El manual anade +2 a la pericia Seducir y refuerza el trato privilegiado por parte de PNJ.',
    effects: [
      { kind: 'combat', key: 'hablarMasas', value: 1 },
      { kind: 'combat', key: 'negociarRogar', value: 1 },
      { kind: 'combat', key: 'adular', value: 1 }
    ]
  }
];

