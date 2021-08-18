import { CifraDetails } from '@components/CifraDetails'
import { Layout } from '@components/Layout'
import { Artist, ArtistListItem } from '@types/Artist'
import axios from 'axios'
import { deburr } from 'lodash'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

const BASE_ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const REVALIDATE_TIME = IS_PRODUCTION ? 60 * 60 : 60 * 5

function wait(ml) {
  return new Promise((resolve) => setTimeout(resolve, ml))
}

export const getStaticProps: GetStaticProps = async (context) => {
  const artistSlug = context?.params?.artist
  const selectedCipherSlug = context?.params?.cipher
  const ENDPOINT = deburr(
    `https://api.musicasparamissa.com.br/cifrascatolicas/artistas/${artistSlug}`
  )
  let artist

  try {
    const artistResponse = await axios.get<Artist>(ENDPOINT)
    artist = artistResponse.data
  } catch (e) {
    wait(500)

    console.log(`Error on Endpoint: ${ENDPOINT}`)
    console.log(e.message)
  }

  if (!artist) return { notFound: true }

  return {
    props: {
      artist,
      artistSlug,
      selectedCipherSlug
    }
    // revalidate: REVALIDATE_TIME
  }
}

export const getStaticPaths: GetStaticPaths<{
  artist: string
  cipher: string
}> = async () => {
  const baseResponse = await axios.get<ArtistListItem[]>(BASE_ENDPOINT)
  const artists = baseResponse.data
  const paths = []

  for await (const artistItem of artists) {
    const ENDPOINT = deburr(
      `https://api.musicasparamissa.com.br/cifrascatolicas/artistas/${artistItem.slug}`
    )

    try {
      const artistResponse = await axios.get<Artist>(ENDPOINT)
      const { musicas } = artistResponse?.data
      musicas?.map((music) => {
        const path = { params: { cipher: music.slug, artist: artistItem.slug } }
        paths.push(path)
      })
    } catch (e) {
      wait(500)

      console.log(`Error on Endpoint: ${ENDPOINT}`)
      console.log(e.message)
    }
  }

  return {
    paths,
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
