import { render, screen } from 'utils/test-utils'

import { FloatingSearch } from '.'

describe('<FloatingSearch />', () => {
  it('should render the heading', () => {
    render(<FloatingSearch />)

    expect(
      screen.getByRole('heading', { name: /FloatingSearch/i })
    ).toBeInTheDocument()
  })
})
