import { exactAttributeModifier, perPointModifier } from './factory';

const fuerzaSource = {
  id: 'tabla-fuerza',
  nombre: 'Tabla de Fuerza',
  manualPage: 4
};

const fuerzaFlatModifiers = [
  exactAttributeModifier(
    {
      id: 'fuerza-1-ataque',
      attribute: 'fuerza',
      exact: 1,
      target: { kind: 'combat', key: 'ataque' },
      value: -2
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-1-dano',
      attribute: 'fuerza',
      exact: 1,
      target: { kind: 'combat', key: 'dano' },
      value: -5
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-2-ataque',
      attribute: 'fuerza',
      exact: 2,
      target: { kind: 'combat', key: 'ataque' },
      value: -2
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-2-dano',
      attribute: 'fuerza',
      exact: 2,
      target: { kind: 'combat', key: 'dano' },
      value: -4
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-3-ataque',
      attribute: 'fuerza',
      exact: 3,
      target: { kind: 'combat', key: 'ataque' },
      value: -1
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-3-dano',
      attribute: 'fuerza',
      exact: 3,
      target: { kind: 'combat', key: 'dano' },
      value: -4
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-4-ataque',
      attribute: 'fuerza',
      exact: 4,
      target: { kind: 'combat', key: 'ataque' },
      value: -1
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-4-dano',
      attribute: 'fuerza',
      exact: 4,
      target: { kind: 'combat', key: 'dano' },
      value: -3
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-5-dano',
      attribute: 'fuerza',
      exact: 5,
      target: { kind: 'combat', key: 'dano' },
      value: -2
    },
    fuerzaSource
  ),
  exactAttributeModifier(
    {
      id: 'fuerza-6-dano',
      attribute: 'fuerza',
      exact: 6,
      target: { kind: 'combat', key: 'dano' },
      value: -1
    },
    fuerzaSource
  )
];

const fuerzaScalingModifiers = [
  perPointModifier(
    {
      id: 'fuerza-16-dano-extra',
      attribute: 'fuerza',
      target: { kind: 'combat', key: 'dano' },
      startValue: 16,
      value: 1
    },
    fuerzaSource
  ),
  perPointModifier(
    {
      id: 'fuerza-18-ataque-extra',
      attribute: 'fuerza',
      target: { kind: 'combat', key: 'ataque' },
      startValue: 18,
      value: 1
    },
    fuerzaSource
  )
];

export const fuerzaModifiers = [...fuerzaFlatModifiers, ...fuerzaScalingModifiers];

