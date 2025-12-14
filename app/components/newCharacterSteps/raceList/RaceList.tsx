"use client"
import React, { useContext } from "react";

import FloatingCard from "../../FloatingCard/FloatingCard";
import styles from './RaceList.module.css';
import { useState } from 'react';
import { useCatalogs } from '@/app/contexts/catalogContext';
import ModifiersList from '../../Modifiers/ModifiersList';

import { CharacterContext } from "@/app/contexts/characterContext";

import { useRaces } from "@/app/hooks/useRaces";

import { IRace } from "./RaceList.types";

const RaceList = () => {
    const {setCharacter} = useContext(CharacterContext);
    const {races} = useRaces();
    const { races: catalogRaces } = useCatalogs();
    const [hovered, setHovered] = useState<string | null>(null);

    const setCharacterRace = (value: string) => {
        setCharacter((prevState)=> ({...prevState, race: value, step: 2}))
    }

    return(
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {races.map((race: IRace) => 
                    <div key={race.name} onMouseEnter={() => setHovered(race.name)} onMouseLeave={() => setHovered(null)}>
                        <FloatingCard 
                            name={race.name}
                            description={race.shortDesc}
                            image={race.image}
                            handleClick={(value: string) => setCharacterRace(value)}
                            modifiers={(catalogRaces.find((r:any) => r.name === race.name) as any)?.modifiers ?? []}
                        />
                    </div>)
                }
            </div>
            <aside className={styles.sidebar}>
                <h4>Modificadores</h4>
                {hovered ? (
                    <ModifiersList modifiers={(catalogRaces.find(r => r.name === hovered) as any)?.modifiers ?? []} />
                ) : (
                    <div className={styles.empty}>Move el mouse por encima de una raza para ver los modificadores</div>
                )}
            </aside>
        </div>
    )
}

export default RaceList;