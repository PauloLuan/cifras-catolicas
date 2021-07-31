import {
  Avatar,
  Box,
  chakra,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { deburr } from 'lodash'
import NextLink from 'next/link'
import React from 'react'

export interface SearchResultCardProps {
  testId?: string
  artistName: string
  slug: string
  image?: string | null
  musicName: string
}

export const SearchResultCard = ({
  testId,
  artistName,
  slug,
  image,
  musicName
}: SearchResultCardProps) => {
  return (
    <NextLink
      as={`/artistas/${deburr(slug)}`}
      href={`/artistas/[slug]`}
      passHref
      key={`/artistas/${deburr(slug)}`}
    >
      <Link style={{ textDecoration: 'none' }}>
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
      </Link>
    </NextLink>
  )
}
