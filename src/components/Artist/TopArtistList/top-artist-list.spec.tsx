import { render, screen } from 'utils/test-utils'

import { TopArtistList } from '.'

describe('<TopArtistList />', () => {
  it('should render the heading', () => {
    render(<TopArtistList />)

    expect(screen.getByRole('heading', { name: /TopArtistList/i })).toBeInTheDocument()
  })
})