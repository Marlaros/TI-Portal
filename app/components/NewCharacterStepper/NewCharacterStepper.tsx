'use client'
import { useContext } from 'react';

import RaceList from '../newCharacterSteps/raceList/RaceList';
import RaceType from '../newCharacterSteps/raceType/RaceType';
import Categories from '../newCharacterSteps/categories/Categories';
import Specialties from '../newCharacterSteps/specialties/Specialties';
import Description from '../newCharacterSteps/description/Description';
import AdvantagesStep from '../newCharacterSteps/advantages/Advantages';
import DisadvantagesStep from '../newCharacterSteps/disadvantages/Disadvantages';
import EquipmentStep from '../newCharacterSteps/equipment/Equipment';
import FightingStyleStep from '../newCharacterSteps/fightingStyle/FightingStyle';
import WeaponMasteryStep from '../newCharacterSteps/weaponMastery/WeaponMastery';
import SkillsStep from '../newCharacterSteps/skills/Skills';
import CharacterPreviewPanel from '../newCharacterSteps/preview/Preview';
import AttributesStep from '../newCharacterSteps/attributes/Attributes';

import { CharacterContext } from '@/app/contexts/characterContext';
import { cn } from '@/utils/cn';

import styles from './NewCharacterStepper.module.css';

const STEP_META = [
  { title: 'Raza y cultura', helper: 'Elige el pueblo de origen y desbloquea sus rasgos únicos.' },
  { title: 'Variantes y linajes', helper: 'Define la rama cultural que moldea tu historia.' },
  { title: 'Categoría principal', helper: 'Selecciona el rol base que determinará tus progresiones.' },
  { title: 'Especialidad', helper: 'Perfecciona tu estilo con escuelas avanzadas.' },
  { title: 'Descripción', helper: 'Completa los datos narrativos de la hoja.' },
  { title: 'Atributos base', helper: 'Define los valores que alimentarán tus estadísticas.' },
  { title: 'Ventajas', helper: 'Añade dones excepcionales según tu linaje.' },
  { title: 'Desventajas', helper: 'Equilibra el poder con compromisos o restricciones.' },
  { title: 'Equipo', helper: 'Define armas, armaduras y kits iniciales.' },
  { title: 'Estilo de lucha', helper: 'Selecciona la técnica de combate predominante.' },
  { title: 'Arma predilecta', helper: 'Especialízate en el arma que dominarás.' },
  { title: 'Pericias', helper: 'Selecciona talentos clave para la aventura.' }
] as const;

const STEP_COMPONENT = (step: number) => {
  switch (step) {
    case 1:
      return <RaceList />;
    case 2:
      return <RaceType />;
    case 3:
      return <Categories />;
    case 4:
      return <Specialties />;
    case 5:
      return <Description />;
    case 6:
      return <AttributesStep />;
    case 7:
      return <AdvantagesStep />;
    case 8:
      return <DisadvantagesStep />;
    case 9:
      return <EquipmentStep />;
    case 10:
      return <FightingStyleStep />;
    case 11:
      return <WeaponMasteryStep />;
    case 12:
      return <SkillsStep />;
    default:
      return <div className={styles.placeholder}>Seleccione una opción para continuar.</div>;
  }
};

export default function NewCharacterStepper() {
  const { character, setCharacter } = useContext(CharacterContext);
  const totalSteps = STEP_META.length;
  const clampedStep = Math.min(Math.max(character.step, 1), totalSteps);
  const activeIndex = clampedStep - 1;
  const activeMeta = STEP_META[activeIndex];
  const isFinalStep = clampedStep === totalSteps;

  const goToStep = (index: number) => {
    setCharacter((prev) => ({ ...prev, step: index + 1 }));
  };

  const goBack = () => {
    if (clampedStep <= 1) return;
    setCharacter((prev) => ({ ...prev, step: prev.step - 1 }));
  };

  const goForward = () => {
    if (clampedStep >= totalSteps) return;
    setCharacter((prev) => ({ ...prev, step: prev.step + 1 }));
  };

  return (
    <div className={styles.shell}>
      <div className={styles.timelineBar}>
        <div className={styles.timelineHeader}>
          <p>Progreso</p>
          <span>{activeIndex + 1}/{STEP_META.length}</span>
        </div>
        <ol className={styles.stepList}>
          {STEP_META.map((step, index) => {
            const isActive = index === activeIndex;
            const isDone = index < activeIndex;
            return (
              <li key={step.title}>
                <button
                  type="button"
                  className={cn(styles.step, isActive && styles.stepActive, isDone && styles.stepDone)}
                  onClick={() => goToStep(index)}
                  disabled={index > character.step}
                >
                  <span className={styles.stepIndex}>{index + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.helper}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <section className={styles.stage}>
        <header className={styles.stageHeader}>
          <p>Paso {clampedStep}</p>
          <h2>{activeMeta.title}</h2>
          <span>{activeMeta.helper}</span>
        </header>
        <div className={styles.stageBody}>{STEP_COMPONENT(clampedStep)}</div>
        <div className={styles.stageActions}>
          <button type="button" onClick={goBack} disabled={clampedStep <= 1}>
            Volver
          </button>
          {!isFinalStep && (
            <button type="button" onClick={goForward}>
              Avanzar
            </button>
          )}
        </div>
      </section>
      <section className={styles.previewSection}>
        <CharacterPreviewPanel />
      </section>
    </div>
  );
}