import { render, screen } from 'utils/test-utils'

import { TopMusicItem } from '.'

describe('<TopMusicItem />', () => {
  it('should render the heading', () => {
    render(<TopMusicItem />)

    expect(screen.getByRole('heading', { name: /TopMusicItem/i })).toBeInTheDocument()
  })
})