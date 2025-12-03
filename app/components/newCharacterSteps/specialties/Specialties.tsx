'use client'
import { useContext } from "react";

import FloatingCard from "../../FloatingCard/FloatingCard";

import { CharacterContext } from "@/app/contexts/characterContext";

import { useSpecialties } from "@/app/hooks/useSpecialties";

import styles from './Specialties.module.css';

const Specialties = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {specialties} = useSpecialties(character.race, character.category);

    const setCharacterSpecialty = (value: string) => {
        setCharacter((prevState) => ({...prevState, specialty: value, step: 5}))
    }

    return(
        <section className={styles.container}>
            <header className={styles.header}>
                <p className={styles.tag}>Paso 4</p>
                <h3>
                    Especialidades para {character.race || 'tu raza'} {character.category || ''}
                </h3>
                <p>Elige la senda que refina las habilidades únicas de tu héroe.</p>
            </header>
            <div className={styles.list}>
                {specialties.length > 0 ? 
                    specialties.map((specialty: any) => (
                        <FloatingCard 
                            key={specialty.name}
                            name={specialty.name}
                            description={specialty.shortDesc}
                            image={specialty.image}
                            handleClick={(value: string) => setCharacterSpecialty(value)}
                        />
                    )) : 
                    <div className={styles.empty}>
                        {character.race === "Ogros" ?
                            "Los ogros no poseen especialidades. Solo son Guerreros :)" :
                            "No se han encontrado especialidades para esta categoría."}
                    </div>
                }
            </div>
        </section>
    )
}

export default Specialties;