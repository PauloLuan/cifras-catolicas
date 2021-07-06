import { Box, Link } from '@chakra-ui/react'

const Main = () => {
  return (
    <Box as="main" p="4">
      <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96">
        <Link href="/artistas">ListArtist</Link>
      </Box>
    </Box>
  )
}

export { Main }
