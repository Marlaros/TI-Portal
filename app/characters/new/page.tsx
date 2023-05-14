"use client"
import React from 'react';
import CharacterProvider from '@/app/contexts/characterContext';
import NewCharacterStepper from '@/app/components/NewCharacterStepper/NewCharacterStepper';


export default function NewCharacter() {
    //const [character, setCharacter] : [Character, Dispatch<SetStateAction<Character>>] = useState(emptyCharacter);

    return(
        <CharacterProvider>
            <div style={{maxWidth:'95%', display: 'flex', justifyContent: 'center', overflow: 'hidden'}}>
                <NewCharacterStepper />
            </div>
        </CharacterProvider>
    )
}
