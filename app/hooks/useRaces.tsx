import React, { useState, useEffect } from "react";
import { IRace } from "../components/raceCard/RaceCard.types";

const getRaces = async () : Promise<IRace[]> => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/razas/records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data : any = await res.json();
    console.log(data.items);
    return data.items.map((race:any) => {
        const raceDetails : IRace = {
            'name': race.name,
            'shortDesc': race.short_desc,
            'description': race.description,
            'images': race.images
        }
        return raceDetails
    })
}

export const useRaces = () => {
    const [races, setRaces] = useState([]);
    useEffect(() => {
        getRaces().then((races: any) => {
            setRaces(races);
        }).catch((err: any) => {
            console.log(err);
            setRaces([]);
        })
    }, [])
    return {races};
}