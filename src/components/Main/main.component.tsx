import {
  SimpleGrid,
  Grid,
  GridItem,
  Text,
  Box,
  Flex,
  VStack,
  HStack
} from '@chakra-ui/react'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <Grid h="200px" templateColumns="repeat(5, 1fr)" gap={2}>
      <GridItem colSpan={4}>
        <SimpleGrid columns={[1, 2, 3, 4]} gap="2" minChildWidth="200px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </GridItem>
      <GridItem colSpan={1}>
        <SimpleGrid columns={1} gap="2" minChildWidth="200px">
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
          <Box bg="blue" height="80px"></Box>
        </SimpleGrid>
      </GridItem>
    </Grid>
  )
}

export { Main }
