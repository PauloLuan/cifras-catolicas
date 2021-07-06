import { Box, Link } from '@chakra-ui/react'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <Box as="main" p="4" data-testid={testId}>
      <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96">
        <Link href="/artistas">ListArtist</Link>
      </Box>
    </Box>
  )
}

export { Main }
