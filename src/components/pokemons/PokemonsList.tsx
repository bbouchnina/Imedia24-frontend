import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useInfiniteScrollHook from '../../hooks/useInfiniteScrollHook'
import { fetchMorePokemonsRequest, fetchPokemonRequest } from '../../state/_actions'
import { getLoadingSelector, getPokemonsSelector } from '../../state/_selectors'
import { Pokemon } from '../../state/_tsTypes/pokemon_types'
import PokemonCard from './PokemonCard'

const PokemonsList: React.FC = (): React.ReactElement => {
  const pokemons = useSelector(getPokemonsSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPokemonRequest())
  }, [])

  const loading = useSelector(getLoadingSelector)

  const loadMoreData = () => {
    dispatch(fetchMorePokemonsRequest())
  }

  const [isFetching, setIsFetching] = useInfiniteScrollHook(loadMoreData)

  useEffect(() => {
    setIsFetching(loading)
  }, [loading])

  const pokemonsList = pokemons.map((pokemon: Pokemon) => {
    return <PokemonCard pokemon={pokemon} key={pokemon.id} />
  })
  return (
    <>
      <Flex flexWrap={'wrap'} p={10}>
        {pokemonsList}
      </Flex>
      {isFetching && (
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          p={100}
          width='100%'
          flexDirection={'column'}
        >
          Loading ...
        </Flex>
      )}
    </>
  )
}

export default PokemonsList
