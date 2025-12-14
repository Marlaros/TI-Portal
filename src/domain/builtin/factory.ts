import { RuleModifier } from '../rules';

export type AttributeId = 'fuerza' | 'resistencia' | 'agilidad' | 'percepcion' | 'liderazgo' | 'inteligencia' | 'belleza' | 'categoriaSocial';

export type AttributeSource = RuleModifier['source'];

export const exactAttributeModifier = (
  params: {
    id: string;
    attribute: AttributeId;
    exact: number;
    target: RuleModifier['target'];
    value: number;
    priority?: number;
  },
  source: AttributeSource
): RuleModifier => ({
  id: params.id,
  source,
  target: params.target,
  operation: { kind: 'add', value: params.value },
  conditions: [
    {
      type: 'attribute',
      attribute: params.attribute,
      exact: params.exact
    }
  ],
  priority: params.priority ?? 5
});

export const perPointModifier = (
  params: {
    id: string;
    attribute: AttributeId;
    target: RuleModifier['target'];
    startValue: number;
    value: number;
    step?: number;
    includeStart?: boolean;
    priority?: number;
  },
  source: AttributeSource
): RuleModifier => ({
  id: params.id,
  source,
  target: params.target,
  operation: {
    kind: 'perPoint',
    attribute: params.attribute,
    startValue: params.startValue,
    step: params.step,
    includeStart: params.includeStart,
    value: params.value
  },
  priority: params.priority ?? 10
});

