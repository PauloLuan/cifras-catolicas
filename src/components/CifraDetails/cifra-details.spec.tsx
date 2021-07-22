import { render, screen } from 'utils/test-utils'

import { CifraDetails } from '.'

describe('<CifraDetails />', () => {
  it('should render the heading', () => {
    render(<CifraDetails />)

    expect(screen.getByRole('heading', { name: /CifraDetails/i })).toBeInTheDocument()
  })
})