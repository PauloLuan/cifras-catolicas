import { render, screen } from 'utils/test-utils'

import { Navbar } from '.'

describe('<Navbar />', () => {
  it('should render the heading', () => {
    render(<Navbar />)

    expect(screen.getByRole('heading', { name: /Navbar/i })).toBeInTheDocument()
  })
})