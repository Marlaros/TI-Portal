import React, { useContext } from 'react'
import RaceList from '../newCharacterSteps/raceList/RaceList';
import RaceType from '../newCharacterSteps/raceType/RaceType';
import Categories from '../newCharacterSteps/categories/Categories';
import Specialties from '../newCharacterSteps/specialties/Specialties';

import { CharacterContext } from '@/app/contexts/characterContext';

import './NewCharacterStepper.css';
import Description from '../newCharacterSteps/description/Description';

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
                    return <Description />
                case 6:
                    return <div>This is step 6: Race: {character.race} {character.specialty}</div>;
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
            case 5:
                return `Descripción del Personaje`
            default:
                return "Continuar";
        }
    }

    const goBack = () => {
        setCharacter((prevState) => ({...prevState,step: prevState.step - 1}))
    }

    return(
        <div className="stepper-container">
            <div className="stepper-stepname-container">
                {character.step > 1 ? 
                    <div className="stepper-backbtn-container">
                        <button className="stepper-backbtn" onClick={() => goBack()}>
                            {'< Atrás'}
                        </button>
                    </div>
                    : <></>
                }
                <div className="stepper-stepname">
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