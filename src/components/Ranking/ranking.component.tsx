import { Flex, Box, Grid, GridItem, SimpleGrid, chakra } from '@chakra-ui/react'
import { TopArtistList } from '@components/Artist'
import { TopMusicList } from '@components/Music'

export interface RankingProps {
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

const Ranking = ({ testId }: RankingProps) => {
  return (
    <Grid w="full" templateColumns="4fr 1fr" gap={4}>
      <TopMusicList {...musicsProps} />
      <TopArtistList {...artistsProps} />
    </Grid>
  )
}

export { Ranking }
