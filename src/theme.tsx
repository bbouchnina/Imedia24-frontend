// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    poison: {
      50: '#8318F2',
      100: '#CA46F5',
      //   500: '#fff',
    },
    rock: {
      100: '#c0c0c0',
    },
    white: {
      100: '#fff',
    },
  },
})

export default theme
