import { FETCH_POKEMONS_REQUEST, FETCH_MORE_POKEMONS_REQUEST, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE, FETCH_MORE_POKEMONS_SUCCESS, FETCH_MORE_POKEMONS_FAILURE } from '../_constants/redux_actions';
import { FetchMorePokemonsFailure, FetchMorePokemonsRequest, FetchMorePokemonsSuccess, FetchPokemonsFailure, FetchPokemonsFailurePayload, FetchPokemonsRequest, FetchPokemonsSuccess, FetchPokemonsSuccessPayload } from '../_tsTypes/sideTypes';


  
  export const fetchPokemonRequest = (): FetchPokemonsRequest => ({
    type: FETCH_POKEMONS_REQUEST,
  });

  export const fetchMorePokemonsRequest = (): FetchMorePokemonsRequest => ({
    type: FETCH_MORE_POKEMONS_REQUEST,
  });
  
  export const fetchPokemonSuccess = (
    payload: FetchPokemonsSuccessPayload
  ): FetchPokemonsSuccess => ({
    type: FETCH_POKEMONS_SUCCESS,
    payload,
  });
  
  export const fetchPokemonFailure = (
    payload: FetchPokemonsFailurePayload
  ): FetchPokemonsFailure => ({
    type: FETCH_POKEMONS_FAILURE,
    payload,
  });

  export const fetchMorePokemonSuccess = (
    payload: FetchPokemonsSuccessPayload
  ): FetchMorePokemonsSuccess => ({
    type: FETCH_MORE_POKEMONS_SUCCESS,
    payload,
  });
  
  export const fetchMorePokemonFailure = (
    payload: FetchPokemonsFailurePayload
  ): FetchMorePokemonsFailure => ({
    type: FETCH_MORE_POKEMONS_FAILURE,
    payload,
  });