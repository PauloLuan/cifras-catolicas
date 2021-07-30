import React from 'react'
import {
  SearchResultCard,
  SearchResultCardProps
} from '.'

export default {
  component: SearchResultCard,
  title: 'SearchResultCard'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SearchResultCardProps = {
    name: 'Paulo Luan'
  }

  return <SearchResultCard {...props} />
}