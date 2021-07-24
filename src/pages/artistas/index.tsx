import { Box, Heading, Link, Spinner } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import { ArtistListItem } from '@types/Artist'
import axios from 'axios'
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const REVALIDATE_TIME = IS_PRODUCTION ? 60 * 60 : 60 * 5

export const getStaticProps = async () => {
  const response = await axios.get<ArtistListItem[]>(ENDPOINT)
  const artists = response.data

  return {
    props: {
      artists
    },
    revalidate: REVALIDATE_TIME
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const response = await axios.get<ArtistListItem[]>(ENDPOINT)
  const artists = response.data

  const paths = artists.map((artist) => {
    return { params: { slug: artist.slug } }
  })

  return {
    paths,
    fallback: true
  }
}

const ListArtists: NextPage<{ artists: ArtistListItem[] }> = ({
  artists
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter()

  if (isFallback)
    return (
      <Layout>
        <Box p={8}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      </Layout>
    )

  return (
    <Layout>
      <Box p={8}>
        <ul>
          {artists &&
            artists.map((artist) => (
              <NextLink
                as={`/artistas/${artist.slug}`}
                href={`/artistas/[slug]`}
                passHref
                key={`/artistas/${artist.slug}`}
              >
                <Link>
                  <Heading as="h3" size="lg">
                    {artist.nome}
                  </Heading>
                </Link>
              </NextLink>
            ))}
        </ul>
      </Box>
    </Layout>
  )
}

export default ListArtists
