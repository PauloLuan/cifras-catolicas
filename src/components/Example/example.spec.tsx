import { render, screen } from 'utils/test-utils'

import { Example } from '.'

describe('<Example />', () => {
  it('should render the heading', () => {
    render(<Example />)

    expect(
      screen.getByRole('heading', { name: /Example/i })
    ).toBeInTheDocument()
  })
})
