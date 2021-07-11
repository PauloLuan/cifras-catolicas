import { VStack, Spacer } from '@chakra-ui/react'
import { Newsletter } from '@components/Newsletter'
import { Ranking } from '@components/Ranking'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <VStack p={16} spacing={16}>
      <Spacer />
      <Ranking />
      <Spacer />
      <Newsletter />
    </VStack>
  )
}

export { Main }
