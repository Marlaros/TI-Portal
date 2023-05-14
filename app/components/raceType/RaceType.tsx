
import React, { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import { useRaces } from '@/app/hooks/useRaces';
import { CharacterContext } from '@/app/contexts/characterContext';
import { IRace } from '../raceCard/RaceCard.types';

import './RaceType.css';
import { useRaceTypes } from '@/app/hooks/useRaceTypes';

const RaceType = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {races} : {races: IRace[]} = useRaces();
    const [selectedRace, setSelectedRace] : [IRace, Dispatch<SetStateAction<IRace>>]= useState(undefined as any);
    //const {raceTypes} = useRaceTypes(character.race);

    useEffect(() => {
        console.log("Races: ", races);
        const race : IRace = (races.filter((race: IRace) => race.name === character.race)[0] as IRace);
        console.log(race);
        setSelectedRace(race);
    }, [races.length])

    return(
        <>
            { selectedRace && selectedRace.name ? 
                (<div className="racetype-container">
                    <div className="race-section">
                        <div className="race-header">
                                {character.race}
                        </div>
                        <Image
                            className="race-image"
                            src={selectedRace.images[0]}
                            alt={"Image for " + character.race}
                            width={450}
                            height={450}
                        />
                        <p className="race-description">
                            {selectedRace.description}
                        </p>
                    </div>
                    <div className="racetype-section">
                        <h3 className="racetype-header">Selecciona el tipo de {selectedRace.name}</h3>
                        <div className="racetype-select-grid">
                            <div className="racetype-item">
                                <button onClick={() => setCharacter({...character,raceType: 'Almoon',step: 3})}>{character.race} de Almoon</button>
                            </div>
                            <div className="racetype-item">
                                <button>{character.race} de Amara</button>
                            </div>
                            <div className="racetype-item">
                                <button>{character.race} de Northland</button>
                            </div>
                            <div className="racetype-item">
                                <button>{character.race} de Draconia</button>
                            </div>
                        </div>
                    </div>
                </div>) : <div>Cargando...</div>
            }
        </>

    )
}

export default RaceType;