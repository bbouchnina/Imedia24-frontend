import { call } from 'redux-saga/effects'
import { fetchPokemonsSaga } from '../Pokemons/pokemonsSaga'
import { POKEAPI_URL } from '../_constants/redux_actions'
import { firstFetchCall } from '../_utils/api'

describe('testing sagas - function calls', () => {
  let generator: any = null
  beforeAll(() => {
    generator = fetchPokemonsSaga()
  })

  test('should call the sampleOne function', () => {
    const expected = call(firstFetchCall, POKEAPI_URL)
    const actual = generator.next()
    expect(actual.value).toEqual(expected)
  })
})
