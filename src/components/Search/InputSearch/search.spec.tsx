import { render, screen } from 'utils/test-utils'

import { Search } from '.'

describe('<Search />', () => {
  it('should render the heading', () => {
    render(<Search />)

    expect(screen.getByRole('heading', { name: /Search/i })).toBeInTheDocument()
  })
})