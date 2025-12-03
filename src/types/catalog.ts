import { RuleModifier } from '@/domain/rules';

export interface RaceRecord {
  id: string;
  slug: string;
  name: string;
  shortDescription: string | null;
  description: string | null;
  imageUrl: string | null;
}

export interface RaceVariantRecord {
  id: string;
  slug: string;
  name: string;
  shortDescription: string | null;
  description: string | null;
  imageUrl: string | null;
  raceId: string;
  raceName: string;
  raceSlug: string;
}

export interface CategoryRecord {
  id: string;
  slug: string;
  name: string;
  role: string;
  shortDescription: string | null;
  description: string | null;
  imageUrls: string[];
}

export interface SpecialtyRecord {
  id: string;
  slug: string;
  name: string;
  shortDescription: string | null;
  description: string | null;
  imageUrls: string[];
  categoryId: string;
  categoryName: string;
  allowedRaces: string[];
}

export interface AdvantageRecord {
  slug: string;
  name: string;
  cost: number;
  description: string | null;
  modifiers: RuleModifier[];
}

export interface DisadvantageRecord {
  slug: string;
  name: string;
  reward: number;
  description: string | null;
  modifiers: RuleModifier[];
}

export interface EquipmentRecord {
  slug: string;
  name: string;
  slot: string;
  description: string | null;
  modifiers: RuleModifier[];
}

export interface FightingStyleRecord {
  slug: string;
  name: string;
  styleKey: string;
  description: string | null;
  modifiers: RuleModifier[];
}

export interface WeaponMasteryRecord {
  slug: string;
  name: string;
  weaponTag: string | null;
  description: string | null;
  modifiers: RuleModifier[];
}

export interface SkillRecord {
  slug: string;
  name: string;
  description: string | null;
  modifiers: RuleModifier[];
}

export interface CatalogBootstrapPayload {
  races: RaceRecord[];
  raceVariants: RaceVariantRecord[];
  categories: CategoryRecord[];
  specialties: SpecialtyRecord[];
  advantages: AdvantageRecord[];
  disadvantages: DisadvantageRecord[];
  equipment: EquipmentRecord[];
  fightingStyles: FightingStyleRecord[];
  weaponMasteries: WeaponMasteryRecord[];
  skills: SkillRecord[];
}


