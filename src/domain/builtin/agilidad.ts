import { exactAttributeModifier, perPointModifier } from './factory';

const agilidadSource = {
  id: 'tabla-agilidad',
  nombre: 'Tabla de Agilidad',
  manualPage: 4
};

const agilidadFlatEntries = [
  { value: 1, iniciativa: -5, defensa: -4, disparos: -4, armadura: -4 },
  { value: 2, iniciativa: -5, defensa: -3, disparos: -3, armadura: -3 },
  { value: 3, iniciativa: -4, defensa: -3, disparos: -3, armadura: -3 },
  { value: 4, iniciativa: -4, defensa: -2, disparos: -2, armadura: -2 },
  { value: 5, iniciativa: -2, defensa: -2, disparos: -2, armadura: -2 },
  { value: 6, iniciativa: -1, defensa: -1, disparos: -1, armadura: -1 }
];

const agilidadFlatModifiers = agilidadFlatEntries.flatMap((entry) => [
  exactAttributeModifier(
    {
      id: `agilidad-${entry.value}-ini`,
      attribute: 'agilidad',
      exact: entry.value,
      target: { kind: 'combat', key: 'iniciativa' },
      value: entry.iniciativa
    },
    agilidadSource
  ),
  exactAttributeModifier(
    {
      id: `agilidad-${entry.value}-def`,
      attribute: 'agilidad',
      exact: entry.value,
      target: { kind: 'combat', key: 'defensa' },
      value: entry.defensa
    },
    agilidadSource
  ),
  exactAttributeModifier(
    {
      id: `agilidad-${entry.value}-dist`,
      attribute: 'agilidad',
      exact: entry.value,
      target: { kind: 'combat', key: 'ataqueDistancia' },
      value: entry.disparos
    },
    agilidadSource
  ),
  exactAttributeModifier(
    {
      id: `agilidad-${entry.value}-armadura`,
      attribute: 'agilidad',
      exact: entry.value,
      target: { kind: 'combat', key: 'armadura' },
      value: entry.armadura
    },
    agilidadSource
  )
]);

const agilidadScalingModifiers = [
  perPointModifier(
    {
      id: 'agilidad-13-iniciativa',
      attribute: 'agilidad',
      target: { kind: 'combat', key: 'iniciativa' },
      startValue: 13,
      step: 2,
      includeStart: false,
      value: 1
    },
    agilidadSource
  ),
  perPointModifier(
    {
      id: 'agilidad-15-defensa',
      attribute: 'agilidad',
      target: { kind: 'combat', key: 'defensa' },
      startValue: 15,
      step: 3,
      includeStart: false,
      value: 1
    },
    agilidadSource
  )
];

export const agilidadModifiers = [...agilidadFlatModifiers, ...agilidadScalingModifiers];

