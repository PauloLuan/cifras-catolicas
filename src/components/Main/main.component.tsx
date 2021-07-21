import { Spacer, VStack } from '@chakra-ui/react'
import { ArtistList } from '@components/Artist'
import { Highlights } from '@components/Highlights'
import { Newsletter } from '@components/Newsletter'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <VStack
      p={[0, 16]}
      spacing={[4, 16]}
      maxW={'6xl'}
      m={[4, '0 auto']}
      data-testid={testId}
    >
      <Highlights />
      <Spacer />
      <ArtistList />
      <Spacer />
      <Newsletter />
    </VStack>
  )
}

export { Main }
