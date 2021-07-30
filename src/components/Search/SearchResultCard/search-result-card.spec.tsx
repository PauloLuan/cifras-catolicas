import { render, screen } from 'utils/test-utils'

import { SearchResultCard } from '.'

describe('<SearchResultCard />', () => {
  it('should render the heading', () => {
    render(<SearchResultCard />)

    expect(screen.getByRole('heading', { name: /SearchResultCard/i })).toBeInTheDocument()
  })
})