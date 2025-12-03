'use client'
import { useMemo } from "react";
import { useCatalogs } from "@/app/contexts/catalogContext";

const ogreOnly = "Los ogros unicamente pueden ser Guerreros";

export const usePrimaryCategories = (selectedRaceName : string)  => {
    const { categories } = useCatalogs();

    const primaryCategories = useMemo(() => {
        if (!selectedRaceName) return [];
        return categories.map((category) => ({
            name: category.name,
            shortDesc: selectedRaceName === 'Ogros' ? ogreOnly : category.shortDescription ?? '',
            description: category.description ?? '',
            image: category.imageUrls?.[0] ?? ''
        }));
    }, [categories, selectedRaceName]);

    return { primaryCategories };
}