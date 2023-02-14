import { FETCH_POKEMONS_REQUEST, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE, FETCH_MORE_POKEMONS_REQUEST, FETCH_MORE_POKEMONS_SUCCESS, FETCH_MORE_POKEMONS_FAILURE } from '../_constants/redux_actions';
import { GlobalState } from '../_tsTypes/pokemon_types';
import { PokemonActions } from '../_tsTypes/sideTypes';

  const initialState: GlobalState = {
    loading: false,
    pokemons: [],
    error: null,
    next:null,
  };
  
  export default (state = initialState, action: PokemonActions) => {
    switch (action.type) {

      case FETCH_POKEMONS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          loading: false,
          pokemons: action.payload.pokemons,
          error: null,
          next:action.payload.next,
        };
      case FETCH_POKEMONS_FAILURE:
        return {
          ...state,
          loading: false,
          pokemons: [],
          error: action.payload.error,
        };
      case FETCH_MORE_POKEMONS_REQUEST:
        return{
          ...state,
          loading:true,
        };
      case FETCH_MORE_POKEMONS_SUCCESS:
        return{
          ...state,
          loading:false,
          pokemons: [...state.pokemons,...action.payload.pokemons],
          next:action.payload.next
        };
      case FETCH_MORE_POKEMONS_FAILURE:
        return {
          ...state,
          loading: false,
          pokemons: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };