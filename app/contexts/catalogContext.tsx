'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type {
  AdvantageRecord,
  CatalogBootstrapPayload,
  CategoryRecord,
  DisadvantageRecord,
  EquipmentRecord,
  FightingStyleRecord,
  RaceRecord,
  RaceVariantRecord,
  SkillRecord,
  SpecialtyRecord,
  WeaponMasteryRecord
} from '@/types/catalog';
import type { CatalogCollections } from '@/data/builder/modifiers';
import type {
  BuilderOption,
  EquipmentOption,
  FightingStyleOption,
  WeaponMasteryOption
} from '@/data/builder/types';

interface CatalogContextValue {
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
  builderCatalogs: CatalogCollections;
  status: 'loading' | 'ready' | 'error';
  error?: string;
}

const defaultPayload: CatalogBootstrapPayload = {
  races: [],
  raceVariants: [],
  categories: [],
  specialties: [],
  advantages: [],
  disadvantages: [],
  equipment: [],
  fightingStyles: [],
  weaponMasteries: [],
  skills: []
};

const defaultBuilderCatalogs: CatalogCollections = {
  advantages: [],
  disadvantages: [],
  equipment: [],
  fightingStyles: [],
  weaponMasteries: [],
  skills: []
};

const CatalogContext = createContext<CatalogContextValue>({
  ...defaultPayload,
  builderCatalogs: defaultBuilderCatalogs,
  status: 'loading'
});

const mapBuilderOption = (entry: { slug: string; name: string; description: string | null; modifiers: any[] }): BuilderOption => ({
  id: entry.slug,
  name: entry.name,
  description: entry.description ?? '',
  modifiers: entry.modifiers ?? []
});

const toBuilderCatalogs = (payload: CatalogBootstrapPayload): CatalogCollections => ({
  advantages: payload.advantages.map(mapBuilderOption),
  disadvantages: payload.disadvantages.map((entry) => ({
    ...mapBuilderOption(entry),
    tags: [`recompensa:${entry.reward}`]
  })),
  equipment: payload.equipment.map((entry) => ({
    ...mapBuilderOption(entry),
    slot: (entry.slot || 'arma') as EquipmentOption['slot']
  })),
  fightingStyles: payload.fightingStyles.map((entry) => ({
    id: entry.slug,
    key: entry.styleKey,
    name: entry.name,
    description: entry.description ?? '',
    modifiers: entry.modifiers ?? []
  })),
  weaponMasteries: payload.weaponMasteries.map((entry) => ({
    ...mapBuilderOption(entry),
    weaponTag: entry.weaponTag ?? ''
  })),
  skills: payload.skills.map(mapBuilderOption)
});

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<CatalogBootstrapPayload>(defaultPayload);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [error, setError] = useState<string>();

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch('/api/catalogs/bootstrap');
        if (!res.ok) {
          throw new Error(await res.text());
        }
        const json = (await res.json()) as CatalogBootstrapPayload;
        if (!cancelled) {
          setData(json);
          setStatus('ready');
        }
      } catch (err) {
        console.error('Failed to load catalogs', err);
        if (!cancelled) {
          setStatus('error');
          setError('No se pudieron cargar los catálogos.');
        }
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const builderCatalogs = useMemo(() => toBuilderCatalogs(data), [data]);

  const value = useMemo(
    () => ({
      ...data,
      builderCatalogs,
      status,
      error
    }),
    [data, builderCatalogs, status, error]
  );

  return <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>;
}

export const useCatalogs = () => useContext(CatalogContext);


