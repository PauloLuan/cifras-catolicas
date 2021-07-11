import React from 'react'
import {
  Newsletter,
  NewsletterProps
} from '.'

export default {
  component: Newsletter,
  title: 'Newsletter'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: NewsletterProps = {
    name: 'Paulo Luan'
  }

  return <Newsletter {...props} />
}