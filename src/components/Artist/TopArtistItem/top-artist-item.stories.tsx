import { Box } from '@chakra-ui/react'
import React from 'react'
import { TopArtistItem, TopArtistItemProps } from '.'

export default {
  component: TopArtistItem,
  title: 'TopArtistItem'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TopArtistItemProps = {
    index: 1,
    artistName: 'Harpa Cristã',
    image: 'https://bit.ly/code-beast',
    views: 389456
  }

  return (
    <Box maxW="300">
      <TopArtistItem {...props} />
    </Box>
  )
}
