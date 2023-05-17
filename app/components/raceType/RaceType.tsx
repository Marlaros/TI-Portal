
import React, { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import { useRaces } from '@/app/hooks/useRaces';
import { CharacterContext } from '@/app/contexts/characterContext';
import { IRace } from '../raceCard/RaceCard.types';

import { useRaceTypes } from '@/app/hooks/useRaceTypes';
import { IRaceType } from './RaceType.types';

import './RaceType.css';

const RaceType = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {races} : {races: IRace[]} = useRaces();
    const [selectedRace, setSelectedRace] : [IRace, Dispatch<SetStateAction<IRace>>]= useState(undefined as any);
    const {raceTypes} = useRaceTypes(character.race);

    useEffect(() => {
        const race : IRace = (races.filter((race: IRace) => race.name === character.race)[0] as IRace);
        setSelectedRace(race);
    }, [races.length])

    const renderSelectTypeHeader = (raza: string) => {
        if(raza === "Humanos"){
            return "Selecciona el Pais de Origen";
        }
        else{
            return `Selecciona el tipo de ${raza}`
        }
    }

    const renderAlternative = (race: string) => {
        return(
            <>
                {["Duendes","Ogros"].includes(race) ?
                    <div className="alternative-section">
                        <p className="alternative-comment">Los {race} no poseen subtipos inherentes a su raza</p>
                        <button
                            className="alternative-button"
                            onClick={() => setCharacter({...character,raceType: selectedRace.name,step: 3})}>
                            Continuar
                        </button>
                    </div> 
                    : 
                    <div className="alternative-section">
                        No se encontraron tipos para esta raza
                    </div>
                }
            </>
        )
    }

    return(
        <>
            { selectedRace && selectedRace.name  ? 
                (<div className="racetype-container">
                    <div className="race-section">
                        <div className="race-header">
                                {character.race}
                        </div>
                        <div>
                            <Image
                                className="race-image"
                                src={selectedRace.image}
                                alt={"Image for " + character.race}
                                width={450}
                                height={450}
                            />
                        </div>
                        <div>
                            <p className="race-description">
                                {selectedRace.description}
                            </p>
                        </div>
                    </div>
                    <div className="racetype-section">
                        <div className="racetype-header">{renderSelectTypeHeader(selectedRace.name)}</div>
                        <div className="racetype-select-grid">
                            { raceTypes.length > 0 ? 
                                (
                                    <>
                                    {raceTypes.map((raceType: IRaceType) => (
                                        <div className="racetype-item">
                                            <button onClick={() => setCharacter({...character,raceType: raceType.name,step: 3})}>
                                                <p className="racetype-item-title">{raceType.name}</p>
                                                <Image
                                                    className="racetype-item-image"
                                                    src={raceType.image}
                                                    alt={"Image for " + raceType.name}
                                                    width={175}
                                                    height={150}
                                                />
                                                <p className="racetype-item-desc">{raceType.shortDesc}</p>
                                            </button>
                                        </div>
                                    ))}
                                    </>
                                ) : 
                                <>
                                    {renderAlternative(character.race)}
                                </>
                            }
                        </div>
                    </div>
                </div>) : <div>Cargando...</div>
            }
        </>

    )
}

export default RaceType;