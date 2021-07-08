import React from 'react'
import {
  TopMusicItem,
  TopMusicItemProps
} from '.'

export default {
  component: TopMusicItem,
  title: 'TopMusicItem'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TopMusicItemProps = {
    name: 'Paulo Luan'
  }

  return <TopMusicItem {...props} />
}