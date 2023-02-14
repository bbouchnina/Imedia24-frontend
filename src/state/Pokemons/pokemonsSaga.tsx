import { all, call, delay, put, select, takeLatest } from 'redux-saga/effects'
import { AppState } from '../rootReducer'
import { fetchPokemonSuccess, fetchPokemonFailure, fetchMorePokemonSuccess } from '../_actions'
import {
  FETCH_POKEMONS_REQUEST,
  FETCH_MORE_POKEMONS_REQUEST,
  POKEAPI_URL,
} from '../_constants/redux_actions'
import { getNextLinkSelector } from '../_selectors'
import { Pokemon } from '../_tsTypes/pokemon_types'
import { fetchPokemonCall, firstFetchCall } from '../_utils/api'

export function* fetchPokemonsSaga() {
  try {
    const response: { pokemons: Pokemon[]; next: string } = yield call(firstFetchCall, POKEAPI_URL)
    const pokemons: Pokemon[] = yield all(
      response.pokemons.map((pokemon: any) => {
        return call(fetchPokemonCall, pokemon.url)
      }),
    )
    yield put(
      fetchPokemonSuccess({
        pokemons: pokemons,
        next: response.next,
      }),
    )
  } catch (e: any) {
    yield put(
      fetchPokemonFailure({
        error: e.message,
      }),
    )
  }
}

function* fetchMorePokemonsSaga() {
  try {
    const nextLink: AppState = yield select(getNextLinkSelector)
    console.log(nextLink)
    const url: string = nextLink === null ? 'https://pokeapi.co/api/v2/pokemon' : '' + nextLink
    const response: { pokemons: Pokemon[]; next: string } = yield call(firstFetchCall, url)
    yield delay(1000)
    const pokemons: Pokemon[] = yield all(
      response.pokemons.map((pokemon: any) => {
        return call(fetchPokemonCall, pokemon.url)
      }),
    )
    yield put(
      fetchMorePokemonSuccess({
        pokemons: pokemons,
        next: response.next,
      }),
    )
  } catch (e: any) {
    yield put(
      fetchPokemonFailure({
        error: e.message,
      }),
    )
  }
}

function* pokemonsSaga() {
  yield all([takeLatest(FETCH_POKEMONS_REQUEST, fetchPokemonsSaga)])
  yield all([takeLatest(FETCH_MORE_POKEMONS_REQUEST, fetchMorePokemonsSaga)])
}

export default pokemonsSaga
