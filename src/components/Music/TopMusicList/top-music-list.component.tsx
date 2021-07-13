import { Box, Heading, useColorModeValue, Wrap } from '@chakra-ui/react'
import { TopMusicItem, TopMusicItemProps } from '../TopMusicItem'
export interface TopMusicListProps {
  musics?: TopMusicItemProps[]
}

export const TopMusicList = ({ musics }: TopMusicListProps) => {
  return (
    <Box w="full" flex="1">
      <Heading
        ml={[1, 8]}
        fontSize="4xl"
        fontWeight="bold"
        color={useColorModeValue('gray.600', 'white')}
      >
        Top Músicas
      </Heading>
      <Wrap spacing={[2, 4]}>
        {musics?.map((music, index) => (
          <TopMusicItem
            artistName={music.artistName}
            musicName={music.musicName}
            index={index + 1}
            key={music.musicName + index}
          />
        ))}
      </Wrap>
    </Box>
  )
}
