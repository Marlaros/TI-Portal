import React, { useContext } from 'react'
import RaceList from '../newCharacterSteps/raceList/RaceList';
import RaceType from '../newCharacterSteps/raceType/RaceType';
import Categories from '../newCharacterSteps/categories/Categories';
import Specialties from '../newCharacterSteps/specialties/Specialties';

import { CharacterContext } from '@/app/contexts/characterContext';

const NewCharacterStepper = () => {

    const {character, setCharacter} = useContext(CharacterContext);

    const renderStep = () => {
        if(character){
            switch(character.step){
                case 1:
                    return <RaceList />;
                case 2:
                    return <RaceType />
                case 3:
                    return <Categories />
                case 4:
                    return <Specialties />
                case 5:
                    return <div>This is step 5: Race: {character.race}</div>;
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
            case 3:
                return `Seleccionar Categoria Principal`;
            case 4:
                return `Seleccionar Especialidad`;
            default:
                return "Continuar";
        }
    }

    return(
        <div style={{minWidth: '90vw'}}>
            <div style={{marginLeft: '3%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '35%'}}>
                {character.step > 1 ? 
                    <div style={{flex: 1}}>
                        <button 
                            style={{cursor: 'pointer', color: 'rgba(0,0,0,0.88)', backgroundColor: 'rgba(231, 193, 119, 0.497)', borderStyle: 'none', fontWeight: '600', fontSize: '14px', padding: '2%', borderRadius: '8%'}}
                            onClick={() => setCharacter({...character,step: character.step - 1})}>
                            {'< Atrás'}
                        </button>
                    </div>
                    : <></>
                }
                <div style={{flex: 5, fontSize: '18px', fontWeight: 'bold'}}>
                    Paso {character.step}: {renderStepName()}
                </div>
            </div>
            <div>
                {renderStep()}
            </div>
        </div>
    )
}

export default NewCharacterStepper;