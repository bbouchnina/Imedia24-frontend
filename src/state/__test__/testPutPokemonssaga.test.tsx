import { put } from 'redux-saga/effects'
import { fetchPokemonsSaga } from '../Pokemons/pokemonsSaga'

import { fetchPokemonSuccess } from '../_actions'

describe('testing sagas - dispatching actions', () => {
  let generator: any = null
  beforeAll(() => {
    generator = fetchPokemonsSaga()
  })

  test('should call the sampleCalledAction', () => {
    const expected = put(
      fetchPokemonSuccess({
        pokemons: [],
        next: '',
      }),
    )
    const actual = generator.next()

    expect(actual.value).toEqual(expected)
  })
})
