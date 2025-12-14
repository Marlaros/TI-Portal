import { RuleModifier } from '@/domain/rules';

export interface RaceRecord {
  id: string;
  slug: string;
  name: string;
  shortDescription: string | null;
  description: string | null;
  imageUrl: string | null;
  modifiers: RuleModifier[];
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
  modifiers: RuleModifier[];
}

export interface CategoryRecord {
  id: string;
  slug: string;
  name: string;
  role: string;
  shortDescription: string | null;
  description: string | null;
  imageUrls: string[];
  allowedRaces: string[];
  modifiers: RuleModifier[];
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
  modifiers: RuleModifier[];
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
  // price stored as JSONB in the DB: currency code and amount
  price?: {
    currency: 'mc' | 'mp' | 'mo';
    amount: number;
  } | null;
}

export interface FightingStyleRecord {
  slug: string;
  name: string;
  styleKey: string;
  description: string | null;
  modifiers: RuleModifier[];
}

export interface FightingStyleTierRecord {
  id: string;
  slug: string;
  fighting_style_id: string;
  group_index: number;
  order_index: number;
  title: string;
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
  attribute: string | null;
  cost: number | null;
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
  fightingStyleTiers?: FightingStyleTierRecord[];
  weaponMasteries: WeaponMasteryRecord[];
  skills: SkillRecord[];
}


