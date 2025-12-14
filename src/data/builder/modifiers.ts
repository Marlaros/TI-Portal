import { RuleContextFlag } from '@/domain/constants';
import { RuleModifier } from '@/domain/rules';
import { LINEAGE_RULES } from './lineage';
import {
  BuilderOption,
  EquipmentOption,
  FightingStyleOption,
  WeaponMasteryOption
} from './types';

export interface BuilderSelections {
  race?: string;
  raceType?: string;
  category?: string;
  secondaryCategory?: string | null;
  specialty?: string;
  advantageIds: string[];
  disadvantageIds: string[];
  equipmentIds: string[];
  fightingStyleId?: string | null;
  fightingStyleTierIds?: string[];
  weaponSpecializationId?: string | null;
  skillIds: string[];
  mountIds: string[];
}

const optionMap = <T extends BuilderOption>(options: T[]) =>
  options.reduce<Record<string, T>>((acc, opt) => {
    acc[opt.id] = opt;
    return acc;
  }, {});

const fightingStyleMapFactory = (styles: FightingStyleOption[]) =>
  styles.reduce<Record<string, FightingStyleOption>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

const styleFlagMap: Partial<Record<string, RuleContextFlag[]>> = {
  sinArmadura: ['sinCoraza'],
  armaDosManos: ['armaPesada'],
  dosArmas: ['dualWield'],
  montada: ['montado']
};

const masteryFlagMap: Partial<Record<string, RuleContextFlag[]>> = {
  armaPesada: ['armaPesada'],
  montada: ['montado']
};

const pushModifiers = (
  acc: RuleModifier[],
  option?: BuilderOption | EquipmentOption | FightingStyleOption | WeaponMasteryOption
) => {
  if (option?.modifiers) {
    acc.push(...option.modifiers);
  }
};

const collectLineage = (
  acc: RuleModifier[],
  selections: BuilderSelections
) => {
  if (selections.race) {
    const mods = LINEAGE_RULES.race?.[selections.race];
    if (mods) acc.push(...mods);
  }
  if (selections.raceType) {
    const mods = LINEAGE_RULES.raceType?.[selections.raceType];
    if (mods) acc.push(...mods);
  }
  if (selections.category) {
    const mods = LINEAGE_RULES.category?.[selections.category];
    if (mods) acc.push(...mods);
  }
  if (selections.specialty) {
    const mods = LINEAGE_RULES.specialty?.[selections.specialty];
    if (mods) acc.push(...mods);
  }
};

export interface CatalogCollections {
  advantages: BuilderOption[];
  disadvantages: BuilderOption[];
  equipment: EquipmentOption[];
  fightingStyles: FightingStyleOption[];
  fightingStyleTiers: BuilderOption[];
  weaponMasteries: WeaponMasteryOption[];
  skills: BuilderOption[];
  mounts?: BuilderOption[];
  specialPerks?: BuilderOption[];
}

export const collectBuilderModifiers = (selections: BuilderSelections, catalogs: CatalogCollections) => {
  const advantageMap = optionMap(catalogs.advantages);
  const disadvantageMap = optionMap(catalogs.disadvantages);
  const equipmentMap = optionMap(catalogs.equipment);
  const skillMap = optionMap(catalogs.skills);
  const fightingStyleMap = fightingStyleMapFactory(catalogs.fightingStyles);
  const weaponMasteryMap = optionMap(catalogs.weaponMasteries);

  const modifiers: RuleModifier[] = [];
  collectLineage(modifiers, selections);

  selections.advantageIds.forEach((id) => pushModifiers(modifiers, advantageMap[id]));
  selections.disadvantageIds.forEach((id) => pushModifiers(modifiers, disadvantageMap[id]));
  selections.equipmentIds.forEach((id) => pushModifiers(modifiers, equipmentMap[id]));
  selections.skillIds.forEach((id) => pushModifiers(modifiers, skillMap[id]));

  if (selections.fightingStyleId) {
    const style = fightingStyleMap[selections.fightingStyleId];
    pushModifiers(modifiers, style);
  }

  // tiers / perks
  if (selections.fightingStyleTierIds && selections.fightingStyleTierIds.length) {
    const tierMap = optionMap(catalogs.fightingStyleTiers as any);
    selections.fightingStyleTierIds.forEach((id) => pushModifiers(modifiers, tierMap[id]));
  }

  if (selections.weaponSpecializationId) {
    const mastery = weaponMasteryMap[selections.weaponSpecializationId];
    pushModifiers(modifiers, mastery);
  }

  return modifiers;
};

export const collectBuilderFlags = (selections: BuilderSelections, catalogs: CatalogCollections) => {
  const fightingStyleMap = fightingStyleMapFactory(catalogs.fightingStyles);
  const weaponMasteryMap = optionMap(catalogs.weaponMasteries);

  const flags = new Set<RuleContextFlag>();
  const style = selections.fightingStyleId
    ? fightingStyleMap[selections.fightingStyleId]
    : undefined;
  if (style?.key && styleFlagMap[style.key]) {
    styleFlagMap[style.key]?.forEach((flag) => flags.add(flag));
  }
  const mastery = selections.weaponSpecializationId
    ? weaponMasteryMap[selections.weaponSpecializationId]
    : undefined;
  if (mastery?.weaponTag && masteryFlagMap[mastery.weaponTag]) {
    masteryFlagMap[mastery.weaponTag]?.forEach((flag) => flags.add(flag));
  }
  return Array.from(flags);
};

