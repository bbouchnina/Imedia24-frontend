import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  FETCH_MORE_POKEMONS_REQUEST,
  FETCH_MORE_POKEMONS_SUCCESS,
  FETCH_MORE_POKEMONS_FAILURE,
} from '../_constants/redux_actions'
import { Pokemon } from './pokemon_types'

export interface FetchPokemonsSuccessPayload {
  pokemons: Pokemon[]
  next: string | null
}
export interface FetchPokemonsFailurePayload {
  error: string
}

export interface FetchPokemonsRequest {
  type: typeof FETCH_POKEMONS_REQUEST
}
export type FetchPokemonsSuccess = {
  type: typeof FETCH_POKEMONS_SUCCESS
  payload: FetchPokemonsSuccessPayload
}
export type FetchPokemonsFailure = {
  type: typeof FETCH_POKEMONS_FAILURE
  payload: FetchPokemonsFailurePayload
}

export interface FetchMorePokemonsRequest {
  type: typeof FETCH_MORE_POKEMONS_REQUEST
}
export type FetchMorePokemonsSuccess = {
  type: typeof FETCH_MORE_POKEMONS_SUCCESS
  payload: FetchPokemonsSuccessPayload
}
export type FetchMorePokemonsFailure = {
  type: typeof FETCH_MORE_POKEMONS_FAILURE
  payload: FetchPokemonsFailurePayload
}

export type PokemonActions =
  | FetchPokemonsRequest
  | FetchPokemonsSuccess
  | FetchPokemonsFailure
  | FetchMorePokemonsRequest
  | FetchMorePokemonsSuccess
  | FetchMorePokemonsFailure
