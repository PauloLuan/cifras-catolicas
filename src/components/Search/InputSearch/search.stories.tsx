import React from 'react'
import {
  Search,
  SearchProps
} from '.'

export default {
  component: Search,
  title: 'Search'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SearchProps = {
    name: 'Paulo Luan'
  }

  return <Search {...props} />
}