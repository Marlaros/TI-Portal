import {
  CharacterSeed,
  CharacterSnapshot,
  EMPTY_SNAPSHOT,
  RuleApplicationResult,
  RuleDebugEntry,
  RuleEvaluationContext
} from './snapshot';
import { CatalogBundle } from './catalog';
import { RuleModifier } from './rules';
import { Attributes } from './state';
import { RuleContextFlag } from './constants';
import { builtinAttributeModifiers } from './builtin';
import {
  applyOperation,
  conditionsSatisfied,
  createTargetAccessor,
  describeTarget
} from './rule-helpers';

interface GatheredModifiers {
  modifiers: RuleModifier[];
  sources: Set<string>;
}

export interface RuleEngineOptions {
  catalogs: CatalogBundle;
  version?: string;
}

export const buildCharacterSnapshot = (
  seed: CharacterSeed,
  options: RuleEngineOptions
): RuleApplicationResult => {
  const snapshot = initializeSnapshot(seed, options.version);
  const context = createEvaluationContext(seed, snapshot.attributes);
  const { modifiers, sources } = gatherModifiers(seed, options.catalogs);
  const combinedModifiers = [
    ...builtinAttributeModifiers,
    ...modifiers,
    ...(seed.customModifiers ?? [])
  ];
  const sortedModifiers = sortModifiers(combinedModifiers);

  const debugLog: RuleDebugEntry[] = [];

  for (const modifier of sortedModifiers) {
    if (!conditionsSatisfied(modifier.conditions, context)) {
      continue;
    }

    const accessor = createTargetAccessor(snapshot, modifier.target);
    const previous = accessor.get();
    const next = applyOperation(previous, modifier.operation, snapshot.attributes);

    if (next === previous) {
      continue;
    }

    accessor.set(next);
    sources.add(modifier.source.id);
    debugLog.push({
      modifierId: modifier.id,
      target: describeTarget(modifier.target),
      delta: next - previous,
      reason: modifier.source.nombre
    });
  }

  snapshot.metadata.appliedSources = Array.from(sources);
  snapshot.metadata.updatedAt = new Date().toISOString();

  return {
    snapshot,
    debugLog
  };
};

const initializeSnapshot = (seed: CharacterSeed, version?: string): CharacterSnapshot => {
  const snapshot = EMPTY_SNAPSHOT();

  snapshot.description = seed.description;
  snapshot.attributes = { ...seed.attributes };
  snapshot.metadata.version = version ?? 'engine-0.1.0';
  snapshot.metadata.createdAt = new Date().toISOString();
  snapshot.metadata.updatedAt = snapshot.metadata.createdAt;

  return snapshot;
};

const createEvaluationContext = (
  seed: CharacterSeed,
  attributes: Attributes
): RuleEvaluationContext => {
  return {
    selections: seed.selections,
    attributes,
    flags: new Set<RuleContextFlag>(seed.contextFlags ?? []),
    level: seed.description.nivel,
    weaponTags: seed.selections.weaponIds
  };
};

const gatherModifiers = (seed: CharacterSeed, catalogs: CatalogBundle): GatheredModifiers => {
  const modifiers: RuleModifier[] = [];
  const sources = new Set<string>();

  const pushFromId = (collection: Record<string, { modifiers: RuleModifier[] }>, id?: string) => {
    if (!id) return;
    const record = collection[id];
    if (!record) return;
    record.modifiers.forEach((modifier) => {
      modifiers.push(modifier);
      sources.add(modifier.source.id);
    });
  };

  pushFromId(catalogs.races, seed.selections.raceId);
  pushFromId(catalogs.raceVariants, seed.selections.raceVariantId);
  pushFromId(catalogs.categories, seed.selections.primaryCategoryId);
  pushFromId(catalogs.categories, seed.selections.secondaryCategoryId ?? undefined);

  seed.selections.specialtyIds.forEach((id) => pushFromId(catalogs.specialties, id));
  seed.selections.advantageIds.forEach((id) => pushFromId(catalogs.advantages, id));
  seed.selections.disadvantageIds.forEach((id) => pushFromId(catalogs.disadvantages, id));
  seed.selections.weaponIds.forEach((id) => pushFromId(catalogs.weapons, id));
  seed.selections.mountIds.forEach((id) => pushFromId(catalogs.mounts, id));

  return { modifiers, sources };
};

const sortModifiers = (modifiers: RuleModifier[]): RuleModifier[] =>
  modifiers.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));


