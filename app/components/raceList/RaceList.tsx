"use client"
import { useRaces } from "@/app/hooks/useRaces";
import React from "react";
import { RaceCard } from "../raceCard/RaceCard";
import { IRace } from "../raceCard/RaceCard.types";

export const RaceList = () => {
    const {races} = useRaces();

    return(
        <div style={{display:'flex',justifyContent:'center', alignItems: 'center', height: '25%', width: '90%'}}>
            {races.map((race: IRace) => <RaceCard key={race.name} race={race} />)}
        </div>
    )
}