import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useRaceTypes } from '@/app/hooks/useRaceTypes';
import { usePrimaryCategories } from '@/app/hooks/useCategories';
import './Categories.css';
import { useRaces } from '@/app/hooks/useRaces';
import { IRace } from '../raceCard/RaceCard.types';

const Categories = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const [selectedRaceType, setSelectedRaceType] = useState(undefined as any);
    const {raceTypes} = useRaceTypes(character.race);
    const {races} = useRaces(); 
    const {primaryCategories} = usePrimaryCategories(character.race);

    useEffect(() => {
        if(character.race === character.raceType){
            const race = races.filter((race: IRace) => race.name === character.race)[0];
            setSelectedRaceType(race);
        }
        else{
            const raceType = (raceTypes.filter((raceType: any) => raceType.name === character.raceType)[0]);
            setSelectedRaceType(raceType);
        }
    }, [races.length,raceTypes.length])

    return(
        <>
            { selectedRaceType && selectedRaceType.name  ? 
                (<div className="categories-container">
                    <div className="racetype-section">
                        <div className="racetype-header">
                            {character.raceType}
                        </div>
                        <div>
                            <Image
                                className="racetype-image"
                                src={selectedRaceType.image}
                                alt={"Image for " + character.raceType}
                                width={450}
                                height={450}
                            />
                        </div>
                        <div>
                            <p className="race-description">
                                {selectedRaceType.description}
                            </p>
                        </div>
                    </div>
                    <div className="categories-section">
                        <div className="categories-header">Seleccionar Categoria Principal</div>
                        <div className="categories-select-grid">
                            { primaryCategories.length > 0 ? 
                            (
                                <>
                                {primaryCategories.map((primaryCategory: any) => (
                                    <div className="categories-item">
                                        <button onClick={() => setCharacter({...character,category: primaryCategory.name,step: 4})}>
                                            <p className="categories-item-title">{primaryCategory.name}</p>
                                            <Image
                                                className="categories-item-image"
                                                src={primaryCategory.image}
                                                alt={"Image for " + primaryCategory.name}
                                                width={175}
                                                height={150}
                                            />
                                            <p className="categories-item-desc">{primaryCategory.shortDesc}</p>
                                        </button>
                                    </div>
                                ))}
                                </>
                            ) : <div>No se encontraron las categorias</div>}
                        </div>
                    </div>
                </div>) : <div>Cargando...</div>
            }
        </>
    )
}

export default Categories;