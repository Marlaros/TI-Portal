import { CharacterContext } from '@/app/contexts/characterContext';
import React, { useContext } from 'react'

import { RaceList } from '@/app/components/raceList/RaceList';
import RaceType from '../raceType/RaceType';

const NewCharacterStepper = () => {

    const {character} = useContext(CharacterContext);

    const renderStep = () => {
        if(character){
            switch(character.step){
                case 1:
                    return <RaceList />;
                case 2:
                    return <RaceType />
                case 3:
                    return <div>This is step 3: Race: {character.race}</div>;
                default:
                    return <div>This is the default step</div>    
            }
        }
    }

    const renderStepName = () => {
        switch(character.step){
            case 1:
                return "Seleccionar Raza";
            case 2:
                return `Seleccionar Tipo de ${character.race}`;
            default:
                return "Continuar"
        }
    }

    return(
        <div>
            <h4 style={{marginLeft: '2%'}}>Paso {character.step}: {renderStepName()}</h4>
            <div>
                {renderStep()}
            </div>
        </div>
    )
}

export default NewCharacterStepper;