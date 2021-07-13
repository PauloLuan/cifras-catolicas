import { Box, Heading, useColorModeValue, Wrap } from '@chakra-ui/react'
import { Artist } from '@types/Artist'
import { TopArtistItem } from '../TopArtistItem'
export interface TopArtistListProps {
  artists?: Artist[]
}

export const TopArtistList = ({ artists }: TopArtistListProps) => {
  return (
    <Box flex="1">
      <Heading
        m={2}
        fontSize="4xl"
        fontWeight="bold"
        color={useColorModeValue('gray.600', 'white')}
      >
        Top Artistas
      </Heading>
      <Wrap spacing={[2, 4]}>
        {artists?.map((artist, index) => (
          <TopArtistItem
            artistName={artist.nome}
            image={artist.imagem}
            index={index + 1}
            views={32165487}
            key={artist.slug + index}
          />
        ))}
      </Wrap>
    </Box>
  )
}
