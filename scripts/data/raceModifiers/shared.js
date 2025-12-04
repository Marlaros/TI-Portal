const createSource = (id, nombre, manualPage) => ({ id, nombre, manualPage });

const modifierId = (source, scope, key) => `${source.id}-${scope}-${key}`;

const addResource = (source, key, value, notes) => ({
  id: modifierId(source, 'res', key),
  source,
  target: { kind: 'resource', key },
  operation: { kind: 'add', value },
  ...(notes ? { notes } : {})
});

const addPerPointResource = (
  source,
  key,
  attribute,
  startValue,
  value,
  options = {},
  notes
) => ({
  id: modifierId(source, 'res-per', `${key}-${attribute}`),
  source,
  target: { kind: 'resource', key },
  operation: {
    kind: 'perPoint',
    attribute,
    startValue,
    value,
    ...(options.step ? { step: options.step } : {}),
    ...(options.includeStart === false ? { includeStart: false } : {})
  },
  ...(notes ? { notes } : {})
});

const addAttribute = (source, key, value, notes) => ({
  id: modifierId(source, 'attr', key),
  source,
  target: { kind: 'attribute', key },
  operation: { kind: 'add', value },
  ...(notes ? { notes } : {})
});

const addCombat = (source, key, value, notes) => ({
  id: modifierId(source, 'combat', key),
  source,
  target: { kind: 'combat', key },
  operation: { kind: 'add', value },
  ...(notes ? { notes } : {})
});

module.exports = {
  createSource,
  addResource,
  addPerPointResource,
  addAttribute,
  addCombat
};

