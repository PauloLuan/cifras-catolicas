import { Avatar, Box, chakra, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export interface SearchResultCardProps {
  testId?: string
  artistName: string
  image?: string
  musicName: string
}

export const SearchResultCard = ({
  testId,
  artistName,
  image,
  musicName
}: SearchResultCardProps) => {
  return (
    <Flex
      w="full"
      h={'20'}
      data-testid={`search-result-card-${testId}-${musicName}`}
    >
      <Flex
        bg={useColorModeValue('gray.100', 'gray.700')}
        shadow="lg"
        rounded="lg"
        w="full"
        _hover={{
          bg: 'gray.500',
          cursor: 'pointer'
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          m={[2, 4]}
        >
          <Avatar size="md" name={artistName} src={image} />
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
            {artistName}
          </chakra.h1>
          <chakra.p m={2}>-</chakra.p>
          <chakra.p
            fontSize={['sm']}
            fontWeight="hairline"
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {musicName}
          </chakra.p>
        </Box>
      </Flex>
    </Flex>
  )
}
