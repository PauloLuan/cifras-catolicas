import {
  chakra,
  Box,
  Heading,
  OrderedList,
  Stack,
  HStack,
  Wrap,
  useColorModeValue
} from '@chakra-ui/react'
import { TopMusicItem, TopMusicItemProps } from '../TopMusicItem'
export interface TopMusicListProps {
  musics?: TopMusicItemProps[]
}

export const TopMusicList = ({ musics }: TopMusicListProps) => {
  return (
    <Box flex="1">
      <Heading
        ml={8}
        fontSize="4xl"
        fontWeight="bold"
        color={useColorModeValue('gray.600', 'white')}
      >
        Top Músicas
      </Heading>
      <Wrap spacing={4}>
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
