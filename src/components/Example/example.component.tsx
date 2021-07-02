import { Flex } from '@chakra-ui/react'

export interface ExampleProps {
  name?: string
}

export const Example = ({ name }: ExampleProps) => {
  return (
    <Flex>
      <h1 data-testid='example'>example</h1>
    </Flex>
  )
}
