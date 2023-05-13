export interface Character {
    name: string,
    race: string,
    raceType: string,
    category: string,
    specialty: string,
    attributes: Attributes,
    descripcion: GeneralDescription,
    stats: Stats,
    step: number,
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
    modAlDaño: number,
    defensa: number,
    defEspontanea: number,
    penDef: number,
    iniciativa: number,
    AR: number,
    PG: number,
    PC: number,
    PM: number,
    concentracion: number,
    detectarMagia: number,
    habilidades: Habilidades, 
}

/*interface GenStats{
    [key: string]: number
}*/

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