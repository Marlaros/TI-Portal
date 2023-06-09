import React, { useContext, useEffect, useState } from 'react';

import BigCard from '../../BigCard/BigCard';

import { CharacterContext } from '@/app/contexts/characterContext';

import { useSpecialties } from '@/app/hooks/useSpecialties';

import './Description.css';

const Description = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const [selectedSpecialty, setSelectedSpecialty] = useState(undefined as any);
    const {specialties} = useSpecialties(character.race, character.category);
    const mainAttributes = [["Nombre","name"],["Alineación","alignment"],["Nivel","level"]];
    
    const [isFocused, setIsFocused] = useState("");

    useEffect(() => {
        const specialty : any = specialties.filter((spec: any) => spec.name === character.specialty)[0];
        setSelectedSpecialty(specialty);
    }, [specialties.length])

    const updateCharacterMains = (descriptionKey: string, value: string) => {
        setCharacter((prevState: any) => ({...prevState, [descriptionKey]: value}))
    }
    
    const updateCharacterDescription = (descriptionKey: string, value: string) => {
        let { descripcion } = {...character};
        (descripcion as any)[descriptionKey] = value;
        setCharacter((prevState: any) => ({...prevState, descripcion}))
    }

    return(
        <>
            { selectedSpecialty && selectedSpecialty.name  ? 
                (<div className="description-container">
                    <BigCard
                        name={`${character.raceType} - ${selectedSpecialty.name}`}
                        description={selectedSpecialty.shortDesc}
                        image={selectedSpecialty.image}
                    />
                    <div className="description-section">
                        <div className="description-header">
                            Descripción del Personaje:
                        </div>
                        <div className="description-grid">
                            {mainAttributes.map((inputPair: any) => (
                                <div className="description-input">
                                    <div className="description-input-label">
                                        {inputPair[0]}:
                                    </div>
                                    <div className="description-input-value" 
                                    style={{transform: isFocused === inputPair[0] ? 'scale(1.02)': ''}}>
                                        <input
                                            className="description-input-element"
                                            key={inputPair[0]}
                                            type="text"
                                            value={(character as any)[inputPair[1]]}
                                            onChange={(e) => updateCharacterMains(inputPair[1],e.target.value)}
                                            onFocus={() => setIsFocused(inputPair[0])}
                                        />
                                    </div>
                                </div>
                            ))}
                            {Object.keys(character.descripcion).map((descriptionKey: any) => (
                                <div className="description-input">
                                    <div className="description-input-label">
                                        {descriptionKey[0].toUpperCase() + descriptionKey.slice(1)}:
                                    </div>
                                    <div className="description-input-value"
                                    style={{transform: isFocused === descriptionKey ? 'scale(1.02)': ''}}>
                                        <input
                                            className="description-input-element"
                                            key={descriptionKey}
                                            type="text"
                                            value={(character.descripcion as any)[descriptionKey]}
                                            onChange={(e) => updateCharacterDescription(descriptionKey,e.target.value)}
                                            onFocus={() => setIsFocused(descriptionKey)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="description-btn-container">
                            <button
                                className="accept-button"
                                style={ isFocused === "Aceptar" ? {transform: 'scale(1.05', backgroundColor: 'rgba(231, 193, 119, 0.75)',color: 'rgba(255, 255, 255, 0.65)'} : {}}
                                onClick={() => setCharacter({...character,step: 6})}
                                onFocus={() => setIsFocused("Aceptar")}
                                >
                                    Aceptar
                            </button>
                        </div>
                    </div>
                </div>) : <div>Cargando...</div>
            }
        </>
    )
}

export default Description;