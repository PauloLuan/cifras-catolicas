import { Box } from '@chakra-ui/react'
import React from 'react'
import { TopArtistList, TopArtistListProps } from '.'

export default {
  component: TopArtistList,
  title: 'TopArtistList'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TopArtistListProps = {
    artists: [
      {
        nome: 'teste',
        imagem: '',
        slug: 'teste-123',
        info: ''
      },
      {
        nome: 'teste',
        imagem: '',
        slug: 'teste-123',
        info: ''
      },
      {
        nome: 'teste',
        imagem: '',
        slug: 'teste-123',
        info: ''
      },
      {
        nome: 'teste',
        imagem: '',
        slug: 'teste-123',
        info: ''
      },
      {
        nome: 'teste',
        imagem: '',
        slug: 'teste-123',
        info: ''
      }
    ]
  }

  return (
    <Box maxW={300}>
      <TopArtistList {...props} />
    </Box>
  )
}
