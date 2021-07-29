import {
  Box,
  Center,
  chakra,
  useColorModeValue,
  VStack,
  WrapItem
} from '@chakra-ui/react'

export interface TopMusicItemProps {
  index: number
  musicName: string
  artistName: string
}

export const TopMusicItem = ({
  index,
  musicName,
  artistName
}: TopMusicItemProps) => {
  return (
    <WrapItem
      d="flex"
      w={['45%', 250]}
      p={1}
      h={100}
      alignItems="center"
      justifyContent="center"
      shadow="lg"
      rounded="lg"
      _hover={{ bg: 'orange.50' }}
      role="group"
      cursor="pointer"
    >
      <Box w={[1 / 5, 1 / 3]}>
        <Center>
          <chakra.h1
            data-testid="top-artist-item"
            fontSize={['xl', '5xl']}
            fontWeight="bold"
            color={useColorModeValue('gray.400', 'white')}
            _groupHover={{ color: 'orange.500' }}
          >
            {index}
          </chakra.h1>
        </Center>
      </Box>
      <Box w={[4 / 5, 2 / 3]}>
        <VStack p={[1, 4]}>
          <Center>
            <chakra.strong
              fontSize="md"
              color={useColorModeValue('gray.600', 'gray.400')}
              _groupHover={{ color: 'orange.500' }}
            >
              {musicName}
            </chakra.strong>
          </Center>
          <Center>
            <chakra.span
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
              _groupHover={{ color: 'black' }}
            >
              {artistName}
            </chakra.span>
          </Center>
        </VStack>
      </Box>
    </WrapItem>
  )
}
