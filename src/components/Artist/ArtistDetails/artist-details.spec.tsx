import { render, screen } from 'utils/test-utils'

import { ArtistDetails } from '.'

describe('<ArtistDetails />', () => {
  it('should render the heading', () => {
    render(<ArtistDetails />)

    expect(
      screen.getByRole('heading', { name: /ArtistDetails/i })
    ).toBeInTheDocument()
  })
})
