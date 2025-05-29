export interface SuperHero {
  id: number
  slug: string
  name: string
  images: ImageSet
  biography: Biography
  appearance: Appearance
  work: Work
  connections: Connections
  powerstats: Powerstats
}

export interface ImageSet {
  xs: string
  sm: string
  md: string
  lg: string
}

export interface Biography {
  fullName: string
  alterEgos: string
  aliases: string[]
  placeOfBirth: string
  firstAppearance: string
  publisher: string
  alignment: string
}

export interface Appearance {
  gender: string
  race: string | null
  height: [string, string]
  weight: [string, string]
  eyeColor: string
  hairColor: string
}

export interface Work {
  occupation: string
  base: string
}

export interface Connections {
  groupAffiliation: string
  relatives: string
}

export interface Powerstats {
  intelligence: number
  strength: number
  speed: number
  durability: number
  power: number
  combat: number
}
