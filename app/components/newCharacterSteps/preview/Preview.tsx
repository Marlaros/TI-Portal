'use client'

import { useContext, useMemo, useState } from 'react';

import type { Character } from '@/app/characters/new/character.type';
import { CharacterContext } from '@/app/contexts/characterContext';
import { useCatalogs } from '@/app/contexts/catalogContext';
import { useCharacterPreview } from '@/app/hooks/useCharacterPreview';
import { computeManualAttributeSummary } from '@/domain/attributes/manualEffects';
import { describeTarget } from '@/domain/rule-helpers';
import type { RuleModifier } from '@/domain/rules';
import type { Attributes } from '@/domain/state';

import styles from './Preview.module.css';

const PERCEPTION_SKILLS = [
  { key: 'alerta', label: 'Alerta' },
  { key: 'clima', label: 'Clima / Terrenos' },
  { key: 'detectarRuidos', label: 'Detectar ruidos' },
  { key: 'detectarTrampas', label: 'Detectar trampas' },
  { key: 'observacion', label: 'Observación' },
  { key: 'orientacion', label: 'Orientación' },
  { key: 'sospecha', label: 'Sospecha' },
  { key: 'rastreo', label: 'Rastreo' }
] as const;

const LEADERSHIP_SKILLS = [
  { key: 'adular', label: 'Adular' },
  { key: 'hablarMasas', label: 'Hablar a masas' },
  { key: 'intimidar', label: 'Intimidar / causar miedo' },
  { key: 'negociar', label: 'Negociar / rogar' },
  { key: 'valentia', label: 'Valentía' }
] as const;

type CoreAttributeKey = 'fuerza' | 'resistencia' | 'agilidad' | 'percepcion' | 'liderazgo' | 'inteligencia';

const ATTRIBUTE_LABELS: Array<{ key: CoreAttributeKey; label: string }> = [
  { key: 'fuerza', label: 'Fuerza (F)' },
  { key: 'resistencia', label: 'Resistencia (R)' },
  { key: 'agilidad', label: 'Agilidad (A)' },
  { key: 'percepcion', label: 'Percepción (P)' },
  { key: 'liderazgo', label: 'Liderazgo (L)' },
  { key: 'inteligencia', label: 'Inteligencia (I)' }
];

const toCoreAttributes = (attributes: Character['attributes']): Attributes => ({
  fuerza: attributes.fuerza ?? 10,
  resistencia: attributes.resistencia ?? 10,
  agilidad: attributes.agilidad ?? 10,
  percepcion: attributes.percepcion ?? 10,
  liderazgo: attributes.liderazgo ?? 10,
  inteligencia: attributes.inteligencia ?? 10,
  belleza: attributes.belleza ?? 10,
  categoriaSocial: attributes.categoriaSocial ?? 1
});

const formatModifier = (modifier: RuleModifier): string => {
  const target = describeTarget(modifier.target);
  switch (modifier.operation.kind) {
    case 'add':
      return `${target}: ${modifier.operation.value >= 0 ? '+' : ''}${modifier.operation.value}`;
    case 'multiply':
      return `${target}: x${modifier.operation.value}`;
    case 'set':
      return `${target}: = ${modifier.operation.value}`;
    case 'perPoint':
      return `${target}: +${modifier.operation.value} cada ${modifier.operation.step ?? 1} desde ${modifier.operation.startValue}`;
    default:
      return target;
  }
};

const resolveName = <T extends { slug: string; name: string }>(collection: T[], slug?: string | null) =>
  collection.find((item) => item.slug === slug)?.name ?? slug ?? '—';

const readSkillValue = (pool: Record<string, number> | undefined, key: string) =>
  pool?.[key] ?? pool?.[key.toLowerCase()] ?? 0;

export default function CharacterPreviewPanel() {
  const { character } = useContext(CharacterContext);
  const catalogs = useCatalogs();
  const { ready, snapshot, debugLog, error } = useCharacterPreview(character);
  const [createStatus, setCreateStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [createMessage, setCreateMessage] = useState<string>();
  const manualSummary = useMemo(
    () => computeManualAttributeSummary(toCoreAttributes(character.attributes)),
    [character.attributes]
  );

  const racialHp = snapshot?.resources.pg ?? character.stats.PG ?? 0;
  const armorHp = snapshot?.resources.pc ?? character.stats.PC ?? 0;
  const totalHp = racialHp + armorHp;
  const damageReduction = character.stats.reduccionDano ?? 0;
  const pm = snapshot?.resources.pm ?? character.stats.PM ?? 0;
  const concentration = snapshot?.combat.concentracion ?? character.stats.concentracion ?? 0;
  const restRecoveryBonus = manualSummary.derived.restRecoveryBonus;

  const combatStats = [
    { key: 'ataque', label: 'Ataque', value: snapshot?.combat.ataque ?? character.stats.ataque ?? 0 },
    { key: 'ataqueDistancia', label: 'Disparos', value: snapshot?.combat.ataqueDistancia ?? character.stats.disparos ?? 0 },
    { key: 'numeroDeAtaques', label: 'Nº de ataques', value: snapshot?.combat.numeroDeAtaques ?? 1 },
    { key: 'numeroDeAtaquesDistancia', label: 'Nº de ataques (dist.)', value: snapshot?.combat.numeroDeAtaquesDistancia ?? 1 },
    { key: 'critico', label: 'Prob. de crítico', value: snapshot?.combat.critico ?? character.stats.probCritico ?? 0 },
    { key: 'defensa', label: 'Defensa', value: snapshot?.combat.defensa ?? character.stats.defensa ?? 0 },
    { key: 'defEspontanea', label: 'Defensas espontáneas', value: character.stats.defEspontanea ?? 0 },
    { key: 'reduccionDefensaEnemiga', label: 'Penalización a defensa rival', value: snapshot?.combat.reduccionDefensaEnemiga ?? character.stats.penDef ?? 0 },
    { key: 'armadura', label: 'Armadura (AR)', value: snapshot?.combat.armadura ?? character.stats.AR ?? 0 },
    { key: 'iniciativa', label: 'Iniciativa', value: snapshot?.combat.iniciativa ?? character.stats.iniciativa ?? 0 },
    { key: 'concentracion', label: 'Concentración', value: concentration },
    { key: 'pm', label: 'Puntos de magia', value: pm },
    { key: 'detectarMagia', label: 'Detectar magia', value: character.stats.detectarMagia ?? 0 }
  ];

  const perceptionValues = PERCEPTION_SKILLS.map((skill) => ({
    label: skill.label,
    value: readSkillValue(character.stats.habilidades.deP, skill.key)
  }));

  const leadershipValues = LEADERSHIP_SKILLS.map((skill) => ({
    label: skill.label,
    value: readSkillValue(character.stats.habilidades.deL, skill.key)
  }));

  const skillEntries = useMemo(
    () =>
      character.skills.map((slug) => ({
        name: resolveName(catalogs.skills, slug),
        rating: character.skillRanks[slug] ?? 0,
        slug
      })),
    [character.skills, character.skillRanks, catalogs.skills]
  );

  const equipmentEntries = useMemo(
    () =>
      character.equipment.map((slug) => {
          const record = catalogs.equipment.find((item) => item.slug === slug);
          const price = (record as any)?.price;
          return {
            slug,
            name: record?.name ?? slug,
            size: record?.slot ?? '—',
            price: price ?? null,
            modifiers: record?.modifiers ?? []
          };
      }),
    [character.equipment, catalogs.equipment]
  );

  const selectedAdvantages = character.advantages.map((slug) => ({
    slug,
    name: resolveName(catalogs.advantages, slug),
    description: catalogs.advantages.find((item) => item.slug === slug)?.description ?? ''
  }));

  const selectedDisadvantages = character.disadvantages.map((slug) => ({
    slug,
    name: resolveName(catalogs.disadvantages, slug),
    description: catalogs.disadvantages.find((item) => item.slug === slug)?.description ?? ''
  }));

  const fightingStyleLabel = resolveName(catalogs.fightingStyles, character.fightingStyle);
  const selectedMastery = character.weaponSpecialization
    ? resolveName(catalogs.weaponMasteries, character.weaponSpecialization)
    : '—';

  const canCreate =
    ready &&
    Boolean(
      character.userName &&
        character.name &&
        character.specialty &&
        character.fightingStyle &&
        character.weaponSpecialization &&
        snapshot
    );

  const handleCreate = async () => {
    if (!snapshot || !canCreate || createStatus === 'saving') return;
    setCreateStatus('saving');
    setCreateMessage(undefined);
    try {
      const response = await fetch('/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ character, snapshot })
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Request failed');
      }

      const { id } = (await response.json()) as { id?: string };
      setCreateStatus('success');
      setCreateMessage(id ? `Personaje guardado (#${id}).` : 'Personaje guardado.');
    } catch (creationError) {
      console.error('Create character failed', creationError);
      setCreateStatus('error');
      setCreateMessage('No se pudo guardar el personaje. Intenta nuevamente.');
    }
  };

  const attributeValues = character.attributes;

  return (
    <div className={styles.layout}>
      <header className={styles.headline}>
        <div>
          <p className={styles.tag}>Previsualización completa</p>
          <h3>{character.name || 'Personaje sin nombre'}</h3>
          <span>Repasa cada parámetro antes de guardar el personaje.</span>
        </div>
        <span className={ready && snapshot ? styles.statusReady : styles.statusPending}>
          {ready && snapshot ? 'Reglas aplicadas' : error ?? 'Faltan datos para el cálculo'}
        </span>
      </header>

      <div className={styles.gridTwo}>
        <section className={styles.panel}>
          <h4>Identidad y linaje</h4>
          <dl className={styles.definitionList}>
            <div>
              <dt>Nombre del usuario</dt>
              <dd>{character.userName || '—'}</dd>
            </div>
            <div>
              <dt>Nombre del personaje</dt>
              <dd>{character.name || '—'}</dd>
            </div>
            <div>
              <dt>Raza</dt>
              <dd>{resolveName(catalogs.races, character.race)}</dd>
            </div>
            <div>
              <dt>Variante / linaje</dt>
              <dd>{resolveName(catalogs.raceVariants, character.raceType)}</dd>
            </div>
            <div>
              <dt>Categoría principal</dt>
              <dd>{resolveName(catalogs.categories, character.category)}</dd>
            </div>
            <div>
              <dt>Categoría secundaria</dt>
              <dd>{character.secondaryCategory || '—'}</dd>
            </div>
            <div>
              <dt>Nivel</dt>
              <dd>{character.level}</dd>
            </div>
            <div>
              <dt>Alineación</dt>
              <dd>{character.alignment || '—'}</dd>
            </div>
            <div>
              <dt>Categoría social</dt>
              <dd>{character.attributes.categoriaSocial ?? '—'}</dd>
            </div>
            <div>
              <dt>País de origen</dt>
              <dd>{character.countryOfOrigin || '—'}</dd>
            </div>
            <div>
              <dt>Experiencia</dt>
              <dd>{character.experience ?? 0}</dd>
            </div>
            <div>
              <dt>Reducción de experiencia</dt>
              <dd>{character.experiencePenalty ?? 0}</dd>
            </div>
          </dl>
        </section>

        <section className={styles.panel}>
          <h4>Descripción física</h4>
          <dl className={styles.definitionList}>
            <div>
              <dt>Altura</dt>
              <dd>{character.descripcion.altura ? `${character.descripcion.altura} cm` : '—'}</dd>
            </div>
            <div>
              <dt>Peso</dt>
              <dd>{character.descripcion.peso ? `${character.descripcion.peso} kg` : '—'}</dd>
            </div>
            <div>
              <dt>Edad</dt>
              <dd>{character.descripcion.edad || '—'}</dd>
            </div>
            <div>
              <dt>Rasgos distintivos</dt>
              <dd>{character.descripcion.rasgos || '—'}</dd>
            </div>
            <div>
              <dt>Cabello</dt>
              <dd>{character.descripcion.cabello || '—'}</dd>
            </div>
            <div>
              <dt>Ojos</dt>
              <dd>{character.descripcion.ojos || '—'}</dd>
            </div>
            <div>
              <dt>Piel</dt>
              <dd>{character.descripcion.piel || '—'}</dd>
            </div>
            <div>
              <dt>Género</dt>
              <dd>{character.descripcion.genero || '—'}</dd>
            </div>
            <div>
              <dt>Belleza</dt>
              <dd>{character.attributes.belleza ?? '—'}</dd>
            </div>
          </dl>
        </section>
      </div>

      <section className={styles.panel}>
        <h4>Atributos base</h4>
        <div className={styles.attributesGrid}>
          {ATTRIBUTE_LABELS.map(({ key, label }) => (
            <article key={key} className={styles.attributeCard}>
              <span>{label}</span>
              <strong>{attributeValues[key]}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.panel}>
        <h4>Modificadores por atributo (Octava Guía)</h4>
        <div className={styles.attributeImpacts}>
          {ATTRIBUTE_LABELS.map(({ key, label }) => (
            <article key={key} className={styles.impactCard}>
              <strong>{label}</strong>
              <ul>
                {manualSummary.effects[key].map((effect, index) => (
                  <li key={`${key}-${index}`}>
                    <span>{effect.label}</span>
                    <span>{effect.value}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className={styles.gridTwo}>
        <section className={styles.panel}>
          <h4>Puntos de golpe</h4>
          <ul className={styles.metricsList}>
            <li>
              <span>PG raciales</span>
              <strong>{racialHp}</strong>
            </li>
            <li>
              <span>PG de la coraza</span>
              <strong>{armorHp}</strong>
            </li>
            <li>
              <span>PG totales</span>
              <strong>{totalHp}</strong>
            </li>
            <li>
              <span>Reducción al daño</span>
              <strong>{damageReduction}</strong>
            </li>
            <li>
              <span>Recuperación al descansar</span>
              <strong>
                {restRecoveryBonus ? `+${restRecoveryBonus} PG` : 'Sin bonificación'}
              </strong>
            </li>
          </ul>
        </section>

        <section className={styles.panel}>
          <h4>Estadísticas de combate</h4>
          <div className={styles.statsGrid}>
            {combatStats.map((entry) => (
              <article key={entry.label} className={styles.statCard}>
                <p>{entry.label}</p>
                <strong>
                  {['iniciativa', 'reduccionDefensaEnemiga'].includes(entry.key)
                    ? // these stats are better when lower: show '-' prefix for positive improvements
                      (entry.value > 0 ? `-${entry.value}` : `${entry.value}`)
                    : entry.value}
                </strong>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.gridTwo}>
        <section className={styles.panel}>
          <h4>Habilidades de percepción</h4>
          <p className={styles.helperText}>Base: {ready && snapshot ? snapshot.combat.percepcionChequeo : '—'}</p>
          <table className={styles.skillTable}>
            <tbody>
              {perceptionValues.map((skill) => (
                <tr key={skill.label}>
                  <td>{skill.label}</td>
                  <td>{skill.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className={styles.panel}>
          <h4>Habilidades de liderazgo</h4>
          <p className={styles.helperText}>Base: {ready && snapshot ? snapshot.combat.liderazgoChequeo : '—'}</p>
          <table className={styles.skillTable}>
            <tbody>
              {leadershipValues.map((skill) => (
                <tr key={skill.label}>
                  <td>{skill.label}</td>
                  <td>{skill.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section className={styles.panel}>
        <h4>Pericias</h4>
        {skillEntries.length ? (
          <ul className={styles.badgeList}>
            {skillEntries.map((skill) => (
              <li key={skill.slug}>
                <span>{skill.name}</span>
                <strong>d20 + {skill.rating}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>Aún no seleccionaste pericias.</p>
        )}
      </section>

      <div className={styles.gridTwo}>
        <section className={styles.panel}>
          <h4>Estilos de lucha</h4>
          <p className={styles.helperText}>Seleccionado: {fightingStyleLabel}</p>
          <ul className={styles.checkboxList}>
            {catalogs.fightingStyles.map((style) => {
              const checked = style.slug === character.fightingStyle;
              return (
                <li key={style.slug} data-checked={checked}>
                  <span>{style.name}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section className={styles.panel}>
          <h4>Especializaciones en armas</h4>
          {character.weaponSpecialization ? (
            <p className={styles.highlight}>{selectedMastery}</p>
          ) : (
            <p className={styles.empty}>Selecciona un arma predilecta para habilitar la especialización.</p>
          )}
        </section>
      </div>

      <div className={styles.gridTwo}>
        <section className={styles.panel}>
          <h4>Ventajas</h4>
          {selectedAdvantages.length ? (
            <ul className={styles.textList}>
              {selectedAdvantages.map((advantage) => (
                <li key={advantage.slug}>
                  <strong>{advantage.name}</strong>
                  <p>{advantage.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>Sin ventajas seleccionadas.</p>
          )}
        </section>
        <section className={styles.panel}>
          <h4>Desventajas</h4>
          {selectedDisadvantages.length ? (
            <ul className={styles.textList}>
              {selectedDisadvantages.map((entry) => (
                <li key={entry.slug}>
                  <strong>{entry.name}</strong>
                  <p>{entry.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>Sin desventajas seleccionadas.</p>
          )}
        </section>
      </div>

      <section className={styles.panel}>
        <h4>Equipo</h4>
        {equipmentEntries.length ? (
          <div className={styles.table}>
            <div className={styles.tableHead}>
              <span>Ítem</span>
              <span>Tamaño</span>
              <span>Valor</span>
              <span>Modificadores</span>
            </div>
            {equipmentEntries.map((item) => (
              <div key={item.slug} className={styles.tableRow}>
                <span>{item.name}</span>
                  <span>{item.size}</span>
                  <span>{item.price ? `${item.price.amount} ${item.price.currency?.toUpperCase()}` : '—'}</span>
                <span className={styles.modifiers}>
                  {item.modifiers.length
                    ? item.modifiers.map((modifier) => (
                        <code key={modifier.id}>{formatModifier(modifier)}</code>
                      ))
                    : '—'}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No hay equipo seleccionado.</p>
        )}
      </section>

      <div className={styles.gridTwo}>
        <section className={styles.panel}>
          <h4>Monturas</h4>
          {character.mounts.length ? (
            <ul className={styles.badgeList}>
              {character.mounts.map((mount) => (
                <li key={mount}>
                  <span>{mount}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>Este personaje no tiene monturas registradas todavía.</p>
          )}
        </section>

        <section className={styles.panel}>
          <h4>Estado de experiencia</h4>
          <ul className={styles.metricsList}>
            <li>
              <span>Experiencia acumulada</span>
              <strong>{character.experience ?? 0}</strong>
            </li>
            <li>
              <span>Reducción / deuda</span>
              <strong>{character.experiencePenalty ?? 0}</strong>
            </li>
          </ul>
        </section>
      </div>

      <section className={styles.panel}>
        <h4>Bonificadores aplicados</h4>
        {ready && snapshot ? (
          <ul className={styles.logList}>
            {debugLog.map((entry) => (
              <li key={entry.modifierId}>
                <span>{entry.reason ?? entry.modifierId}</span>
                <strong>
                  {entry.delta > 0 ? '+' : ''}
                  {entry.delta} en {entry.target}
                </strong>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>
            <p>Los modificadores se mostrarán cuando completes los pasos obligatorios.</p>
          </div>
        )}
      </section>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={handleCreate}
          disabled={!canCreate || createStatus === 'saving'}
        >
          {createStatus === 'saving' ? 'Guardando…' : 'Crear personaje'}
        </button>
        {createMessage && (
          <p className={createStatus === 'success' ? styles.feedbackSuccess : styles.feedbackError}>
            {createMessage}
          </p>
        )}
        {!createMessage && !canCreate && (
          <p>
            Completa nombre de usuario, estilo de lucha y arma predilecta para habilitar la creación.
          </p>
        )}
      </div>
    </div>
  );
}