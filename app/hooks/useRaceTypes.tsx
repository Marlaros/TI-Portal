"use client"
import React, { useState, useEffect } from "react";
import { IRaceType } from "../components/newCharacterSteps/raceType/RaceType.types";

const getRaceTypes = async () : Promise<IRaceType[]> => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/tiporazas/records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data : any = await res.json();
    return data.items.map((tipo:any) => {
        const tipoRaza = {
            'name': tipo.name,
            'parent': tipo.parent,
            'shortDesc': tipo.short_desc,
            'description': tipo.details,
            'image': getRaceTypeImage(tipo.id, tipo.image)
        }
        return tipoRaza
    });
}

const getRaceTypeImage = (recordId: string, fileName: string) : string => {
    return `http://127.0.0.1:8090/api/files/tiporazas/${recordId}/${fileName}`
}

export const useRaceTypes = (selectedRaceName : string) : {raceTypes: IRaceType[]}=> {
    const [raceTypes, setRaceTypes] = useState([]);
    useEffect(() => {
        getRaceTypes().then((raceTypes: any) => {
            const availableRaceTypes = raceTypes.filter((tipoRaza: any) => tipoRaza.parent === selectedRaceName);
            setRaceTypes(availableRaceTypes);
        }).catch((err: any) => {
            console.log(err);
            setRaceTypes([]);
        })
    }, [])
    return { raceTypes };
}