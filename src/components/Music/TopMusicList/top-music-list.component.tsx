import { OrderedList, HStack } from '@chakra-ui/react'
import { TopMusicItem, TopMusicItemProps } from '../TopMusicItem'
export interface TopMusicListProps {
  musics?: TopMusicItemProps[]
}

export const TopMusicList = ({ musics }: TopMusicListProps) => {
  return (
    <>
      {musics?.map((music, index) => (
        <TopMusicItem
          artistName={music.artistName}
          musicName={music.musicName}
          index={index + 1}
          key={music.musicName + index}
        />
      ))}
    </>
  )
}
