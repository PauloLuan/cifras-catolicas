import { render, screen } from 'utils/test-utils'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    render(<Logo />)

    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument()
  })
})