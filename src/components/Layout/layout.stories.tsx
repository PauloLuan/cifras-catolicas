import React from 'react'
import {
  Layout,
  LayoutProps
} from '.'

export default {
  component: Layout,
  title: 'Layout'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: LayoutProps = {
    name: 'Paulo Luan'
  }

  return <Layout {...props} />
}