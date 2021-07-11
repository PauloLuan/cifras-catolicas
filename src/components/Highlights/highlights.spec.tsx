import { render, screen } from 'utils/test-utils'

import { Highlights } from '.'

describe('<Highlights />', () => {
  it('should render the heading', () => {
    render(<Highlights />)

    expect(screen.getByRole('heading', { name: /Highlights/i })).toBeInTheDocument()
  })
})