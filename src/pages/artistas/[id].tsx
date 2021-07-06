import { Artist } from '@types/Artist'
import { InferGetServerSidePropsType } from 'next'

const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`

export const getServerSideProps = async () => {
  const res = await fetch(ENDPOINT)
  const artist: Artist = await res.json()

  return {
    props: {
      artist
    }
  }
}

function ArtistPage({
  artist
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>{artist.name}</h1>
}

export default ArtistPage
