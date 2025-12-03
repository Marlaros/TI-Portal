'use client'
import { useMemo } from "react";
import { useCatalogs } from "@/app/contexts/catalogContext";

export const useSpecialties = (race: string, category: string) : {specialties: any[]} => {
    const { specialties } = useCatalogs();

    const filtered = useMemo(() => {
        if (!race || !category) return [];
        return specialties
            .filter((specialty) => {
                const matchesCategory = specialty.categoryName === category;
                const matchesRace = specialty.allowedRaces.length === 0
                    ? true
                    : specialty.allowedRaces.some((entry) => entry.toLowerCase().includes(race.toLowerCase()));
                return matchesCategory && matchesRace;
            })
            .map((specialty) => ({
                name: specialty.name,
                shortDesc: specialty.shortDescription ?? '',
                description: specialty.description ?? '',
                image: specialty.imageUrls?.[0] ?? ''
            }))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [specialties, race, category]);

    return { specialties: filtered };
}
