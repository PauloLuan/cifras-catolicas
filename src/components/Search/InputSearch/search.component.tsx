import { Flex } from '@chakra-ui/react'

export interface SearchProps {
  name?: string
}

export const Search = ({ name }: SearchProps) => {
  return (
    <Flex>
      <h1 data-testid='search'>search</h1>
    </Flex>
  )
}
