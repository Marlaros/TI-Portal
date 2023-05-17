"use client"
import React, { useState, useEffect } from "react";

const ogerOnly : string = "Los ogros unicamente pueden ser Guerreros";

const getPrimaryCategories = async (raceName: string) : Promise<any[]> => {
    const imageNameMap : {[key: string] : string} = {
        "Humanos": "Humano",
        "Elfos": "Elfo",
        "Enanos": "Enano",
        "Duendes": "Duendes",
        "Ogros": "Ogros"
    } 
    const imageFilter : string = imageNameMap[raceName];
    const res = await fetch('http://127.0.0.1:8090/api/collections/categorias/records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data : any = await res.json();
    const parsedData : any = data.items.map((cat:any) => {
        const categoria = {
            'name': cat.name,
            'shortDesc': raceName !== "Ogros" ? cat.short_desc : ogerOnly,
            'description': cat.details,
            'image': getPrimaryCategoryImage(cat.id, cat.images.filter((img: string) => img.toLowerCase().includes(imageFilter.toLowerCase()))[0])
        }
        return categoria
    });
    return raceName !== "Ogros" ? parsedData : [parsedData[0]];
}

const getPrimaryCategoryImage = (recordId: string, fileName: string) : string => {
    return `http://127.0.0.1:8090/api/files/categorias/${recordId}/${fileName}`
}

export const usePrimaryCategories = (selectedRaceName : string)  => {
    const [primaryCategories, setPrimaryCategories] = useState([]);
    useEffect(() => {
        getPrimaryCategories(selectedRaceName).then((primaryCategories: any) => {
            setPrimaryCategories(primaryCategories);
        }).catch((err: any) => {
            console.log(err);
            setPrimaryCategories([]);
        })
    }, [])
    return { primaryCategories };
}