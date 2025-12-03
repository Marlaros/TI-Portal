import { CharacterSnapshot, RuleEvaluationContext } from './snapshot';
import { ModifierCondition, RuleModifier, RuleTarget } from './rules';
import { Attributes } from './state';

type SelectionTarget = Extract<ModifierCondition, { type: 'selection' }>['target'];

export const conditionsSatisfied = (
  conditions: ModifierCondition[] | undefined,
  context: RuleEvaluationContext
): boolean => {
  if (!conditions || conditions.length === 0) {
    return true;
  }

  return conditions.every((condition) => {
    switch (condition.type) {
      case 'attribute': {
        const value = context.attributes[condition.attribute];
        if (condition.exact !== undefined) {
          return value === condition.exact;
        }
        if (condition.min !== undefined && value < condition.min) {
          return false;
        }
        if (condition.max !== undefined && value > condition.max) {
          return false;
        }
        return true;
      }
      case 'level': {
        if (condition.min !== undefined && context.level < condition.min) {
          return false;
        }
        if (condition.max !== undefined && context.level > condition.max) {
          return false;
        }
        return true;
      }
      case 'selection': {
        const ids = collectSelectionIds(condition.target, context);
        return condition.ids.some((id) => ids.has(id));
      }
      case 'weaponTag':
        return condition.tags.some((tag) => context.weaponTags.includes(tag));
      case 'fightingStyle':
        return condition.styles.some(
          (style) => context.selections.fightingStyleId === style
        );
      case 'flag': {
        const desired = condition.value ?? true;
        return context.flags.has(condition.flag) === desired;
      }
      default:
        return true;
    }
  });
};

const collectSelectionIds = (
  target: SelectionTarget,
  context: RuleEvaluationContext
): Set<string> => {
  const ids = new Set<string>();
  const { selections } = context;

  switch (target) {
    case 'race':
      if (selections.raceId) ids.add(selections.raceId);
      break;
    case 'raceVariant':
      if (selections.raceVariantId) ids.add(selections.raceVariantId);
      break;
    case 'categoryPrincipal':
      if (selections.primaryCategoryId) ids.add(selections.primaryCategoryId);
      break;
    case 'categorySecundaria':
      if (selections.secondaryCategoryId) ids.add(selections.secondaryCategoryId);
      break;
    case 'advantage':
      selections.advantageIds.forEach((id) => ids.add(id));
      break;
    case 'disadvantage':
      selections.disadvantageIds.forEach((id) => ids.add(id));
      break;
    default:
      break;
  }

  return ids;
};

export const createTargetAccessor = (
  snapshot: CharacterSnapshot,
  target: RuleTarget
): { get: () => number; set: (value: number) => void } => {
  if (target.kind === 'attribute') {
    return {
      get: () => snapshot.attributes[target.key],
      set: (value) => {
        snapshot.attributes[target.key] = value;
      }
    };
  }

  if (target.kind === 'resource') {
    return {
      get: () => snapshot.resources[target.key],
      set: (value) => {
        snapshot.resources[target.key] = value;
      }
    };
  }

  return {
    get: () => snapshot.combat[target.key],
    set: (value) => {
      snapshot.combat[target.key] = value;
    }
  };
};

export const applyOperation = (
  current: number,
  operation: RuleModifier['operation'],
  attributes: Attributes
): number => {
  switch (operation.kind) {
    case 'add':
      return current + operation.value;
    case 'multiply':
      return current * operation.value;
    case 'set':
      return operation.value;
    case 'perPoint': {
      const attributeValue = attributes[operation.attribute];
      if (attributeValue < operation.startValue) {
        return current;
      }
      const includeStart = operation.includeStart ?? true;
      const delta = attributeValue - operation.startValue;
      const step = operation.step ?? 1;
      const increments = Math.floor(delta / step) + (includeStart ? 1 : 0);
      return current + increments * operation.value;
    }
    default:
      return current;
  }
};

export const describeTarget = (target: RuleTarget): string => {
  switch (target.kind) {
    case 'attribute':
      return `atributo:${target.key}`;
    case 'resource':
      return `recurso:${target.key}`;
    case 'combat':
      return `combate:${target.key}`;
    default:
      return 'desconocido';
  }
};

