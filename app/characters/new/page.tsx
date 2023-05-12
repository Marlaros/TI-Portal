import React from 'react';
import { useRouter } from "next/router"
import { RaceList } from '@/app/components/raceList/RaceList';

export default function NewCharacter() {
    //const router = useRouter();

    return(
        <div style={{maxWidth:'95%', display: 'flex', justifyContent: 'center', overflow: 'hidden'}}>
            <RaceList />
        </div>
    )
}