import { Flex } from '@chakra-ui/react'

export interface TopArtistItemProps {
  name?: string
}

export const TopArtistItem = ({ name }: TopArtistItemProps) => {
  return (
    <Flex>
      <h1 data-testid='top-artist-item'>top-artist-item</h1>
    </Flex>
  )
}
