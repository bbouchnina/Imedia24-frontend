import { Box,Image } from '@chakra-ui/react'
import React from 'react'

import logo from '../assets/pokemonsLogo.png'


const LogoComponent :React.FC = ():React.ReactElement => {

    return (
        <>
        <Box width={400} flexDirection={'column'} display={'flex'}>
            <Image src={logo} alt='Pokemons Logo' w={300} />
        </Box>
        </>
    )
}

export default LogoComponent



