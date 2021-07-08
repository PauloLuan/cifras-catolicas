import { render, screen } from 'utils/test-utils'

import { TopMusicList } from '.'

describe('<TopMusicList />', () => {
  it('should render the heading', () => {
    render(<TopMusicList />)

    expect(screen.getByRole('heading', { name: /TopMusicList/i })).toBeInTheDocument()
  })
})