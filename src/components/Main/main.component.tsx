import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { TopArtistList } from '@components/Artist'
import { TopMusicList } from '@components/Music'

export interface MainProps {
  testId?: string
}

const artistsProps = {
  artists: [
    {
      nome: 'teste',
      imagem: '',
      slug: 'teste-123',
      info: ''
    },
    {
      nome: 'teste',
      imagem: '',
      slug: 'teste-123',
      info: ''
    },
    {
      nome: 'teste',
      imagem: '',
      slug: 'teste-123',
      info: ''
    },
    {
      nome: 'teste',
      imagem: '',
      slug: 'teste-123',
      info: ''
    },
    {
      nome: 'teste',
      imagem: '',
      slug: 'teste-123',
      info: ''
    }
  ]
}

const musicsProps = {
  musics: [
    {
      index: 1,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 2,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 3,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 4,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 5,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 6,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 7,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 8,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 9,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 10,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    },
    {
      index: 11,
      artistName: 'Harpa Cristã',
      musicName: 'Porque ele vive'
    }
  ]
}

const Main = ({ testId }: MainProps) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={2} p={150}>
      <GridItem colSpan={4}>
        <SimpleGrid columns={[1, 2, 3, 4]} gap="2" minChildWidth={300}>
          <TopMusicList {...musicsProps} />
        </SimpleGrid>
      </GridItem>
      <GridItem colSpan={1}>
        <SimpleGrid columns={1} gap="2" minChildWidth={300}>
          <TopArtistList {...artistsProps} />
        </SimpleGrid>
      </GridItem>
    </Grid>
  )
}

export { Main }
