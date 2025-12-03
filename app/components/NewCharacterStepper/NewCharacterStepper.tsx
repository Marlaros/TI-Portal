'use client'
import { useContext, useMemo } from 'react';

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
import PreviewStep from '../newCharacterSteps/preview/Preview';

import { CharacterContext } from '@/app/contexts/characterContext';
import type { Character } from '@/app/characters/new/character.type';
import { cn } from '@/utils/cn';

import styles from './NewCharacterStepper.module.css';

const STEP_META = [
  { title: 'Raza y cultura', helper: 'Elige el pueblo de origen y desbloquea sus rasgos únicos.' },
  { title: 'Variantes y linajes', helper: 'Define la rama cultural que moldea tu historia.' },
  { title: 'Categoría principal', helper: 'Selecciona el rol base que determinará tus progresiones.' },
  { title: 'Especialidad', helper: 'Perfecciona tu estilo con escuelas avanzadas.' },
  { title: 'Descripción', helper: 'Completa los datos narrativos de la hoja.' },
  { title: 'Ventajas', helper: 'Añade dones excepcionales según tu linaje.' },
  { title: 'Desventajas', helper: 'Equilibra el poder con compromisos o restricciones.' },
  { title: 'Equipo', helper: 'Define armas, armaduras y kits iniciales.' },
  { title: 'Estilo de lucha', helper: 'Selecciona la técnica de combate predominante.' },
  { title: 'Arma predilecta', helper: 'Especialízate en el arma que dominarás.' },
  { title: 'Pericias', helper: 'Selecciona talentos clave para la aventura.' },
  { title: 'Previsualización', helper: 'Revisa todos los datos antes de crear.' }
] as const;

const STEP_COMPONENT = (step: number, handlers: { onCreate: () => void }) => {
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
      return <AdvantagesStep />;
    case 7:
      return <DisadvantagesStep />;
    case 8:
      return <EquipmentStep />;
    case 9:
      return <FightingStyleStep />;
    case 10:
      return <WeaponMasteryStep />;
    case 11:
      return <SkillsStep />;
    case 12:
      return <PreviewStep onCreate={handlers.onCreate} />;
    default:
      return <div className={styles.placeholder}>Seleccione una opción para continuar.</div>;
  }
};

const formatValue = (value: string | number | undefined | null) =>
  value !== undefined && value !== null && value !== '' ? value : 'Sin definir';

const toTitle = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
const formatList = (values: string[]) =>
  values.length ? values.map((value) => toTitle(String(value))).join(', ') : 'Sin definir';

export default function NewCharacterStepper() {
  const { character, setCharacter } = useContext(CharacterContext);
  const totalSteps = STEP_META.length;
  const clampedStep = Math.min(Math.max(character.step, 1), totalSteps);
  const activeIndex = clampedStep - 1;
  const activeMeta = STEP_META[activeIndex];
  const isFinalStep = clampedStep === totalSteps;

  const summarySections = useMemo(() => {
    const identityRows = [
      { label: 'Nombre', value: formatValue(character.name) },
      { label: 'Nivel', value: formatValue(character.level) },
      { label: 'Alineación', value: formatValue(character.alignment) }
    ];

    const lineageRows = [
      { label: 'Raza', value: formatValue(character.race) },
      { label: 'Variante', value: formatValue(character.raceType) },
      { label: 'Categoría', value: formatValue(character.category) },
      { label: 'Especialidad', value: formatValue(character.specialty) }
    ];

    const stats = character.stats || ({} as Character['stats']);
    const statMap: Array<{ label: string; key: keyof Character['stats'] }> = [
      { label: 'Ataque', key: 'ataque' },
      { label: 'Defensa', key: 'defensa' },
      { label: 'Iniciativa', key: 'iniciativa' },
      { label: 'PG', key: 'PG' },
      { label: 'PC', key: 'PC' },
      { label: 'PM', key: 'PM' }
    ];

    const statRows = statMap.map(({ label, key }) => ({
      label,
      value: formatValue((stats as any)?.[key])
    }));

    const traitsRows = [
      { label: 'Ventajas', value: formatList(character.advantages) },
      { label: 'Desventajas', value: formatList(character.disadvantages) },
      { label: 'Equipo', value: formatList(character.equipment) },
      { label: 'Estilo', value: formatValue(character.fightingStyle) },
      { label: 'Arma favorita', value: formatValue(character.weaponSpecialization) },
      { label: 'Pericias', value: formatList(character.skills) }
    ];

    return [
      { title: 'Identidad', rows: identityRows },
      { title: 'Linaje y rol', rows: lineageRows },
      { title: 'Estadísticas', rows: statRows },
      { title: 'Rasgos adicionales', rows: traitsRows }
    ];
  }, [character]);

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

  const handleCreate = () => {
    console.log('Personaje listo para crear', character);
  };

  return (
    <div className={styles.shell}>
      <aside className={styles.timeline}>
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
      </aside>

      <section className={styles.stage}>
        <header className={styles.stageHeader}>
          <p>Paso {clampedStep}</p>
          <h2>{activeMeta.title}</h2>
          <span>{activeMeta.helper}</span>
        </header>
        <div className={styles.stageBody}>{STEP_COMPONENT(clampedStep, { onCreate: handleCreate })}</div>
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

      <aside className={styles.summary}>
        <h4>Resumen del personaje</h4>
        {summarySections.map((section) => (
          <div key={section.title} className={styles.summarySection}>
            <p className={styles.summaryTitle}>{section.title}</p>
            <ul>
              {section.rows.map((row) => (
                <li key={row.label}>
                  <span>{row.label}</span>
                  <strong>{toTitle(String(row.value))}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </div>
  );
}