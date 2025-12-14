export interface Character {
    userName: string,
    name: string,
    level: number,
    alignment: string,
    race: string,
    raceType: string,
    category: string,
    secondaryCategory: string | null,
    specialty: string,
    attributes: Attributes,
    descripcion: GeneralDescription,
    countryOfOrigin: string,
    stats: Stats,
    advantages: string[],
    disadvantages: string[],
    equipment: string[],
    equipmentQuantities?: Record<string, number>,
    mounts: string[],
    fightingStyle: string | null,
    weaponSpecialization: string | null,
    skills: string[],
    fightingStylePerks?: string[],
    skillRanks: Record<string, number>,
    experience: number,
    experiencePenalty: number,
    step: number,
    money?: {
        mc: number;
        mp: number;
        mo: number;
    };
    equipmentPrices?: Record<string, { currency: 'mc' | 'mp' | 'mo'; amount: number }>;
    specialPerks?: SpecialPerks;
}

interface Attributes{
    fuerza: number,
    resistencia: number,
    agilidad: number,
    percepcion: number,
    liderazgo: number,
    inteligencia: number,
    belleza: number,
    categoriaSocial: number
}

interface GeneralDescription {
    altura: number,
    peso: number,
    edad: number,
    rasgos: string,
    cabello: string,
    ojos: string,
    piel: string,
    genero: string,
}

interface Stats {
    ataque: number,
    disparos: number,
    probCritico: number,
    modAlDaño: number,
    defensa: number,
    defEspontanea: number,
    penDef: number,
    reduccionDano: number,
    iniciativa: number,
    AR: number,
    PG: number,
    PC: number,
    PM: number,
    concentracion: number,
    detectarMagia: number,
    habilidades: Habilidades, 
    habilidadesPercepcion: HabilidadesDePercepcion[],
    habilidadesLiderazgo: HabilidadesDeLiderazgo[]
}

interface Habilidades{
    deP: HabilidadesDePercepcion,
    deL: HabilidadesDeLiderazgo
}

interface HabilidadesDePercepcion{
    [key: string]: number
}

interface HabilidadesDeLiderazgo{
    [key: string]: number
}

interface SpecialPerks {
    ignoreHeavyArmorPenalty?: boolean;
    fireImmunity?: boolean;
    coldInmunity?: boolean;
    lightningInmunity?: boolean;
    poisonInmunity?: boolean;
    fireVulnerability?: boolean;
    coldVulnerability?: boolean;
    lightningVulnerability?: boolean;
    poisonVulnerability?: boolean;
    waterBreathing?: boolean;
    nightVision?: boolean;
    isUndead?: boolean;
}
    