import React from 'react'
import { Example, ExampleProps } from '.'

export default {
  component: Example,
  title: 'Example'
}

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ExampleProps = {
    name: 'Paulo Luan'
  }

  return <Example {...props} />
}
