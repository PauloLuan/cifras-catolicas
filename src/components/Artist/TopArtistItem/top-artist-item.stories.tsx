import React from 'react'
import {
  TopArtistItem,
  TopArtistItemProps
} from '.'

export default {
  component: TopArtistItem,
  title: 'TopArtistItem'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TopArtistItemProps = {
    name: 'Paulo Luan'
  }

  return <TopArtistItem {...props} />
}