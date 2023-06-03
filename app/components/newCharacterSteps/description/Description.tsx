import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { CharacterContext } from '@/app/contexts/characterContext';
import './Description.css';
import { useSpecialties } from '@/app/hooks/useSpecialties';

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
                    <div className="specialty-section">
                        <div className="specialty-header">
                            {character.raceType} - {character.specialty}
                        </div>
                        <div>
                            <Image
                                className="specialty-image"
                                src={selectedSpecialty.image}
                                alt={"Image for " + character.specialty}
                                width={450}
                                height={450}
                            />
                        </div>
                        <div>
                            <p className="specialty-description">
                                {selectedSpecialty.shortDesc}
                            </p>
                        </div>
                    </div>
                    <div className="description-section">
                        <div className="description-header">Descripción Física del Personaje</div>
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