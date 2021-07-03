import { render, screen } from 'utils/test-utils'

import { Cifra } from '.'

describe('<Cifra />', () => {
  it('should render the heading', () => {
    render(<Cifra />)

    expect(screen.getByRole('heading', { name: /Cifra/i })).toBeInTheDocument()
  })
})