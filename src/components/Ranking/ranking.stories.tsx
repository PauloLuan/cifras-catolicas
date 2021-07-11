import React from 'react'
import {
  Ranking,
  RankingProps
} from '.'

export default {
  component: Ranking,
  title: 'Ranking'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: RankingProps = {
    name: 'Paulo Luan'
  }

  return <Ranking {...props} />
}