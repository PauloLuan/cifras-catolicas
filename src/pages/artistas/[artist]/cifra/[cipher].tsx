import { Text } from '@chakra-ui/react'
import { CifraDetails } from '@components/CifraDetails'
import { Layout } from '@components/Layout'
import { Artist, ArtistListItem } from '@types/Artist'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

const BASE_ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const REVALIDATE_TIME = IS_PRODUCTION ? 60 * 60 : 60 * 5

export const getStaticProps: GetStaticProps = async (context) => {
  const artistSlug = context?.params?.artist
  const selectedCipherSlug = context?.params?.cipher
  const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas/${artistSlug}`

  const artistResponse = await axios.get<Artist>(ENDPOINT)
  const artist = artistResponse.data

  return {
    props: {
      artist,
      artistSlug,
      selectedCipherSlug
    }
    // revalidate: REVALIDATE_TIME
  }
}

export const getStaticPaths: GetStaticPaths<{ cifra: string }> = async () => {
  // const baseResponse = await axios.get<ArtistListItem[]>(BASE_ENDPOINT)
  // const artists = baseResponse.data

  // const paths = artists.map((artist) => {
  //   return { params: { cifra: artist.slug } }
  // })

  return {
    paths: [],
    fallback: 'blocking'
  }
}

function CifraPage({
  artist,
  selectedCipherSlug
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <CifraDetails artist={artist} selectedSlug={selectedCipherSlug} />
    </Layout>
  )
}

export default CifraPage
