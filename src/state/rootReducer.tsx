import { combineReducers } from 'redux';

import pokemonsReducer from './Pokemons/pokemonsReducer'

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;