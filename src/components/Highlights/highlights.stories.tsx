import React from 'react'
import {
  Highlights,
  HighlightsProps
} from '.'

export default {
  component: Highlights,
  title: 'Highlights'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: HighlightsProps = {
    name: 'Paulo Luan'
  }

  return <Highlights {...props} />
}