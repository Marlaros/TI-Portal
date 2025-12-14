import {
  ATTRIBUTE_DEFAULT,
  ATTRIBUTE_KEYS,
  AttributeKey,
  COMBAT_STAT_KEYS,
  CombatStatKey,
  RESOURCE_KEYS,
  ResourceKey
} from './constants';

export type Attributes = Record<AttributeKey, number>;
export type Resources = Record<ResourceKey, number>;
export type CombatStats = Record<CombatStatKey, number>;

export const createEmptyAttributes = (): Attributes =>
  ATTRIBUTE_KEYS.reduce<Attributes>((acc, key) => {
    acc[key] = ATTRIBUTE_DEFAULT;
    return acc;
  }, {} as Attributes);

export const createEmptyResources = (): Resources =>
  RESOURCE_KEYS.reduce<Resources>((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {} as Resources);

export const createEmptyCombatStats = (): CombatStats =>
  COMBAT_STAT_KEYS.reduce<CombatStats>((acc, key) => {
    if (key === 'ataque' || key === 'defensa' || key === 'ataqueDistancia') {
      acc[key] = 10;
    } else if (key === 'percepcionChequeo' || key === 'liderazgoChequeo') {
      // base value for perception and leadership skill checks
      acc[key] = 8;
    } else if (key === 'numeroDeAtaques' || key === 'numeroDeAtaquesDistancia') {
      // default number of attacks
      acc[key] = 1;
    } else {
      acc[key] = 0;
    }
    return acc;
  }, {} as CombatStats);

