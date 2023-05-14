import React, { useState, useEffect } from "react";

const getRaceTypes = async () : Promise<any[]> => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/tiporazas/records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data : any = await res.json();
    console.log(data.items);
    return data.items.map((tipo:any) => {
        const tipoRaza = {
            'name': tipo.name,
            'parent': tipo.parent,
            'shortDesc': tipo.short_desc,
            'description': tipo.description,
            'images': tipo.images
        }
        return tipoRaza
    });
}

export const useRaceTypes = (selectedRaceName : string)  => {
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