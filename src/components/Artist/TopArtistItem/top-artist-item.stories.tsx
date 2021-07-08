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
    musicName: 'Porque ele vive'
  }

  return <TopArtistItem {...props} />
}
