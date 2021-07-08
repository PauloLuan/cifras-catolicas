import { Text } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import { Artist } from '@types/Artist'
import { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug
  const artist = { slug }

  return {
    props: {
      artist
    }
  }
}

function ArtistPage({
  artist
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout>
      <Text>Artista Slug: {slug}</Text>
    </Layout>
  )
}

export default ArtistPage
