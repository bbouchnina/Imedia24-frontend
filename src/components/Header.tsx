import { Flex } from '@chakra-ui/react'
import React from 'react'
import LogoComponent from './Logo'

const Header: React.FC = (): React.ReactElement => {


    return (
        <Flex justifyContent={'center'} >
            <LogoComponent/>
        </Flex>
    )
}

export default Header