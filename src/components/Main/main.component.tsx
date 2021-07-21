import { Spacer } from '@chakra-ui/react'
import { ArtistList } from '@components/Artist'
import { Highlights } from '@components/Highlights'
import { Newsletter } from '@components/Newsletter'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <>
      <Highlights />
      <Spacer />
      <ArtistList />
      <Spacer />
      <Newsletter />
    </>
  )
}

export { Main }
