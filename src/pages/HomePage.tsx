import { Flex } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import PokemonsList from '../components/pokemons/PokemonsList'

const HomePage: React.FC = (): React.ReactElement => {


    return (
        <>
            
            <Flex alignItems={'center'} direction={'column'}>
                <Header/>
                <PokemonsList/>
            </Flex>
        </>
    )
}

export default HomePage