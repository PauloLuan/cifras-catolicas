import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  FlexProps,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
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
  name?: string
  slug: string
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

export const CifraDetails = ({ slug, name }: CifraDetailsProps) => {
  return (
    <Flex w="full">
      <Box as="section" w="40">
        <SocialProfileWithImage />
      </Box>

      <Box
        as="section"
        bg={useColorModeValue('orange.500', 'gray.700')}
        w="full"
      >
        <h1 data-testid="cifra-details">cifra-details: {slug}</h1>
      </Box>
    </Flex>
  )
}

const SocialProfileWithImage = () => {
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
        <Flex justify={'center'}>
          <Avatar
            size={'xl'}
            src={
              'https://studiosol-a.akamaihd.net/letras/150x150/fotos/d/1/6/8/d168a1a73553388884188d4da41c3417.jpg'
            }
            alt={'Author'}
            css={{
              border: '2px solid white'
            }}
          />
        </Flex>

        <Box p={2}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
              Padre Zezinho
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
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
          </Stack>

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
        </Box>
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
    <Link href="#" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
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
    </Link>
  )
}
