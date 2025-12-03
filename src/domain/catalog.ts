import type { FightingStyleKey } from './constants';
import type { RuleModifier } from './rules';

export interface CatalogRequirement {
  type: 'attribute' | 'nivel' | 'raza' | 'categoria' | 'ventaja';
  attribute?: string;
  min?: number;
  max?: number;
  ids?: string[];
}

export interface CatalogBase {
  id: string;
  slug: string;
  nombre: string;
  descripcion: string;
  version: string;
  manualPage?: number;
  tags?: string[];
  requirements?: CatalogRequirement[];
  modifiers: RuleModifier[];
}

export interface CatalogRace extends CatalogBase {
  tipo: 'raza';
}

export interface CatalogRaceVariant extends CatalogBase {
  tipo: 'subraza';
  raceId: string;
}

export interface CatalogCategory extends CatalogBase {
  tipo: 'categoria';
  foco: 'principal' | 'secundaria';
}

export interface CatalogSpecialty extends CatalogBase {
  tipo: 'especialidad';
  categoryId: string;
}

export interface CatalogAdvantage extends CatalogBase {
  tipo: 'ventaja';
  costoPG: number;
}

export interface CatalogDisadvantage extends CatalogBase {
  tipo: 'desventaja';
  recompensaPG: number;
}

export interface CatalogWeapon extends CatalogBase {
  tipo: 'arma';
  categoriaArma: string;
  estiloCompatible: FightingStyleKey[];
}

export interface CatalogMount extends CatalogBase {
  tipo: 'montura';
  velocidad: number;
  capacidadCarga: number;
}

export type CatalogRecord =
  | CatalogRace
  | CatalogRaceVariant
  | CatalogCategory
  | CatalogSpecialty
  | CatalogAdvantage
  | CatalogDisadvantage
  | CatalogWeapon
  | CatalogMount;

export interface CatalogBundle {
  races: Record<string, CatalogRace>;
  raceVariants: Record<string, CatalogRaceVariant>;
  categories: Record<string, CatalogCategory>;
  specialties: Record<string, CatalogSpecialty>;
  advantages: Record<string, CatalogAdvantage>;
  disadvantages: Record<string, CatalogDisadvantage>;
  weapons: Record<string, CatalogWeapon>;
  mounts: Record<string, CatalogMount>;
}

