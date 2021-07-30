import { SearchIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  chakra,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { SearchResultCard } from '../SearchResultCard'

export interface FloatingSearchProps {
  testId?: string
}

export const FloatingSearch = ({
  testId = 'floating-search-id'
}: FloatingSearchProps) => {
  return (
    <>
      <Stack spacing={4} p={4}>
        <InputGroup color={'gray.500'} bg="gray.300" rounded="lg" size="lg">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            size="lg"
            placeholder="Pesquise por cantores ou músicas"
            _placeholder={{
              color: 'gray.500'
            }}
          />
        </InputGroup>

        <Stack>
          <SearchResultCard
            artistName="Padre Zezinho"
            musicName="Em tuas mãos estarei"
            testId="1"
            image="https://bit.ly/code-beast"
          />

          <SearchResultCard
            artistName="Glória santa"
            musicName="Em tuas mãos estarei"
            testId="2"
            image="https://bit.ly/code-beast"
          />
          <SearchResultCard
            artistName="Padre Fábio de Melo"
            musicName="Jesus é meu rei"
            testId="3"
            image="https://bit.ly/code-beast"
          />
          <SearchResultCard
            artistName="Ludmila Farias"
            musicName="Vida santa quero ter"
            testId="4"
            image="https://bit.ly/code-beast"
          />
        </Stack>
      </Stack>
    </>
  )
}
