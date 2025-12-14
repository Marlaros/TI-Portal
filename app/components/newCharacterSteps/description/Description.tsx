import { useContext, useMemo, useState } from 'react';

import BigCard from '../../BigCard/BigCard';

import { CharacterContext } from '@/app/contexts/characterContext';

import { useSpecialties } from '@/app/hooks/useSpecialties';

import styles from './Description.module.css';
import { useCatalogs } from '@/app/contexts/catalogContext';
import ModifiersList from '../../Modifiers/ModifiersList';

const Description = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {specialties} = useSpecialties(character.race, character.category);
    const mainAttributes = [["Usuario","userName"],["Nombre","name"],["Alineación","alignment"],["Nivel","level"]] as const;
    
    const [isFocused, setIsFocused] = useState("");

    const selectedSpecialty = useMemo(() => (
        specialties.find((spec: any) => spec.name === character.specialty)
    ), [specialties, character.specialty]);

    const { races: catalogRaces, raceVariants: catalogRaceVariants, categories: catalogCategories, specialties: catalogSpecialties } = useCatalogs();
    const stackedModifiers = (() => {
        const out: any[] = [];
        const r = catalogRaces.find((rr: any) => rr.name === character.race);
        if (r && r.modifiers) out.push(...r.modifiers);
        const rt = catalogRaceVariants.find((rv: any) => rv.name === character.raceType && rv.raceName === character.race);
        if (rt && rt.modifiers) out.push(...rt.modifiers);
        const cat = catalogCategories.find((c: any) => c.name === character.category);
        if (cat && cat.modifiers) out.push(...cat.modifiers);
        const sp = catalogSpecialties.find((s: any) => s.name === character.specialty);
        if (sp && sp.modifiers) out.push(...sp.modifiers);
        return out;
    })();

    const updateCharacterMains = (descriptionKey: string, value: string) => {
        setCharacter((prevState: any) => ({...prevState, [descriptionKey]: value}))
    }
    
    const updateCharacterDescription = (descriptionKey: string, value: string) => {
        let { descripcion } = {...character};
        (descripcion as any)[descriptionKey] = value;
        setCharacter((prevState: any) => ({...prevState, descripcion}))
    }

    const entries = Object.keys(character.descripcion);

    return(
        <div className={styles.container}>
            { selectedSpecialty && selectedSpecialty.name && 
                <BigCard
                    name={`${character.raceType} - ${selectedSpecialty.name}`}
                    description={selectedSpecialty.shortDesc}
                    image={selectedSpecialty.image}
                    modifiers={selectedSpecialty.modifiers ?? []}
                />
            }
            <section className={styles.section}>
                <header className={styles.header}>
                    <p className={styles.tag}>Paso 5</p>
                    <h3>Describe a tu personaje</h3>
                    <p>Estos campos se reflejarán en la hoja final y pueden editarse más adelante.</p>
                </header>
                <div className={styles.grid}>
                    {mainAttributes.map(([label, key]) => (
                        <div key={label} className={styles.field}>
                            <label>{label}</label>
                            <input
                                className={styles.input}
                                type={key === 'level' ? 'number' : 'text'}
                                value={(character as any)[key]}
                                onChange={(e) => updateCharacterMains(key, e.target.value)}
                                onFocus={() => setIsFocused(label)}
                            />
                        </div>
                    ))}
                    {entries.map((descriptionKey: string) => (
                        <div key={descriptionKey} className={styles.field}>
                            <label>{descriptionKey[0].toUpperCase() + descriptionKey.slice(1)}</label>
                            <input
                                className={styles.input}
                                type="text"
                                value={(character.descripcion as any)[descriptionKey]}
                                onChange={(e) => updateCharacterDescription(descriptionKey,e.target.value)}
                                onFocus={() => setIsFocused(descriptionKey)}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.accept}
                        onClick={() => setCharacter((prev) => ({...prev,step: 6}))}
                        onFocus={() => setIsFocused("Aceptar")}
                    >
                        Guardar descripción
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Description;