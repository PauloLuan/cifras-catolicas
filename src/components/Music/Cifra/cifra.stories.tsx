import React from 'react'
import {
  Cifra,
  CifraProps
} from '.'

export default {
  component: Cifra,
  title: 'Cifra'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: CifraProps = {
    name: 'Paulo Luan'
  }

  return <Cifra {...props} />
}