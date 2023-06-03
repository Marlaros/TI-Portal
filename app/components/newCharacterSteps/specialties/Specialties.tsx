"use client"
import React, { useContext } from "react";

import FloatingCard from "../../FloatingCard/FloatingCard";

import { CharacterContext } from "@/app/contexts/characterContext";

import { useSpecialties } from "@/app/hooks/useSpecialties";

import './Specialties.css'

const Specialties = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {specialties} = useSpecialties(character.race, character.category);

    const setCharacterSpecialty = (value: string) => {
        setCharacter((prevState) => ({...prevState, specialty: value, step: 5}))
    }

    return(
        <div className="specialties-container">
            <div className="specialties-header">
                <p>
                    Especialidades de los {character.race} {character.category}s
                </p>
            </div>
            <div className="specialties-list">
                {specialties.length > 0 ? 
                    <>
                        {specialties.map((specialty: any) => (
                            <FloatingCard 
                                key={specialty.name}
                                name={specialty.name}
                                description={specialty.shortDesc}
                                image={specialty.image}
                                handleClick={(value: string) => setCharacterSpecialty(value)}
                            />
                        ))
                        }
                    </> : 
                    <div className="specialties-empty-list">
                        <p>
                            {character.race === "Ogros" ?
                            "Los ogros no poseen especialidades. Solo son Guerreros :)" :
                            "No se han encontrado especialidades para esta categoria."}
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Specialties;