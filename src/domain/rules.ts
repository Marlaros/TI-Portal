import { z } from 'zod';

import {
  AttributeKey,
  CombatStatKey,
  ResourceKey,
  RuleContextFlag,
  FIGHTING_STYLE_KEYS,
  FightingStyleKey
} from './constants';

export type RuleTarget =
  | { kind: 'attribute'; key: AttributeKey }
  | { kind: 'combat'; key: CombatStatKey }
  | { kind: 'resource'; key: ResourceKey };

export type ModifierOperation =
  | { kind: 'add'; value: number }
  | { kind: 'multiply'; value: number }
  | { kind: 'set'; value: number }
  | {
      kind: 'perPoint';
      attribute: AttributeKey;
      startValue: number;
      step?: number;
      includeStart?: boolean;
      value: number;
    };

export type ModifierCondition =
  | {
      type: 'attribute';
      attribute: AttributeKey;
      min?: number;
      max?: number;
      exact?: number;
    }
  | {
      type: 'level';
      min?: number;
      max?: number;
    }
  | {
      type: 'selection';
      target: 'race' | 'raceVariant' | 'categoryPrincipal' | 'categorySecundaria' | 'advantage' | 'disadvantage';
      ids: string[];
    }
  | {
      type: 'weaponTag';
      tags: string[];
    }
  | {
      type: 'fightingStyle';
      styles: FightingStyleKey[];
    }
  | {
      type: 'flag';
      flag: RuleContextFlag;
      value?: boolean;
    };

export interface RuleSourceRef {
  id: string;
  nombre: string;
  manualPage?: number;
  descripcion?: string;
}

export interface RuleModifier {
  id: string;
  source: RuleSourceRef;
  target: RuleTarget;
  operation: ModifierOperation;
  conditions?: ModifierCondition[];
  priority?: number;
  notes?: string;
}

const targetSchema = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('attribute'),
    key: z.custom<AttributeKey>()
  }),
  z.object({
    kind: z.literal('combat'),
    key: z.custom<CombatStatKey>()
  }),
  z.object({
    kind: z.literal('resource'),
    key: z.custom<ResourceKey>()
  })
]);

const operationSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('add'), value: z.number() }),
  z.object({ kind: z.literal('multiply'), value: z.number() }),
  z.object({ kind: z.literal('set'), value: z.number() }),
  z.object({
    kind: z.literal('perPoint'),
    attribute: z.custom<AttributeKey>(),
    startValue: z.number(),
    step: z.number().positive().optional(),
    includeStart: z.boolean().optional(),
    value: z.number()
  })
]);

const conditionSchema: z.ZodType<ModifierCondition> = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('attribute'),
    attribute: z.custom<AttributeKey>(),
    min: z.number().optional(),
    max: z.number().optional(),
    exact: z.number().optional()
  }),
  z.object({
    type: z.literal('level'),
    min: z.number().optional(),
    max: z.number().optional()
  }),
  z.object({
    type: z.literal('selection'),
    target: z.enum([
      'race',
      'raceVariant',
      'categoryPrincipal',
      'categorySecundaria',
      'advantage',
      'disadvantage'
    ]),
    ids: z.array(z.string())
  }),
  z.object({
    type: z.literal('weaponTag'),
    tags: z.array(z.string())
  }),
  z.object({
    type: z.literal('fightingStyle'),
    styles: z.array(z.enum(FIGHTING_STYLE_KEYS))
  }),
  z.object({
    type: z.literal('flag'),
    flag: z.custom<RuleContextFlag>(),
    value: z.boolean().optional()
  })
]);

export const ruleModifierSchema: z.ZodType<RuleModifier> = z.object({
  id: z.string(),
  source: z.object({
    id: z.string(),
    nombre: z.string(),
    manualPage: z.number().optional(),
    descripcion: z.string().optional()
  }),
  target: targetSchema,
  operation: operationSchema,
  conditions: z.array(conditionSchema).optional(),
  priority: z.number().optional(),
  notes: z.string().optional()
});

