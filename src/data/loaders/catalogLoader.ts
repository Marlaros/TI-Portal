import { z } from 'zod';

import {
  CatalogAdvantage,
  CatalogBundle,
  CatalogCategory,
  CatalogDisadvantage,
  CatalogMount,
  CatalogRace,
  CatalogRaceVariant,
  CatalogRecord,
  CatalogSpecialty,
  CatalogWeapon
} from '@/domain/catalog';
import { ruleModifierSchema } from '@/domain/rules';

const requirementSchema = z.object({
  type: z.enum(['attribute', 'nivel', 'raza', 'categoria', 'ventaja']),
  attribute: z.string().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  ids: z.array(z.string()).optional()
});

const baseSchema = z.object({
  id: z.string(),
  slug: z.string(),
  nombre: z.string(),
  descripcion: z.string(),
  version: z.string(),
  manualPage: z.number().optional(),
  tags: z.array(z.string()).optional(),
  requirements: z.array(requirementSchema).optional(),
  modifiers: z.array(ruleModifierSchema)
});

const raceSchema = baseSchema.extend({
  tipo: z.literal('raza')
});

const raceVariantSchema = baseSchema.extend({
  tipo: z.literal('subraza'),
  raceId: z.string()
});

const categorySchema = baseSchema.extend({
  tipo: z.literal('categoria'),
  foco: z.enum(['principal', 'secundaria'])
});

const specialtySchema = baseSchema.extend({
  tipo: z.literal('especialidad'),
  categoryId: z.string()
});

const advantageSchema = baseSchema.extend({
  tipo: z.literal('ventaja'),
  costoPG: z.number()
});

const disadvantageSchema = baseSchema.extend({
  tipo: z.literal('desventaja'),
  recompensaPG: z.number()
});

const weaponSchema = baseSchema.extend({
  tipo: z.literal('arma'),
  categoriaArma: z.string(),
  estiloCompatible: z.array(z.string())
});

const mountSchema = baseSchema.extend({
  tipo: z.literal('montura'),
  velocidad: z.number(),
  capacidadCarga: z.number()
});

export const catalogRecordSchema = z.discriminatedUnion('tipo', [
  raceSchema,
  raceVariantSchema,
  categorySchema,
  specialtySchema,
  advantageSchema,
  disadvantageSchema,
  weaponSchema,
  mountSchema
]);

export type CatalogRecordInput = z.infer<typeof catalogRecordSchema>;

export const parseCatalogRecords = (data: unknown): CatalogRecord[] => {
  const records = z.array(catalogRecordSchema).parse(data);
  return records as CatalogRecord[];
};

export const bundleCatalog = (records: CatalogRecord[]): CatalogBundle => {
  const bundle: CatalogBundle = {
    races: {},
    raceVariants: {},
    categories: {},
    specialties: {},
    advantages: {},
    disadvantages: {},
    weapons: {},
    mounts: {}
  };

  records.forEach((record) => {
    switch (record.tipo) {
      case 'raza':
        bundle.races[record.id] = record as CatalogRace;
        break;
      case 'subraza':
        bundle.raceVariants[record.id] = record as CatalogRaceVariant;
        break;
      case 'categoria':
        bundle.categories[record.id] = record as CatalogCategory;
        break;
      case 'especialidad':
        bundle.specialties[record.id] = record as CatalogSpecialty;
        break;
      case 'ventaja':
        bundle.advantages[record.id] = record as CatalogAdvantage;
        break;
      case 'desventaja':
        bundle.disadvantages[record.id] = record as CatalogDisadvantage;
        break;
      case 'arma':
        bundle.weapons[record.id] = record as CatalogWeapon;
        break;
      case 'montura':
        bundle.mounts[record.id] = record as CatalogMount;
        break;
      default:
        break;
    }
  });

  return bundle;
};

