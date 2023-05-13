import React, {Dispatch, SetStateAction, createContext, useState} from 'react'
import { Character } from '../characters/new/character.type';

export const emptyCharacter : Character = {
    name: "",
    race: "",
    raceType: "",
    category: "",
    specialty: "",
    attributes: {
        fuerza: 0,
        resistencia: 0,
        agilidad: 0,
        percepcion: 0,
        liderazgo: 0,
        inteligencia: 0,
        belleza: 0,
        categoriaSocial: 0
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

export const CharacterContext = createContext<{character: Character, setCharacter: Dispatch<SetStateAction<Character>>} | null>(null);

/*
export default function CharacterProvider({children}: {children: React.ReactNode}) {
    const [character, setCharacter] : [Character, Dispatch<SetStateAction<Character>>] = useState(emptyCharacter);

    return (
        <CharacterContext.Provider value={{character,setCharacter}}>
            {children}
        </CharacterContext.Provider>
    )
}*/