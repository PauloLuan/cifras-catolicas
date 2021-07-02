import React from 'react'
import {
  Logo,
  LogoProps
} from '.'

export default {
  component: Logo,
  title: 'Logo'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: LogoProps = {
    name: 'Paulo Luan'
  }

  return <Logo {...props} />
}