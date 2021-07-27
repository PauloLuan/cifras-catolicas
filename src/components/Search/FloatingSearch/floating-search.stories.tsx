import React from 'react'
import { FloatingSearch, FloatingSearchProps } from '.'

export default {
  component: FloatingSearch,
  title: 'FloatingSearch'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: FloatingSearchProps = {
    name: 'Paulo Luan'
  }

  return <FloatingSearch {...props} />
}
