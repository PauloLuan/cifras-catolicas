import { Box } from '@chakra-ui/react'
import React from 'react'
import { ArtistDetails, ArtistDetailsProps } from '.'

export default {
  component: ArtistDetails,
  title: 'ArtistDetails'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ArtistDetailsProps = {
    index: 1,
    artistName: 'Harpa Cristã',
    image: 'https://bit.ly/code-beast',
    views: 389456
  }

  return (
    <Box maxW="300">
      <ArtistDetails {...props} />
    </Box>
  )
}
