import React from 'react'
import {
  CifraDetails,
  CifraDetailsProps
} from '.'

export default {
  component: CifraDetails,
  title: 'CifraDetails'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: CifraDetailsProps = {
    name: 'Paulo Luan'
  }

  return <CifraDetails {...props} />
}