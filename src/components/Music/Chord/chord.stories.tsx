import React from 'react'
import {
  Chord,
  ChordProps
} from '.'

export default {
  component: Chord,
  title: 'Chord'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ChordProps = {
    name: 'Paulo Luan'
  }

  return <Chord {...props} />
}