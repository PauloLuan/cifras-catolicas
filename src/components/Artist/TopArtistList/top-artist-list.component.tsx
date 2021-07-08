import { Flex } from '@chakra-ui/react'

export interface TopArtistListProps {
  name?: string
}

export const TopArtistList = ({ name }: TopArtistListProps) => {
  return (
    <Flex>
      <h1 data-testid='top-artist-list'>top-artist-list</h1>
    </Flex>
  )
}
