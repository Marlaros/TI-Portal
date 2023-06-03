import React, { useContext, useEffect, useState } from 'react';

import BigCard from '../../BigCard/BigCard';

import { CharacterContext } from '@/app/contexts/characterContext';

import { useSpecialties } from '@/app/hooks/useSpecialties';

import './Description.css';

const Description = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const [selectedSpecialty, setSelectedSpecialty] = useState(undefined as any);
    const {specialties} = useSpecialties(character.race, character.category);

    useEffect(() => {
        const specialty : any = specialties.filter((spec: any) => spec.name === character.specialty)[0];
        setSelectedSpecialty(specialty);
    }, [specialties.length])

    const updateCharacterDescription = (descriptionKey: string, value: string) => {
        setCharacter((prevState: any) => ({...prevState, [descriptionKey]: value}))
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
                        <div className="description-header">Descripción del Personaje</div>
                        <div className="description-select-grid">
                            <>{'Acá van los Inputs de descripcion'}</>
                        </div>
                    </div>
                </div>) : <div>Cargando...</div>
            }
        </>
    )
}

export default Description;