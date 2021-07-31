import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { Cifra } from '@components/Music'
import { Artist, Music } from '@types/Artist'
import React, { ReactText } from 'react'
import { IconType } from 'react-icons'
import {
  FiCompass,
  FiHeart,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp
} from 'react-icons/fi'

export interface CifraDetailsProps {
  artist: Artist
  selectedSlug?: string
  music?: Music
}

interface LinkItemProps {
  name: string
  icon: IconType
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings }
]

export const CifraDetails = ({ artist, selectedSlug }: CifraDetailsProps) => {
  const music = artist.musicas?.find((music) => music.slug === selectedSlug)
  return (
    <Flex w="full" direction={['column', 'row']}>
      <Sidebar artist={artist} />
      <MainContent artist={artist} selectedSlug={selectedSlug} music={music} />
    </Flex>
  )
}

const Sidebar = ({ artist }: CifraDetailsProps) => (
  <Box as="section" w={['full', '40']}>
    <SocialProfileWithImage artist={artist} />
  </Box>
)

export const MainContent = ({
  artist,
  selectedSlug,
  music
}: CifraDetailsProps) => {
  if (!music) {
    return (
      <Box
        as="main"
        bg={useColorModeValue('gray.50', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        w="full"
        p={[1, 8]}
        ml={[1, 4]}
      >
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Heading>{artist.nome}</Heading>
          <Text>Opssss a música {selectedSlug} não foi encontrada... 😞</Text>
        </VStack>
      </Box>
    )
  }

  return (
    <Box
      as="main"
      bg={useColorModeValue('gray.50', 'gray.800')}
      boxShadow={'2xl'}
      rounded={'md'}
      w="full"
      p={[1, 8]}
      ml={[1, 4]}
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Heading>{music.nome}</Heading>
        <Text fontWeight={600}>Artista: {artist.nome}</Text>
        <Center>
          <Text fontWeight={100} fontStyle="italic">
            👀 <strong>Olho na Dica:</strong> Passe o mouse 🖱️ ou clique sobre a
            cifra!
          </Text>
        </Center>
        <Cifra cifra={music.cifra} />
      </VStack>
    </Box>
  )
}

const SocialProfileWithImage = ({ artist }: CifraDetailsProps) => {
  return (
    <Center>
      <Box
        w={'full'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        mt={2}
      >
        <Box p={2}>
          <Flex justify={'center'}>
            <Avatar
              size={'xl'}
              src={artist.imagem}
              alt={'Author'}
              css={{
                border: '2px solid white'
              }}
            />
          </Flex>

          <Stack spacing={0} align={'center'} my={4}>
            <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
              {artist.nome}
            </Heading>
          </Stack>

          {/* <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
          </Stack> */}
        </Box>

        {/* <Box p={4}>
          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('orange.500', 'orange.200')}
            color={useColorModeValue('white', 'gray.700')}
            fontSize="sm"
            rounded={'md'}
            _hover={{
              transform: 'translateY(-4px)',
              boxShadow: 'lg'
            }}
          >
            Virar Fã
            <Icon
              ml="2"
              fontSize="16"
              _groupHover={{
                color: 'white'
              }}
              as={FiHeart}
            />
          </Button>

          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          ))}
        </Box> */}
      </Box>
    </Center>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Flex
      align="center"
      justify={['center', 'flex-start']}
      p="4"
      borderRadius="lg"
      role="group"
      fontSize="sm"
      cursor="pointer"
      _hover={{
        bg: 'orange.400',
        color: 'white'
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white'
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  )
}
