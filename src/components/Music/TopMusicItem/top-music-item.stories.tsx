import { Box } from '@chakra-ui/react'
import React from 'react'
import { TopMusicItem, TopMusicItemProps } from '.'

export default {
  component: TopMusicItem,
  title: 'TopMusicItem'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TopMusicItemProps = {
    index: 1,
    artistName: 'Harpa Cristã',
    musicName: 'Porque ele vive'
  }

  return (
    <Box maxW="300">
      <TopMusicItem {...props} />
    </Box>
  )
}
