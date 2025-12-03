'use client'
import { useMemo } from 'react';
import { useCatalogs } from '@/app/contexts/catalogContext';
import { IRace } from '../components/newCharacterSteps/raceList/RaceList.types';

export const useRaces = (): { races: IRace[]; status: 'loading' | 'ready' | 'error' } => {
    const { races, status } = useCatalogs();

    const mapped = useMemo<IRace[]>(() => {
        return races.map((race) => ({
            name: race.name,
            shortDesc: race.shortDescription ?? '',
            description: race.description ?? '',
            image: race.imageUrl ?? ''
        }));
    }, [races]);

    return { races: mapped, status };
}