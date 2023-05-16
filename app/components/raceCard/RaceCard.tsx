import React, { useContext } from 'react'
import Image from 'next/image'
import { CharacterContext } from '@/app/contexts/characterContext'
import { IRace } from './RaceCard.types'
import './RaceCard.css'

export const RaceCard = ({race}: {race: IRace}) => {
    const {character, setCharacter} = useContext(CharacterContext);

    return(
        <>
            {!!character && !!setCharacter ? 
                (<a className="racecard" onClick={() => setCharacter({...character,race: race.name,step: 2})}>
                    <h3 className="racecard-title">{race.name}</h3>
                    <Image
                        className="race-card-image"
                        src={race.image}
                        alt={"Image for " + race.name}
                        width={220}
                        height={220}/>
                    <p className="racecard-subtitle">{race.shortDesc}</p>
                </a>) : 
                <></>
            }
    </>
    )
}