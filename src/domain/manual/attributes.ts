import { AttributeDefinition, AttributeTables, ThresholdEffect } from './types'

export const ATTRIBUTE_DEFINITIONS: Record<
  AttributeDefinition['code'],
  AttributeDefinition
> = {
  F: {
    code: 'F',
    nombre: 'Fuerza',
    descripcion:
      'Potencia muscular, capacidad para cargar equipo y provocar daño cuerpo a cuerpo.',
    min: 1,
    max: 30,
    tiradaBase: '3D6 + 2',
  },
  R: {
    code: 'R',
    nombre: 'Resistencia',
    descripcion:
      'Representa aguante, sistema inmunológico y resistencia al dolor; influye en PG, PC y recuperación.',
    min: 1,
    max: 30,
    tiradaBase: '3D6 + 2',
  },
  A: {
    code: 'A',
    nombre: 'Agilidad',
    descripcion:
      'Coordinación, equilibrio y velocidad, base para Defensa, Disparos e Iniciativa.',
    min: 1,
    max: 30,
    tiradaBase: '3D6 + 2',
  },
  P: {
    code: 'P',
    nombre: 'Percepción',
    descripcion:
      'Capacidad sensorial y de análisis, utilizada para detectarlo oculto o anticipar amenazas.',
    min: 1,
    max: 30,
    tiradaBase: '3D6 + 2',
  },
  L: {
    code: 'L',
    nombre: 'Liderazgo',
    descripcion:
      'Presencia y carisma para comandar tropas, otorgar moral y coordinar acciones.',
    min: 1,
    max: 30,
    tiradaBase: '3D6 + 2',
  },
  I: {
    code: 'I',
    nombre: 'Inteligencia',
    descripcion:
      'Razonamiento, memoria y dominio de pericias o conjuros, clave para categorías arcanas.',
    min: 1,
    max: 30,
    tiradaBase: '3D6 + 2',
  },
}

const perPoint = (
  stat: ThresholdEffect['stat'],
  aplicaDesde: number,
  cada = 1,
): ThresholdEffect => ({
  stat,
  tipo: 'por_punto',
  valor: 1,
  aplicaDesde,
  cada,
})

export const ATTRIBUTE_TABLES: AttributeTables = {
  F: [
    { atributo: 'F', min: 1, max: 1, penalizacion: '-2 Ataque / -5 Daño' },
    { atributo: 'F', min: 2, max: 2, penalizacion: '-2 Ataque / -4 Daño' },
    { atributo: 'F', min: 3, max: 3, penalizacion: '-1 Ataque / -4 Daño' },
    { atributo: 'F', min: 4, max: 4, penalizacion: '-1 Ataque / -3 Daño' },
    { atributo: 'F', min: 5, max: 5, penalizacion: '-2 Daño' },
    { atributo: 'F', min: 6, max: 6, penalizacion: '-1 Daño' },
    {
      atributo: 'F',
      min: 16,
      descripcion: '+1 PG de daño por punto a partir de 16',
      efectos: [perPoint('danio', 16)],
    },
    {
      atributo: 'F',
      min: 18,
      descripcion: '+1 Ataque por punto a partir de 18',
      efectos: [perPoint('ataque', 18)],
    },
  ],
  R: [
    { atributo: 'R', min: 1, max: 1, penalizacion: '-6 PG / -3 PC' },
    { atributo: 'R', min: 2, max: 2, penalizacion: '-5 PG / -2 PC' },
    { atributo: 'R', min: 3, max: 3, penalizacion: '-4 PG / -2 PC' },
    { atributo: 'R', min: 4, max: 4, penalizacion: '-3 PG / -1 PC' },
    { atributo: 'R', min: 5, max: 5, penalizacion: '-2 PG / -1 PC' },
    { atributo: 'R', min: 6, max: 6, penalizacion: '-1 PG' },
    {
      atributo: 'R',
      min: 13,
      descripcion:
        '+1 PG, +1 PC y +1 PG en descanso por punto a partir de 13',
      efectos: [
        perPoint('pg', 13),
        perPoint('pc', 13),
        { stat: 'pg', tipo: 'por_punto', valor: 1, aplicaDesde: 13 },
      ],
    },
  ],
  A: [
    {
      atributo: 'A',
      min: 1,
      max: 1,
      penalizacion: '-5 Iniciativa / -4 Defensa y Disparos / -4 AR',
    },
    {
      atributo: 'A',
      min: 2,
      max: 2,
      penalizacion: '-5 Iniciativa / -3 Defensa y Disparos / -3 AR',
    },
    {
      atributo: 'A',
      min: 3,
      max: 3,
      penalizacion: '-4 Iniciativa / -3 Defensa y Disparos / -3 AR',
    },
    {
      atributo: 'A',
      min: 4,
      max: 4,
      penalizacion: '-4 Iniciativa / -2 Defensa y Disparos / -2 AR',
    },
    {
      atributo: 'A',
      min: 5,
      max: 5,
      penalizacion: '-2 Iniciativa / -2 Defensa y Disparos / -2 AR',
    },
    {
      atributo: 'A',
      min: 6,
      max: 6,
      penalizacion: '-1 Iniciativa / -1 Defensa y Disparos / -1 AR',
    },
    {
      atributo: 'A',
      min: 13,
      descripcion: '+1 Iniciativa cada 2 puntos desde 13',
      efectos: [perPoint('iniciativa', 13, 2)],
    },
    {
      atributo: 'A',
      min: 15,
      descripcion: '+1 Defensa cada 3 puntos desde 15',
      efectos: [perPoint('defensa', 15, 3)],
    },
    {
      atributo: 'A',
      min: 17,
      descripcion: '+1 Defensa espontánea cada 3 puntos desde 17',
    },
    {
      atributo: 'A',
      min: 18,
      descripcion: '+1 Disparos cada punto desde 18',
    }

  ],
}

