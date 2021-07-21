import { Box, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Footer } from '@components/Footer'
import { Navbar } from '@components/Navbar'

export interface LayoutProps {
  testId?: string
  children?: ReactNode
}

export const Layout = ({
  testId = 'main-component',
  children
}: LayoutProps) => {
  return (
    <Box w="full" h="full">
      <Navbar />
      <VStack
        p={[0, 16]}
        spacing={[4, 16]}
        maxW={'6xl'}
        m={[4, '0 auto']}
        data-testid={testId}
      >
        {children}
      </VStack>
      <Footer />
    </Box>
  )
}
