import { Artist } from '@types/Artist'
import { InferGetServerSidePropsType } from 'next'

const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`

export const getServerSideProps = async () => {
  const res = await fetch(ENDPOINT)
  const artists: Artist[] = await res.json()

  return {
    props: {
      artists
    }
  }
}

const ListArtists = ({
  artists
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1>artistas</h1>
      <ul>
        {artists &&
          artists.map((artist) => <li key={artist.slug}>{artist.nome}</li>)}
      </ul>
    </>
  )
}

export default ListArtists
