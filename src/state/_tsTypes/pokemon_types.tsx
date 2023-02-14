export interface Pokemon {
  id: number
  height: number
  name: string
  base_experience: number
  sprites: { front_default: string }
  types: {
    slot: number
    type: PokemonType
  }[]
  abilities: {
    ability: {
      name: string
    }
  }[]
}

export interface PokemonType {
  name: string
  url: string
}

export interface GlobalState {
  loading: boolean
  pokemons: Pokemon[]
  error: string | null
  next: string | null
}
