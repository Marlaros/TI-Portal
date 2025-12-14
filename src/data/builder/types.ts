import { RuleModifier } from '@/domain/rules';

export interface BuilderOption {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  modifiers?: RuleModifier[];
}

export interface EquipmentOption extends BuilderOption {
  slot: 'arma' | 'armadura' | 'kit';
  price?: { currency: 'mc' | 'mp' | 'mo'; amount: number } | null;
}

export interface FightingStyleOption {
  id: string;
  key: string;
  name: string;
  description: string;
  modifiers?: RuleModifier[];
}

export interface WeaponMasteryOption extends BuilderOption {
  weaponTag?: string;
}

export interface LineageRuleSet {
  race?: Record<string, RuleModifier[]>;
  raceType?: Record<string, RuleModifier[]>;
  category?: Record<string, RuleModifier[]>;
  specialty?: Record<string, RuleModifier[]>;
}

