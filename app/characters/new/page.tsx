"use client"
import React, { Dispatch, SetStateAction, useState, createContext, useContext } from 'react';
import { useRouter } from "next/router"
import { RaceList } from '@/app/components/raceList/RaceList';
import { CharacterContext, emptyCharacter } from '@/app/contexts/characterContext';

import { Character } from './character.type';

export default function NewCharacter() {
    const [character, setCharacter] : [Character, Dispatch<SetStateAction<Character>>] = useState(emptyCharacter);

    const renderStep = () => {
        if(character){
            switch(character.step){
                case 1:
                    return <RaceList />;
                case 2:
                    return <div>This is step 2: Race: {character.race}</div>;
                default:
                    return <div>This is the default step</div>    
            }
        }
    }
    //const router = useRouter();

    return(
        <CharacterContext.Provider value={{character,setCharacter}}>
            <div style={{maxWidth:'95%', display: 'flex', justifyContent: 'center', overflow: 'hidden'}}>
                {renderStep()}
            </div>
        </CharacterContext.Provider>
    )
}
