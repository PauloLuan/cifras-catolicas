import { Layout } from '@components/Layout'
import { Ranking } from '@components/Ranking'
import { Artist } from '@types/Artist'
import { InferGetStaticPropsType, NextPage } from 'next'

// const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`

export const getStaticProps = async () => {
  // const res = await fetch(ENDPOINT)
  // const cifras: Artist[] = await res.json()

  const cifras: Artist[] = []

  return {
    props: {
      cifras
    }
  }
}

const ListCifras: NextPage<{ cifras: Artist[] }> = ({
  cifras
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Ranking />
    </Layout>
  )
}

export default ListCifras
