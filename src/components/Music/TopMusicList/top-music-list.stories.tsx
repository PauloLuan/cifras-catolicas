import React from 'react'
import { TopMusicList, TopMusicListProps } from '.'

export default {
  component: TopMusicList,
  title: 'TopMusicList'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TopMusicListProps = {
    musics: [
      {
        index: 1,
        artistName: 'Harpa Cristã',
        musicName: 'Porque ele vive'
      },
      {
        index: 2,
        artistName: 'Harpa Cristã',
        musicName: 'Porque ele vive'
      },
      {
        index: 3,
        artistName: 'Harpa Cristã',
        musicName: 'Porque ele vive'
      },
      {
        index: 4,
        artistName: 'Harpa Cristã',
        musicName: 'Porque ele vive'
      },
      {
        index: 5,
        artistName: 'Harpa Cristã',
        musicName: 'Porque ele vive'
      }
    ]
  }

  return <TopMusicList {...props} />
}
