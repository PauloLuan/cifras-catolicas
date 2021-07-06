import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Footer, Navbar } from '..'

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="full" h="full">
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}
