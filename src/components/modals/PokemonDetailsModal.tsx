import { Text, Flex, Image, Tag } from '@chakra-ui/react'
import React from 'react'
import { Pokemon } from '../../state/_tsTypes/pokemon_types'

interface PokemoncardProps {
  pokemon?: Pokemon
}
const PokemonDetailsModal: React.FC<PokemoncardProps> = ({
  pokemon,
}: PokemoncardProps): React.ReactElement => {
  const abilities = pokemon?.abilities.map((el: any, index: number) => {
    return el?.ability?.name
  })
  return (
    <Flex position={'relative'}>
      <Tag position={'absolute'} top={0} right={0} colorScheme={'whatsapp'}>
        #{pokemon?.base_experience}
      </Tag>
      <Image
        boxSize='200px'
        fallbackSrc={pokemon?.sprites?.front_default}
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
        alt={pokemon?.name}
      />
      <Flex ml={7} direction={'column'}>
        <Text fontWeight={'bold'}>Height :</Text>
        <Text ml={5}>{pokemon?.height}</Text>
        <Text mt={5} fontWeight={'bold'}>
          Abilities :
        </Text>
        {abilities?.map((el, index) => {
          return (
            <Text ml={5} key={index}>
              {el}
            </Text>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default PokemonDetailsModal
