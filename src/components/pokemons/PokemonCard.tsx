import {
  Tag,
  Avatar,
  Text,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Pokemon } from '../../state/_tsTypes/pokemon_types'
import getTypeColor from '../../state/_utils/helpers'
import PokemonDetailsModal from '../modals/PokemonDetailsModal'

interface PokemoncardProps {
  pokemon: Pokemon
}
const PokemonCard: React.FC<PokemoncardProps> = ({
  pokemon,
}: PokemoncardProps): React.ReactElement => {
  // Modal Data
  const OverlayOne = () => (
    <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  // end modal data

  const [selectedPokemon, setSelectedPokemon] = useState<any>(null)
  const types = pokemon?.types?.map((el: any) => {
    return el?.type?.name
  })

  return (
    <>
      <Flex
        position={'relative'}
        minW={'250pxpx'}
        w={'250px'}
        p={3}
        bgColor={'gray.300'}
        m={2}
        borderRadius={20}
        cursor='pointer'
        _hover={{ bg: 'red.50' }}
        onClick={() => {
          setSelectedPokemon(pokemon)
          onOpen()
        }}
      >
        <Avatar
          size='lg'
          name={pokemon.name}
          src={pokemon.sprites.front_default}
          bg='white'
          mr={6}
        />
        <Flex direction={'column'}>
          <Text>{pokemon.name}</Text>
          <Flex mt={2} wrap={'wrap'}>
            {types.map((type: string, index: number) => {
              return (
                <Tag colorScheme={getTypeColor(type)} borderRadius='full' key={index} mr={1}>
                  {type}{' '}
                </Tag>
              )
            })}
          </Flex>
        </Flex>
        <Tag
          position={'absolute'}
          top={3}
          right={5}
          display={'flex'}
          fontWeight={'bold'}
          opacity={0.4}
        >
          #{pokemon.base_experience}{' '}
        </Tag>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        {overlay}
        <ModalContent>
          <ModalHeader>{selectedPokemon?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PokemonDetailsModal pokemon={selectedPokemon} />
          </ModalBody>
          <ModalFooter>
            {selectedPokemon?.types?.map((el: any, index: number) => {
              return (
                <Tag
                  colorScheme={getTypeColor(el?.type.name)}
                  borderRadius='full'
                  key={index}
                  mr={1}
                >
                  {el?.type?.name}{' '}
                </Tag>
              )
            })}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PokemonCard
