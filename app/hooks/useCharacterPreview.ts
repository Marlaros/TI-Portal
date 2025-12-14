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
  inteligencia: attributes.inteligencia ?? 10,
  belleza: attributes.belleza ?? 10,
  categoriaSocial: attributes.categoriaSocial ?? 1
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
  fightingStyleTierIds: character.fightingStylePerks || [],
  weaponSpecializationId: character.weaponSpecialization,
  skillIds: character.skills,
  mountIds: character.mounts,
  specialPerks: character.specialPerks || []
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

    // Level-based modifiers: implement per-level gains and even-level penalties
    const level = character.level ?? 1;
    const intelligence = mapAttributes(character.attributes).inteligencia ?? 10;
    const levelsGained = Math.max(0, level - 1);
    const perLevelSkillPoints = 4 + Math.max(0, intelligence - 12); // 4 + (I-12 when I>=13)
    const totalSkillPointsFromLevel = levelsGained * perLevelSkillPoints;
    const totalAdvPointsFromLevel = levelsGained * 5;
    const totalAttackFromLevel = levelsGained * 1;
    const totalDefenseFromLevel = levelsGained * 1;
    const evenLevelCount = Math.floor(level / 2);
    // For stacking simplicity we keep modifiers as positive additions.
    // The UI will render a '-' for these stats where lower is better.
    const totalInitiativePenalty = evenLevelCount; // displayed as -N in UI
    const totalEnemyDefReduction = evenLevelCount; // displayed as -N in UI

    const levelSource = { id: `level-bonus-${level}`, nombre: `Nivel ${level}` } as const;
    const levelModifiers = [] as any[];
    if (totalSkillPointsFromLevel !== 0) {
      levelModifiers.push({
        id: `level-skillPoints-${level}`,
        source: levelSource,
        target: { kind: 'resource', key: 'skillPoints' },
        operation: { kind: 'add', value: totalSkillPointsFromLevel }
      });
    }
    if (totalAdvPointsFromLevel !== 0) {
      levelModifiers.push({
        id: `level-advPoints-${level}`,
        source: levelSource,
        target: { kind: 'resource', key: 'advantagePoints' },
        operation: { kind: 'add', value: totalAdvPointsFromLevel }
      });
    }
    if (totalAttackFromLevel !== 0) {
      levelModifiers.push({
        id: `level-ataque-${level}`,
        source: levelSource,
        target: { kind: 'combat', key: 'ataque' },
        operation: { kind: 'add', value: totalAttackFromLevel }
      });
    }
    if (totalDefenseFromLevel !== 0) {
      levelModifiers.push({
        id: `level-defensa-${level}`,
        source: levelSource,
        target: { kind: 'combat', key: 'defensa' },
        operation: { kind: 'add', value: totalDefenseFromLevel }
      });
    }
    // even-level penalties (improvements)
    if (totalInitiativePenalty !== 0) {
      levelModifiers.push({
        id: `level-iniciativa-${level}`,
        source: levelSource,
        target: { kind: 'combat', key: 'iniciativa' },
        operation: { kind: 'add', value: totalInitiativePenalty }
      });
    }
    if (totalEnemyDefReduction !== 0) {
      levelModifiers.push({
        id: `level-reduccionDefensa-${level}`,
        source: levelSource,
        target: { kind: 'combat', key: 'reduccionDefensaEnemiga' },
        operation: { kind: 'add', value: totalEnemyDefReduction }
      });
    }

    const allCustomModifiers = [...customModifiers, ...levelModifiers];

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
            mountIds: character.mounts,
            specialPerks: character.specialPerks || []
          },
          customModifiers: allCustomModifiers,
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

