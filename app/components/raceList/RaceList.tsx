"use client"
import { useRaces } from "@/app/hooks/useRaces";
import React from "react";
import { RaceCard } from "../raceCard/RaceCard";
import { IRace } from "../raceCard/RaceCard.types";

export const RaceList = () => {
    const {races} = useRaces();

    return(
        <div style={{display:'flex',justifyContent:'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginLeft: '1%', marginTop: '-2%'}}>
            {races.map((race: IRace) => <RaceCard key={race.name} race={race} />)}
        </div>
    )
}