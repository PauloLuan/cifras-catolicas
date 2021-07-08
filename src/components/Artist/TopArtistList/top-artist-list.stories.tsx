import React from 'react'
import {
  TopArtistList,
  TopArtistListProps
} from '.'

export default {
  component: TopArtistList,
  title: 'TopArtistList'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TopArtistListProps = {
    name: 'Paulo Luan'
  }

  return <TopArtistList {...props} />
}