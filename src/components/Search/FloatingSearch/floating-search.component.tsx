import { SearchIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  chakra,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Portal,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'

export interface FloatingSearchProps {
  testId?: string
}

export const FloatingSearch = ({
  testId = 'floating-search-id'
}: FloatingSearchProps) => {
  return (
    <Portal>
      <Stack spacing={4} bg="gray.300" p={4}>
        <InputGroup color={'gray.500'} bg="gray.100" rounded="lg" size="lg">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            size="lg"
            placeholder="O que você quer ouvir?"
            _placeholder={{
              color: 'gray.500'
            }}
          />
        </InputGroup>

        <Stack>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Stack>
      </Stack>
    </Portal>
  )
}

const Card = () => {
  return (
    <Flex w="full" h={'20'}>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.800')}
        shadow="lg"
        rounded="lg"
        w="full"
        _hover={{
          bg: 'gray.400',
          cursor: 'pointer'
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          m={[2, 4]}
        >
          <Avatar
            size="md"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
        </Box>

        <Box
          display="flex"
          p={[0, 2]}
          alignItems="center"
          justifyContent="left"
        >
          <chakra.h1
            fontSize={['sm']}
            fontWeight="bold"
            color={useColorModeValue('gray.800', 'white')}
          >
            Padre Zezinho
          </chakra.h1>
          <chakra.p m={2}>-</chakra.p>
          <chakra.p
            fontSize={['sm']}
            fontWeight="hairline"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </chakra.p>
        </Box>
      </Flex>
    </Flex>
  )
}
