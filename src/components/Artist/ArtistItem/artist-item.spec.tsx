import { render, screen } from 'utils/test-utils'

import { ArtistItem } from '.'

describe('<ArtistItem />', () => {
  it('should render the heading', () => {
    render(<ArtistItem />)

    expect(
      screen.getByRole('heading', { name: /ArtistItem/i })
    ).toBeInTheDocument()
  })
})
