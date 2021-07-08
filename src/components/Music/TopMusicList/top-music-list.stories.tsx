import React from 'react'
import {
  TopMusicList,
  TopMusicListProps
} from '.'

export default {
  component: TopMusicList,
  title: 'TopMusicList'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TopMusicListProps = {
    name: 'Paulo Luan'
  }

  return <TopMusicList {...props} />
}