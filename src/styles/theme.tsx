import {
  extendTheme,
  theme,
  withDefaultColorScheme,
  withDefaultProps
} from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import '@fontsource/roboto'

const fonts = {
  body: 'Roboto',
  mono: `'Menlo', monospace`
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const customTheme = extendTheme(
  {
    config: { initialColorMode: 'light', useSystemColorMode: false },
    fonts,
    breakpoints,
    shadows: {
      outline: `0 0 0 3px ${theme.colors.orange['400']}`
    }
  },
  withDefaultColorScheme({
    colorScheme: 'orange'
  })
)

export default customTheme
