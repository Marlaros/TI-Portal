
import React, { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import { useRaces } from '@/app/hooks/useRaces';
import { CharacterContext } from '@/app/contexts/characterContext';
import { IRace } from '../raceList/RaceList.types';

import { useRaceTypes } from '@/app/hooks/useRaceTypes';
import { IRaceType } from './RaceType.types';

import './RaceType.css';
import ElementCard from '../../ElementCard/ElementCard';

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

    const setCharacterRaceType = (value: string) => {
        setCharacter((prevState) => ({...prevState, raceType: value, step: 3}))
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
                                        <ElementCard
                                            key={raceType.name}
                                            name={raceType.name}
                                            description={raceType.shortDesc}
                                            image={raceType.image}
                                            handleClick={(value:string) => setCharacterRaceType(value)}
                                        />
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