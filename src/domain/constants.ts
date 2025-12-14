export const ATTRIBUTE_KEYS = [
  'fuerza',
  'resistencia',
  'agilidad',
  'percepcion',
  'liderazgo',
  'inteligencia'
  , 'belleza', 'categoriaSocial'
] as const;

export type AttributeKey = (typeof ATTRIBUTE_KEYS)[number];

export const RESOURCE_KEYS = [
  'pg',
  'pc',
  'pm',
  'recuperacionPg',
  'advantagePoints',
  'skillPoints',
  'xpModifier'
] as const;
export type ResourceKey = (typeof RESOURCE_KEYS)[number];

export const COMBAT_STAT_KEYS = [
  'ataque',
  'ataqueDistancia',
  'dano',
  'critico',
  'defensa',
  'armadura',
  'defensaEspontanea',
  'reduccionDefensaEnemiga',
  'iniciativa',
  'concentracion',
  'percepcionChequeo',
  'liderazgoChequeo',
  'valentia',
  'intimidar',
  'hablarMasas',
  'negociarRogar',
  'adular',
  'alerta',
  'climaTerrenos',
  'detectarRuidos',
  'detectarTrampas',
  'observacion',
  'orientacion',
  'sospecha',
  'rastreo',
  'detectarMagia'
] as const;

export type CombatStatKey = (typeof COMBAT_STAT_KEYS)[number];

export const DESCRIPTION_FIELDS = [
  'nombre',
  'nivel',
  'categoriaPrincipal',
  'categoriaSecundaria',
  'raza',
  'alineamiento',
  'estatusSocial',
  'paisOrigen'
] as const;

export type DescriptionField = (typeof DESCRIPTION_FIELDS)[number];

export const FIGHTING_STYLE_KEYS = [
  'sinArmas',
  'armaUnaMano',
  'armaDeAsta',
  'armaDosManos',
  'dosArmas',
  'armaYEscudo',
  'arcosBallestas',
  'arrojadizas',
  'montada',
  'sinArmadura'
] as const;

export type FightingStyleKey = (typeof FIGHTING_STYLE_KEYS)[number];

export const RULE_CONTEXT_FLAGS = [
  'montado',
  'sinCoraza',
  'estiloMarcial',
  'aeromago',
  'dualWield',
  'armaPesada'
] as const;

export type RuleContextFlag = (typeof RULE_CONTEXT_FLAGS)[number];

export const ATTRIBUTE_MIN = 1;
export const ATTRIBUTE_MAX = 30;
export const ATTRIBUTE_DEFAULT = 10;

