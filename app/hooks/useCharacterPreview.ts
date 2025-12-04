'use client'

import { useMemo } from 'react';
import { Character } from '@/app/characters/new/character.type';
import { buildCharacterSnapshot } from '@/domain/rule-engine';
import { EMPTY_CATALOG_BUNDLE } from '@/data/builder/mockCatalog';
import { useCatalogs } from '@/app/contexts/catalogContext';
import {
  BuilderSelections,
  collectBuilderFlags,
  collectBuilderModifiers
} from '@/data/builder/modifiers';
import { Attributes } from '@/domain/state';

interface PreviewResult {
  ready: boolean;
  error?: string;
  snapshot: ReturnType<typeof buildCharacterSnapshot>['snapshot'] | null;
  debugLog: ReturnType<typeof buildCharacterSnapshot>['debugLog'];
}

const mapAttributes = (attributes: Character['attributes']): Attributes => ({
  fuerza: attributes.fuerza ?? 10,
  resistencia: attributes.resistencia ?? 10,
  agilidad: attributes.agilidad ?? 10,
  percepcion: attributes.percepcion ?? 10,
  liderazgo: attributes.liderazgo ?? 10,
  inteligencia: attributes.inteligencia ?? 10
});

const buildSelections = (character: Character): BuilderSelections => ({
  race: character.race,
  raceType: character.raceType,
  category: character.category,
  secondaryCategory: character.secondaryCategory ?? undefined,
  specialty: character.specialty,
  advantageIds: character.advantages,
  disadvantageIds: character.disadvantages,
  equipmentIds: character.equipment,
  fightingStyleId: character.fightingStyle,
  weaponSpecializationId: character.weaponSpecialization,
  skillIds: character.skills,
  mountIds: character.mounts
});

const isReadyForPreview = (character: Character) => Boolean(character.race && character.category);

export const useCharacterPreview = (character: Character): PreviewResult => {
  const { builderCatalogs, status } = useCatalogs();

  return useMemo(() => {
    if (status !== 'ready') {
      return {
        ready: false,
        snapshot: null,
        debugLog: [],
        error: status === 'error' ? 'No se pudo cargar el catálogo.' : undefined
      };
    }

    const ready = isReadyForPreview(character);
    if (!ready) {
      return { ready, snapshot: null, debugLog: [] };
    }

    const selections = buildSelections(character);
    const customModifiers = collectBuilderModifiers(selections, builderCatalogs);
    const contextFlags = collectBuilderFlags(selections, builderCatalogs);

    try {
      const result = buildCharacterSnapshot(
        {
          description: {
            nombre: character.name,
            nivel: character.level,
            categoriaPrincipal: character.category,
            categoriaSecundaria: character.secondaryCategory,
            raza: character.race,
            alineamiento: character.alignment,
            estatusSocial: String(character.attributes.categoriaSocial ?? ''),
            paisOrigen: character.countryOfOrigin || ''
          },
          attributes: mapAttributes(character.attributes),
          selections: {
            raceId: character.race || 'sin-raza',
            raceVariantId: character.raceType || undefined,
            primaryCategoryId: character.category || 'sin-categoria',
            secondaryCategoryId: character.secondaryCategory || null,
            specialtyIds: character.specialty ? [character.specialty] : [],
            advantageIds: character.advantages,
            disadvantageIds: character.disadvantages,
            weaponIds: character.equipment,
            fightingStyleId: character.fightingStyle || undefined,
            mountIds: character.mounts
          },
          customModifiers,
          contextFlags
        },
        { catalogs: EMPTY_CATALOG_BUNDLE }
      );

      return {
        ready,
        snapshot: result.snapshot,
        debugLog: result.debugLog
      };
    } catch (error) {
      console.error('Error al generar la previsualización', error);
      return {
        ready: false,
        snapshot: null,
        debugLog: [],
        error: 'No se pudo calcular la hoja. Revisa los datos seleccionados.'
      };
    }
  }, [character, builderCatalogs, status]);
};

