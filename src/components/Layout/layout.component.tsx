import { Navbar, Footer } from '..'
import { Box } from '@chakra-ui/react'
import { Main } from 'components/Main'

export interface LayoutProps {
  name?: string
}

export const Layout = ({ name }: LayoutProps) => {
  return (
    <Box w="full" h="full">
      <Navbar />
      <Main />
      <Footer />
    </Box>
  )
}
