import { FightingStyleKey, RuleContextFlag } from './constants';
import { createEmptyAttributes, createEmptyCombatStats, createEmptyResources } from './state';
import type { Attributes, CombatStats, Resources } from './state';
import type { RuleModifier } from './rules';

export interface CharacterDescription {
  nombre: string;
  nivel: number;
  categoriaPrincipal: string;
  categoriaSecundaria?: string | null;
  raza: string;
  alineamiento: string;
  estatusSocial: string;
  paisOrigen: string;
}

export interface InventoryItem {
  id: string;
  nombre: string;
  cantidad: number;
  categoria: string;
  notas?: string;
}

export interface CharacterMount {
  id: string;
  nombre: string;
  tipo: string;
  velocidadBase: number;
  capacidadCarga: number;
}

export interface SnapshotMetadata {
  version: string;
  manualReference?: string;
  createdAt: string;
  updatedAt: string;
  notes?: string;
  appliedSources: string[];
}

export interface CharacterSnapshot {
  id?: string;
  description: CharacterDescription;
  attributes: Attributes;
  resources: Resources;
  combat: CombatStats;
  fightingStyle?: FightingStyleKey | null;
  inventory: InventoryItem[];
  advantages: string[];
  disadvantages: string[];
  mounts: CharacterMount[];
  metadata: SnapshotMetadata;
}

export interface CharacterSelection {
  raceId: string;
  raceVariantId?: string;
  primaryCategoryId: string;
  secondaryCategoryId?: string | null;
  specialtyIds: string[];
  advantageIds: string[];
  disadvantageIds: string[];
  weaponIds: string[];
  fightingStyleId?: string | null;
  mountIds: string[];
}

export interface CharacterSeed {
  description: CharacterDescription;
  attributes: Attributes;
  selections: CharacterSelection;
  customModifiers?: RuleModifier[];
  contextFlags?: RuleContextFlag[];
}

export interface RuleEvaluationContext {
  selections: CharacterSelection;
  attributes: Attributes;
  flags: Set<RuleContextFlag>;
  level: number;
  weaponTags: string[];
}

export interface RuleDebugEntry {
  modifierId: string;
  target: string;
  delta: number;
  reason?: string;
}

export interface RuleApplicationResult {
  snapshot: CharacterSnapshot;
  debugLog: RuleDebugEntry[];
}

export const DEFAULT_DESCRIPTION = (): CharacterDescription => ({
  nombre: '',
  nivel: 1,
  categoriaPrincipal: '',
  categoriaSecundaria: null,
  raza: '',
  alineamiento: '',
  estatusSocial: '',
  paisOrigen: ''
});

export const EMPTY_SNAPSHOT = (): CharacterSnapshot => ({
  description: DEFAULT_DESCRIPTION(),
  attributes: createEmptyAttributes(),
  resources: createEmptyResources(),
  combat: createEmptyCombatStats(),
  fightingStyle: null,
  inventory: [],
  advantages: [],
  disadvantages: [],
  mounts: [],
  metadata: {
    version: '0.0.0',
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
    appliedSources: []
  }
});

