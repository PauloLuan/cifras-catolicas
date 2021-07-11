import { render, screen } from 'utils/test-utils'

import { Newsletter } from '.'

describe('<Newsletter />', () => {
  it('should render the heading', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
  })
})