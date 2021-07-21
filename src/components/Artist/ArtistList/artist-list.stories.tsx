import { Box } from '@chakra-ui/react'
import React from 'react'
import { ArtistList, ArtistListProps } from '.'

export default {
  component: ArtistList,
  title: 'ArtistList'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ArtistListProps = {
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
      <ArtistList {...props} />
    </Box>
  )
}
