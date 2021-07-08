import { Flex } from '@chakra-ui/react'

export interface TopMusicListProps {
  name?: string
}

export const TopMusicList = ({ name }: TopMusicListProps) => {
  return (
    <Flex>
      <h1 data-testid='top-music-list'>top-music-list</h1>
    </Flex>
  )
}
