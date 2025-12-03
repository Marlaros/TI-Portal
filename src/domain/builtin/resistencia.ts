import { exactAttributeModifier, perPointModifier } from './factory';

const resistenciaSource = {
  id: 'tabla-resistencia',
  nombre: 'Tabla de Resistencia',
  manualPage: 4
};

const resistenciaFlatModifiers = [
  exactAttributeModifier(
    {
      id: 'resistencia-1-pg',
      attribute: 'resistencia',
      exact: 1,
      target: { kind: 'resource', key: 'pg' },
      value: -6
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-1-pc',
      attribute: 'resistencia',
      exact: 1,
      target: { kind: 'resource', key: 'pc' },
      value: -3
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-2-pg',
      attribute: 'resistencia',
      exact: 2,
      target: { kind: 'resource', key: 'pg' },
      value: -5
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-2-pc',
      attribute: 'resistencia',
      exact: 2,
      target: { kind: 'resource', key: 'pc' },
      value: -2
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-3-pg',
      attribute: 'resistencia',
      exact: 3,
      target: { kind: 'resource', key: 'pg' },
      value: -4
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-3-pc',
      attribute: 'resistencia',
      exact: 3,
      target: { kind: 'resource', key: 'pc' },
      value: -2
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-4-pg',
      attribute: 'resistencia',
      exact: 4,
      target: { kind: 'resource', key: 'pg' },
      value: -3
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-4-pc',
      attribute: 'resistencia',
      exact: 4,
      target: { kind: 'resource', key: 'pc' },
      value: -1
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-5-pg',
      attribute: 'resistencia',
      exact: 5,
      target: { kind: 'resource', key: 'pg' },
      value: -2
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-5-pc',
      attribute: 'resistencia',
      exact: 5,
      target: { kind: 'resource', key: 'pc' },
      value: -1
    },
    resistenciaSource
  ),
  exactAttributeModifier(
    {
      id: 'resistencia-6-pg',
      attribute: 'resistencia',
      exact: 6,
      target: { kind: 'resource', key: 'pg' },
      value: -1
    },
    resistenciaSource
  )
];

const resistenciaScalingModifiers = [
  perPointModifier(
    {
      id: 'resistencia-13-pg-extra',
      attribute: 'resistencia',
      target: { kind: 'resource', key: 'pg' },
      startValue: 13,
      value: 1
    },
    resistenciaSource
  ),
  perPointModifier(
    {
      id: 'resistencia-13-pc-extra',
      attribute: 'resistencia',
      target: { kind: 'resource', key: 'pc' },
      startValue: 13,
      value: 1
    },
    resistenciaSource
  ),
  perPointModifier(
    {
      id: 'resistencia-13-recuperacion',
      attribute: 'resistencia',
      target: { kind: 'resource', key: 'recuperacionPg' },
      startValue: 13,
      value: 1
    },
    resistenciaSource
  )
];

export const resistenciaModifiers = [...resistenciaFlatModifiers, ...resistenciaScalingModifiers];

