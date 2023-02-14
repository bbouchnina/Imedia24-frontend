import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getloading = (state: AppState) => state.pokemons.loading

const getPokemons = (state: AppState) => state.pokemons.pokemons

const getError = (state: AppState) => state.pokemons.error

const getNext = (state: AppState) => state.pokemons.next

export const getPokemonsSelector = createSelector(getPokemons, (pokemons) => pokemons)

export const getNextLinkSelector = createSelector(getNext, (pokemons) => pokemons)

export const getLoadingSelector = createSelector(getloading, (loading) => loading)

export const getErrorSelector = createSelector(getError, (error) => error)
