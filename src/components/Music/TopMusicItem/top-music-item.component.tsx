import { Flex } from '@chakra-ui/react'

export interface TopMusicItemProps {
  name?: string
}

export const TopMusicItem = ({ name }: TopMusicItemProps) => {
  return (
    <Flex>
      <h1 data-testid='top-music-item'>top-music-item</h1>
    </Flex>
  )
}
