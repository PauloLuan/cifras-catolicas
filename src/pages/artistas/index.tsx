import { Box, Heading, Link } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import { Artist } from '@types/Artist'
import { InferGetStaticPropsType, NextPage } from 'next'
import NextLink from 'next/link'

const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`

export const getStaticProps = async () => {
  const res = await fetch(ENDPOINT)
  const artists: Artist[] = await res.json()

  return {
    props: {
      artists
    }
  }
}

const ListArtists: NextPage<{ artists: Artist[] }> = ({
  artists
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
