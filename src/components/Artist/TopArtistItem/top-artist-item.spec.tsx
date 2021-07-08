import { render, screen } from 'utils/test-utils'

import { TopArtistItem } from '.'

describe('<TopArtistItem />', () => {
  it('should render the heading', () => {
    render(<TopArtistItem />)

    expect(screen.getByRole('heading', { name: /TopArtistItem/i })).toBeInTheDocument()
  })
})