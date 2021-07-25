import {
  Box,
  Divider,
  Heading,
  Icon,
  ListIcon,
  ListItem,
  OrderedList,
  Text
} from '@chakra-ui/react'
import { Artist } from '@types/Artist'
import NextLink from 'next/link'
import { BsMusicNoteList } from 'react-icons/bs'
import { RiMusicLine } from 'react-icons/ri'

export interface DetailsProps {
  artist: Artist
}

const renderMusicList = ({ artist }: DetailsProps): React.ReactNode => {
  return artist.musicas.map((music) => {
    return (
      <>
        <ListItem key={music.slug}>
          <NextLink
            as={`/artistas/${artist.slug}/cifra/${music.slug}`}
            href={`/artistas/${artist.slug}/cifra/[slug]`}
            passHref
            key={`/artistas/${artist.slug}/cifra/${music.slug}`}
          >
            <Text as="a">
              <ListIcon as={RiMusicLine} color="orange.500" />
              {music.nome}
            </Text>
          </NextLink>
        </ListItem>
      </>
    )
  })
}

export const ArtistDetails = ({ artist }: DetailsProps) => {
  return (
    <Box w="full">
      <Heading>
        <Icon m={2} w={10} h={10} as={BsMusicNoteList} color="orange.500" />
        {artist.nome}
      </Heading>
      <Divider m={4} />
      <Text>Músicas:</Text>
      <Divider m={2} />
      <OrderedList spacing={6}>{renderMusicList({ artist })}</OrderedList>
    </Box>
  )
}
