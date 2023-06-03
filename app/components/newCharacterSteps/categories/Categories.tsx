import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useRaceTypes } from '@/app/hooks/useRaceTypes';
import { usePrimaryCategories } from '@/app/hooks/useCategories';
import './Categories.css';

// When there's no race types 

import { useRaces } from '@/app/hooks/useRaces';
import { IRace } from '../raceList/RaceList.types';
import ElementCard from '../../ElementCard/ElementCard';

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

    const setCharacterCategory = (value: string) => {
        setCharacter((prevState) => ({...prevState, category: value, step: 4}));
    }

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
                            <p className="racetype-description">
                                {selectedRaceType.shortDesc}
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
                                    <ElementCard
                                        key={primaryCategory.name}
                                        name={primaryCategory.name}
                                        description={primaryCategory.shortDesc}
                                        image={primaryCategory.image}
                                        handleClick={(value:string) => setCharacterCategory(value)}
                                    />
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