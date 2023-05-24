"use client"
import React from 'react';

export default function UserCharacters({params}: {params: {userId: string}}) {
    const {userId} = params;

    return(
        <>
            <header style={{display: 'grid', placeItems: 'center', height: '10%', marginTop: '1%'}}>
                <h2 style={{marginTop: '2%', transform: 'scale(1.05)', fontWeight: 'bold'}}>Personajes de {userId}</h2>
            </header>
            <div style={{marginTop: '3%', minHeight: '50vh', display: 'flex', justifyContent: 'center', fontSize: '16px', fontWeight: '600'}}>
                No se encontraron personajes para {userId}
            </div>
        </>
    )
}