import { ListItem, OrderedList, VStack } from '@chakra-ui/react'
import { Artist } from '@types/Artist'
import { TopArtistItem } from '../TopArtistItem'
export interface TopArtistListProps {
  artists?: Artist[]
}

export const TopArtistList = ({ artists }: TopArtistListProps) => {
  return (
    <OrderedList>
      <VStack>
        {artists?.map((artist, index) => (
          <TopArtistItem
            artistName={artist.nome}
            image={artist.imagem}
            index={index + 1}
            views={32165487}
            key={artist.slug + index}
          />
        ))}
      </VStack>
    </OrderedList>
  )
}
