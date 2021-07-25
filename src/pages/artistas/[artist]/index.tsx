import { ArtistDetails } from '@components/Artist/ArtistDetails'
import { Layout } from '@components/Layout'
import { Artist, ArtistListItem } from '@types/Artist'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

const BASE_ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const REVALIDATE_TIME = IS_PRODUCTION ? 60 * 60 : 60 * 5

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.artist
  const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas/${slug}`

  const artistResponse = await axios.get<Artist>(ENDPOINT)
  const artist = artistResponse.data

  return {
    props: {
      artist
    }
    // revalidate: REVALIDATE_TIME
  }
}

export const getStaticPaths: GetStaticPaths<{ artist: string }> = async () => {
  const baseResponse = await axios.get<ArtistListItem[]>(BASE_ENDPOINT)
  const artists = baseResponse.data

  const paths = artists.map((artist) => {
    return { params: { artist: artist.slug } }
  })

  return {
    paths,
    fallback: true
  }
}

function ArtistPage({
  artist
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <ArtistDetails artist={artist} />
    </Layout>
  )
}

export default ArtistPage
