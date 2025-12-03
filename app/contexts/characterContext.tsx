import React, {Dispatch, SetStateAction, createContext, useState} from 'react'
import { Character } from '../characters/new/character.type';

export const emptyCharacter : Character = {
    name: "",
    level: 1,
    alignment: "",
    race: "",
    raceType: "",
    category: "",
    specialty: "",
    advantages: [],
    disadvantages: [],
    equipment: [],
    fightingStyle: null,
    weaponSpecialization: null,
    skills: [],
    attributes: {
        fuerza: 10,
        resistencia: 10,
        agilidad: 10,
        percepcion: 10,
        liderazgo: 10,
        inteligencia: 10,
        belleza: 10,
        categoriaSocial: 1
    },
    descripcion: {
        altura: 0,
        peso: 0,
        edad: 0,
        rasgos: "",
        cabello: "",
        ojos: "",
        piel: "",
        genero: "",
    },
    stats: {
        ataque: 0,
        modAlDaño: 0,
        defensa: 0,
        defEspontanea: 0,
        penDef: 0,
        iniciativa: 0,
        AR: 0,
        PG: 0,
        PC: 0,
        PM: 0,
        concentracion: 0,
        detectarMagia: 0,
        habilidades: {
            deP: {},
            deL: {}
        }, 
    },
    step: 1,
}

export const CharacterContext = createContext<{character: Character, setCharacter: Dispatch<SetStateAction<Character>>}>(undefined as any);


export default function CharacterProvider({children}: {children: React.ReactNode}) {
    const [character, setCharacter] : [Character, Dispatch<SetStateAction<Character>>] = useState(emptyCharacter);

    return (
        <CharacterContext.Provider value={{character,setCharacter}}>
            {children}
        </CharacterContext.Provider>
    )
}