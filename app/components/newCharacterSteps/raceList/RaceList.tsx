"use client"
import React, { useContext } from "react";
import FloatingCard from "../../FloatingCard/FloatingCard";
import { useRaces } from "@/app/hooks/useRaces";
import { IRace } from "./RaceList.types";
import { CharacterContext } from "@/app/contexts/characterContext";

const RaceList = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {races} = useRaces();

    const setCharacterRace = (value: string) => {
        setCharacter({...character, race: value, step: 2})
    }

    return(
        <div style={{display:'flex',justifyContent:'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginLeft: '1%', marginTop: '-2%'}}>
            {races.map((race: IRace) => 
                <FloatingCard 
                    key={race.name}
                    name={race.name}
                    description={race.shortDesc}
                    image={race.image}
                    handleClick={(value: string) => setCharacterRace(value)}
                />)
            }
        </div>
    )
}

export default RaceList;