import { render, screen } from 'utils/test-utils'

import { Ranking } from '.'

describe('<Ranking />', () => {
  it('should render the heading', () => {
    render(<Ranking />)

    expect(screen.getByRole('heading', { name: /Ranking/i })).toBeInTheDocument()
  })
})