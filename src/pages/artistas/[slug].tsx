import { Box, Text } from '@chakra-ui/react'
import { ArtistDetails } from '@components/Artist/ArtistDetails'
import { Layout } from '@components/Layout'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

// const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug
  const artist = { slug }

  return {
    props: {
      artist
    }
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

function ArtistPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout>
      <ArtistDetails />
    </Layout>
  )
}

export default ArtistPage
