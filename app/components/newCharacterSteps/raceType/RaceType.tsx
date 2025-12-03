
import { useContext, useMemo } from 'react'

import ElementCard from '../../ElementCard/ElementCard';
import BigCard from '../../BigCard/BigCard';

import { CharacterContext } from '@/app/contexts/characterContext';

import { useRaces } from '@/app/hooks/useRaces';
import { IRace } from '../raceList/RaceList.types';

import { useRaceTypes } from '@/app/hooks/useRaceTypes';
import { IRaceType } from './RaceType.types';

import styles from './RaceType.module.css';

const RaceType = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {races} : {races: IRace[]} = useRaces();
    const {raceTypes} = useRaceTypes(character.race);

    const selectedRace = useMemo(() => (
        races.find((race: IRace) => race.name === character.race)
    ), [character.race, races]);

    const renderSelectTypeHeader = (raza: string) => {
        if(raza === "Humanos"){
            return "Selecciona el Pais de Origen";
        }
        else{
            return `Selecciona el tipo de ${raza}`
        }
    }

    const setCharacterRaceType = (value: string) => {
        setCharacter((prevState) => ({...prevState, raceType: value, step: 3}))
    }

    const renderAlternative = (race: string) => {
        return(
            ["Duendes","Semielfos","Ogros"].includes(race) ?
                <div className={styles.alternative}>
                    <p>Los {race} no poseen subtipos inherentes a su raza.</p>
                    <button
                        className={styles.continue}
                        onClick={() => setCharacter((prev) => ({...prev,raceType: selectedRace?.name ?? race,step: 3}))}>
                        Continuar
                    </button>
                </div> 
                : 
                <div className={styles.alternative}>
                    No se encontraron tipos para esta raza
                </div>
        )
    }

    return(
        <div className={styles.container}>
            { selectedRace && selectedRace.name && 
                <BigCard
                    name={selectedRace.name}
                    description={selectedRace.shortDesc}
                    image={selectedRace.image}
                />
            }
            <section className={styles.section}>
                <header className={styles.header}>
                    <p className={styles.tag}>Paso 2</p>
                    <h3>{selectedRace ? renderSelectTypeHeader(selectedRace.name) : 'Selecciona una raza para continuar'}</h3>
                </header>
                <div className={styles.grid}>
                    { raceTypes.length > 0 ? 
                        raceTypes.map((raceType: IRaceType) => (
                            <ElementCard
                                key={raceType.name}
                                name={raceType.name}
                                description={raceType.shortDesc}
                                image={raceType.image}
                                handleClick={(value:string) => setCharacterRaceType(value)}
                            />
                        )) : 
                        renderAlternative(character.race)
                    }
                </div>
            </section>
        </div>

    )
}

export default RaceType;