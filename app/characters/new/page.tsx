"use client"
import CharacterProvider, { CharacterContext } from '@/app/contexts/characterContext';
import { CatalogProvider } from '@/app/contexts/catalogContext';
import NewCharacterStepper from '@/app/components/NewCharacterStepper/NewCharacterStepper';
import styles from './page.module.css';
import { useSearchParams, useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

// Client-side preload component to load an existing character by id into context
function PreloadCharacter() {
    const params = useSearchParams();
    const loadId = params?.get('loadId');
    const context = useContext(CharacterContext);
    if (!context) {
        throw new Error('CharacterContext must be used within a CharacterProvider');
    }
    const { character, setCharacter } = context;
    useEffect(() => {
        if (!loadId) return;
        let cancelled = false;
        (async () => {
            try {
                const res = await fetch(`/api/characters?id=${encodeURIComponent(loadId)}`);
                if (!res.ok) return;
                const payload = await res.json();
                const record = payload.character;
                if (!record || cancelled) return;
                const selections = record.selections || {};
                const snapshot = record.snapshot || {};
                const char = {
                    userName: record.owner_name || '',
                    name: record.name || '',
                    level: record.level || 1,
                    alignment: record.alignment || '',
                    race: selections.race || '',
                    raceType: selections.raceType || '',
                    category: selections.category || '',
                    secondaryCategory: selections.secondaryCategory ?? null,
                    specialty: selections.specialty || '',
                    attributes: record.attributes || {
                        fuerza: 10,
                        resistencia: 10,
                        agilidad: 10,
                        percepcion: 10,
                        liderazgo: 10,
                        inteligencia: 10,
                        belleza: 10,
                        categoriaSocial: 1
                    },
                    descripcion: record.description || {},
                    countryOfOrigin: selections.countryOfOrigin || '',
                    stats: selections.stats || (snapshot.combat ? snapshot.combat : {}),
                    advantages: selections.advantages || [],
                    disadvantages: selections.disadvantages || [],
                    equipment: selections.equipment || [],
                    mounts: selections.mounts || [],
                    fightingStyle: selections.fightingStyle || null,
                    weaponSpecialization: selections.weaponSpecialization || null,
                    skills: selections.skills || [],
                    skillRanks: selections.skillRanks || {},
                    experience: selections.experience || 0,
                    experiencePenalty: selections.experiencePenalty || 0,
                    step: 1
                };
                setCharacter(char as any);
            } catch (e) {
                // ignore
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [loadId, setCharacter]);
    return null;
}


export default function NewCharacter() {
    return(
        <CatalogProvider>
                <CharacterProvider>
                    <PreloadCharacter />
                    <section className={styles.canvas}>
                        <div className={styles.stack}>
                            <NewCharacterStepper />
                        </div>
                    </section>
                </CharacterProvider>
            </CatalogProvider>
    )
}
