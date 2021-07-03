import { render, screen } from 'utils/test-utils'

import { Chord } from '.'

describe('<Chord />', () => {
  it('should render the heading', () => {
    render(<Chord />)

    expect(screen.getByRole('heading', { name: /Chord/i })).toBeInTheDocument()
  })
})