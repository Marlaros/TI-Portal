export type AttributeCode = 'F' | 'R' | 'A' | 'P' | 'L' | 'I'

export interface AttributeDefinition {
  code: AttributeCode
  nombre: string
  descripcion: string
  min: number
  max: number
  tiradaBase: string
}

export type CalculatedStat =
  | 'ataque'
  | 'danio'
  | 'defensa'
  | 'iniciativa'
  | 'ar'
  | 'pg'
  | 'pc'
  | 'pm'
  | 'criticos'
  | 'concentracion'
  | 'habilidad_percepcion'
  | 'habilidad_liderazgo'

export interface ThresholdEffect {
  stat: CalculatedStat
  tipo: 'fijo' | 'por_punto' | 'multiplicador'
  valor: number
  aplicaDesde?: number
  cada?: number
}

export interface ThresholdModifier {
  atributo: AttributeCode
  min: number
  max?: number
  penalizacion?: string
  efectos?: ThresholdEffect[]
  descripcion?: string
}

export interface AttributeTables {
  [code: string]: ThresholdModifier[]
}

export interface RuleContext {
  atributos: Record<AttributeCode, number>
}

export interface StatComputationResult {
  base: number
  bonificadores: ThresholdEffect[]
  total: number
}

