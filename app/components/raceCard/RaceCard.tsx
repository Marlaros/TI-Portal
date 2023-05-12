import React from 'react'
import Image from 'next/image'

import { IRace } from './RaceCard.types'
import './RaceCard.css'

export const RaceCard = ({race}: {race: IRace}) => {
    return(
        <a className="racecard" href="/">
            <h3 className="racecard-title">{race.name}</h3>
            <Image
                className="race-card-image"
                src={race.images[0]}
                alt={"Image for " + race.name}
                width={220}
                height={220}/>
            <p className="racecard-subtitle">{race.shortDesc}</p>
        </a>
    )
}