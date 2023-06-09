import React, { useState, useEffect } from "react";
import { IRace } from "../components/newCharacterSteps/raceList/RaceList.types";

const getRaces = async () : Promise<IRace[]> => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/razas/records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data : any = await res.json();
    return data.items.map((race:any) => {
        const raceDetails : IRace = {
            'name': race.name,
            'shortDesc': race.short_desc,
            'description': race.details,
            'image': getRaceImage(race.id,race.image)
        }
        return raceDetails
    })
}

const getRaceImage = (recordId: string, fileName: string) : string => {
    return `http://127.0.0.1:8090/api/files/razas/${recordId}/${fileName}`
}

export const useRaces = () : {races: IRace[]} => {
    const [races, setRaces] = useState([]);
    useEffect(() => {
        getRaces().then((races: any) => {
            setRaces(races);
        }).catch((err: any) => {
            console.log(err);
            setRaces([]);
        })
    }, [])
    return { races : (races as IRace[])};
}