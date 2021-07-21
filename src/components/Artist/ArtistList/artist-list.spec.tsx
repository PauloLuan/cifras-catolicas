import { render, screen } from 'utils/test-utils'

import { ArtistList } from '.'

describe('<ArtistList />', () => {
  it('should render the heading', () => {
    render(<ArtistList />)

    expect(
      screen.getByRole('heading', { name: /ArtistList/i })
    ).toBeInTheDocument()
  })
})
