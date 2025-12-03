import {
  ATTRIBUTE_TABLES,
  ATTRIBUTE_DEFINITIONS,
} from './attributes'
import {
  AttributeCode,
  CalculatedStat,
  RuleContext,
  StatComputationResult,
  ThresholdEffect,
  ThresholdModifier,
} from './types'

const inRange = (value: number, table: ThresholdModifier) => {
  const upperBound = table.max ?? Number.POSITIVE_INFINITY
  return value >= table.min && value <= upperBound
}

const countSteps = (
  value: number,
  aplicaDesde: number,
  cada: number | undefined,
) => {
  if (value < aplicaDesde) return 0
  const step = cada ?? 1
  const span = value - aplicaDesde
  return Math.floor(span / step) + 1
}

const computeDelta = (
  value: number,
  effect: ThresholdEffect,
) => {
  if (effect.tipo === 'fijo') return effect.valor
  if (effect.tipo === 'multiplicador') {
    return value * effect.valor
  }
  const startsAt = effect.aplicaDesde ?? value
  const steps = countSteps(value, startsAt, effect.cada)
  return steps * effect.valor
}

const ensureResult = (
  results: Partial<Record<CalculatedStat, StatComputationResult>>,
  stat: CalculatedStat,
) => {
  if (!results[stat]) {
    results[stat] = { base: 0, bonificadores: [], total: 0 }
  }
  return results[stat]!
}

const applyEffect = (
  results: Partial<Record<CalculatedStat, StatComputationResult>>,
  stat: CalculatedStat,
  delta: number,
  effect: ThresholdEffect,
) => {
  if (delta === 0) return
  const target = ensureResult(results, stat)
  target.bonificadores.push({ ...effect, valor: delta })
  target.total += delta
}

export const evaluateAttributes = (context: RuleContext) => {
  const output: Partial<Record<CalculatedStat, StatComputationResult>> = {}
  (Object.keys(ATTRIBUTE_DEFINITIONS) as AttributeCode[]).forEach((code) => {
    const value = context.atributos[code]
    const tables = ATTRIBUTE_TABLES[code] ?? []
    tables
      .filter((row) => inRange(value, row))
      .forEach((row) => {
        row.efectos?.forEach((effect) => {
          const delta = computeDelta(value, effect)
          applyEffect(output, effect.stat, delta, effect)
        })
      })
  })
  return output
}

