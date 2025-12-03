import { useContext, useMemo } from 'react';

import ElementCard from '../../ElementCard/ElementCard';
import BigCard from '../../BigCard/BigCard';

import { CharacterContext } from '@/app/contexts/characterContext';

import { useRaces } from '@/app/hooks/useRaces';
import { useRaceTypes } from '@/app/hooks/useRaceTypes';
import { usePrimaryCategories } from '@/app/hooks/useCategories';

import { IRace } from '../raceList/RaceList.types';

import styles from './Categories.module.css';


const Categories = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {raceTypes} = useRaceTypes(character.race);
    const {races} = useRaces(); 
    const {primaryCategories} = usePrimaryCategories(character.race);

    const selectedRaceType = useMemo(() => {
        if (!character.race) return undefined;
        if (!character.raceType || character.race === character.raceType) {
            return races.find((race: IRace) => race.name === character.race);
        }
        return raceTypes.find((raceType: any) => raceType.name === character.raceType) ??
            races.find((race: IRace) => race.name === character.race);
    }, [character.race, character.raceType, raceTypes, races]);

    const setCharacterCategory = (value: string) => {
        setCharacter((prevState) => ({...prevState, category: value, step: 4}));
    }

    return(
        <div className={styles.container}>
            {selectedRaceType && selectedRaceType.name && (
                <BigCard
                    name={selectedRaceType.name}
                    description={selectedRaceType.shortDesc}
                    image={selectedRaceType.image}
                />
            )}
            <section className={styles.section}>
                <header className={styles.header}>
                    <p className={styles.tag}>Paso 3</p>
                    <h3>Selecciona la categoría principal</h3>
                    <p>
                        Define el rol de tu {character.race || 'aventurero'} en batalla. Cada
                        categoría desbloquea estilos y especialidades únicas.
                    </p>
                </header>
                <div className={styles.grid}>
                    { primaryCategories.length > 0 ? 
                        primaryCategories.map((primaryCategory: any) => (
                            <ElementCard
                                key={primaryCategory.name}
                                name={primaryCategory.name}
                                description={primaryCategory.shortDesc}
                                image={primaryCategory.image}
                                handleClick={(value:string) => setCharacterCategory(value)}
                            />
                        )) : (
                            <div className={styles.empty}>
                                No se encontraron categorías disponibles para esta combinación.
                            </div>
                        )}
                </div>
            </section>
        </div>
    )
}

export default Categories;