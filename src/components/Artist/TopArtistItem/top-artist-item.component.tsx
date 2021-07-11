import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  chakra,
  Flex,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'

export interface TopArtistItemProps {
  index: number
  views: number
  artistName: string
  image: string
}

export const TopArtistItem = ({
  index,
  views = 0,
  artistName,
  image
}: TopArtistItemProps) => {
  return (
    <Flex
      w={270}
      h={100}
      alignItems="center"
      justifyContent="center"
      shadow="lg"
      rounded="lg"
      bg="orange.50"
      role="group"
      colorScheme="orange"
      cursor="pointer"
    >
      <Box w={1 / 3}>
        <Center>
          <Avatar
            size="lg"
            name={artistName}
            src={image}
            borderColor="papayawhip"
            borderWidth={2}
            bg="orange.400"
          >
            <AvatarBadge
              borderColor="papayawhip"
              borderWidth={2}
              bg="orange.400"
              boxSize="1.25em"
            >
              <chakra.p fontSize="0.7em" fontWeight="bold">
                {index}
              </chakra.p>
            </AvatarBadge>
          </Avatar>
        </Center>
      </Box>
      <Box w={2 / 3}>
        <VStack p={4} alignItems="flex-end">
          <Text
            as="h1"
            fontSize="xl"
            fontWeight="bold"
            color={'orange.500'}
            bg="white"
          >
            {artistName}
          </Text>
          <Text
            as="span"
            fontSize="xs"
            fontWeight="light"
            color={useColorModeValue('gray.600', 'gray.100')}
          >
            {new Intl.NumberFormat('pt-BR').format(views)} Views
          </Text>
        </VStack>
      </Box>
    </Flex>
  )
}
