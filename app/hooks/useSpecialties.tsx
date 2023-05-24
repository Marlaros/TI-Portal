import React, { useState, useEffect } from "react";
import { IRace } from "../components/newCharacterSteps/raceList/RaceList.types";

const getSpecialties = async (race: string, category: string) : Promise<IRace[]> => {
    const imageNameMap : {[key: string] : string} = {
        "Humanos": "Humano",
        "Elfos": "Elfo",
        "Enanos": "Enano",
        "Duendes": "Duende",
        "Ogros": "Ogros"
    } 
    const imageFilter : string = imageNameMap[race];
    const res = await fetch('http://127.0.0.1:8090/api/collections/especialidades/records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data : any = await res.json();
    return imageFilter === "Ogros" ? [] : data?.items
        .filter((specialty: any) => specialty.category === category /*&& specialty.parent.includes(race)*/)
        .map((specialty:any) => {
            const specialtyDetails : any = {
                'name': specialty.name,
                'shortDesc': specialty.short_desc,
                'description': specialty.details,
                'image': getSpecialtyImage(specialty.id,specialty.images.filter((img: string) => img.toLowerCase().includes(imageFilter.toLowerCase()))[0])
            }
            return specialtyDetails
        })
}

const getSpecialtyImage = (recordId: string, fileName: string) : string => {
    return `http://127.0.0.1:8090/api/files/especialidades/${recordId}/${fileName}`
}

export const useSpecialties = (race: string, category: string) : {specialties: any[]} => {
    const [specialties, setSpecialties] = useState([]);
    useEffect(() => {
        getSpecialties(race, category).then((specialties: any) => {
            setSpecialties(specialties);
        }).catch((err: any) => {
            console.log(err);
            setSpecialties([]);
        })
    }, [])
    return { specialties : (specialties as any[])};
}