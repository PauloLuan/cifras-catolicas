import React from 'react'
import {
  Navbar,
  NavbarProps
} from '.'

export default {
  component: Navbar,
  title: 'Navbar'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: NavbarProps = {
    name: 'Paulo Luan'
  }

  return <Navbar {...props} />
}