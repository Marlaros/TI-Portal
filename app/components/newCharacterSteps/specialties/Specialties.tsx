'use client'
import { useContext, useMemo, useState } from "react";

import FloatingCard from "../../FloatingCard/FloatingCard";

import { CharacterContext } from "@/app/contexts/characterContext";

import { useSpecialties } from "@/app/hooks/useSpecialties";

import styles from './Specialties.module.css';
import floatingStyles from '../../FloatingCard/FloatingCard.module.css';
import { useCatalogs } from '@/app/contexts/catalogContext';
import ModifiersList from '../../Modifiers/ModifiersList';

const Specialties = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const {specialties} = useSpecialties(character.race, character.category);
    const [filter, setFilter] = useState('');
    const [view, setView] = useState<'grid'|'list'>('grid');

    const filtered = useMemo(() => {
        const f = filter.trim().toLowerCase();
        if (!f) return specialties;
        return specialties.filter((s: any) => (s.name || '').toLowerCase().includes(f));
    }, [specialties, filter]);

    const { races: catalogRaces, specialties: catalogSpecialties, categories: catalogCategories, raceVariants: catalogRaceVariants } = useCatalogs();
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
            <div className={styles.controls}>
                <input placeholder="Filtrar por nombre..." value={filter} onChange={(e) => setFilter(e.target.value)} />
                <div>
                    <button type="button" onClick={() => setView('grid')} className={view === 'grid' ? styles.activeView : ''}>Grid</button>
                    <button type="button" onClick={() => setView('list')} className={view === 'list' ? styles.activeView : ''}>Lista</button>
                </div>
            </div>
            <div className={styles.content}>
                {filtered.length > 0 ? (
                    view === 'grid' ? (
                        <div style={{ display: 'flex', gap: 12 }}>
                            <div className={styles.list}>
                              {filtered.map((specialty: any) => (
                                  <FloatingCard 
                                          key={specialty.name}
                                          name={specialty.name}
                                          description={specialty.shortDesc}
                                          image={specialty.image}
                                          handleClick={(value: string) => setCharacterSpecialty(value)}
                                          modifiers={specialty.modifiers ?? []}
                                      />
                              ))}
                            </div>
                        </div>
                    ) : (
                        <ul className={styles.simpleList}>
                            {filtered.map((s: any) => (
                                    <li key={s.name}>
                                        <div
                                            role="button"
                                            tabIndex={0}
                                            className={`${floatingStyles.card} ${styles.simpleListItem} ${character.specialty === s.name ? floatingStyles.cardActive : ''}`}
                                            onClick={() => setCharacterSpecialty(s.name)}
                                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCharacterSpecialty(s.name); } }}
                                        >
                                            {s.name}
                                        </div>
                                    </li>
                            ))}
                        </ul>
                    )
                ) : (
                    <div className={styles.empty}>
                        {character.race === "Ogros" ?
                            "Los ogros no poseen especialidades. Solo son Guerreros :)" :
                            "No se han encontrado especialidades para esta categoría."}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Specialties;