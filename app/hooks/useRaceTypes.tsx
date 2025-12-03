'use client'
import { useMemo } from 'react';
import { useCatalogs } from '@/app/contexts/catalogContext';
import { IRaceType } from "../components/newCharacterSteps/raceType/RaceType.types";

export const useRaceTypes = (selectedRaceName : string) : {raceTypes: IRaceType[]}=> {
    const { raceVariants } = useCatalogs();

    const raceTypes = useMemo<IRaceType[]>(() => {
        if (!selectedRaceName) return [];
        return raceVariants
          .filter((variant) => variant.raceName === selectedRaceName)
          .map((variant) => ({
            name: variant.name,
            parent: variant.raceName,
            shortDesc: variant.shortDescription ?? '',
            description: variant.description ?? '',
            image: variant.imageUrl ?? ''
          }));
    }, [raceVariants, selectedRaceName]);

    return { raceTypes };
}