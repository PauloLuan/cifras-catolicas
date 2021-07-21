import { Box } from '@chakra-ui/react'
import React from 'react'
import { ArtistItem, ArtistItemProps } from '.'

export default {
  component: ArtistItem,
  title: 'ArtistItem'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ArtistItemProps = {
    index: 1,
    artistName: 'Harpa Cristã',
    image: 'https://bit.ly/code-beast',
    views: 389456
  }

  return (
    <Box maxW="300">
      <ArtistItem {...props} />
    </Box>
  )
}
