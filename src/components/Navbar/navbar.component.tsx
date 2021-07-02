import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { useViewportScroll } from 'framer-motion'
import React from 'react'
import {
  AiFillHome,
  AiOutlineInbox,
  AiOutlineLogin,
  AiOutlineMenu
} from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { FaMoon, FaSun } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { Logo } from '../Logo'

const Navbar = () => {
  const mobileNav = useDisclosure()

  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const bg = useColorModeValue('white', 'gray.800')
  const ref = React.useRef()
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {}

  const { scrollY } = useViewportScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  const LoginButton = (
    <Box
      display={{ base: 'none', md: 'flex' }}
      alignItems="center"
      as="a"
      aria-label="Cifras Católicas encontr as melhores cifras"
      href={''}
      target="_blank"
      rel="noopener noreferrer"
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.200"
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color="gray.800"
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: 'gray.300',
        borderColor: 'gray.600'
      }}
      _active={{
        borderColor: 'gray.200'
      }}
      _focus={{
        boxShadow: 'outline'
      }}
      ml={5}
    >
      <Icon as={AiOutlineLogin} w="4" h="4" color="gray.600" mr="2" />
      <Box as="strong" lineHeight="inherit" fontWeight="semibold">
        Login
      </Box>
    </Box>
  )
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  )
  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
              <InputGroup
                m="20px"
                w="96"
                display={{ base: 'none', md: 'flex' }}
              >
                <InputLeftElement color="gray.500" children={<FiSearch />} />
                <Input placeholder="O que você quer tocar hoje?" />
              </InputGroup>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Mudar para o modo Noturno`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              {LoginButton}
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  )
}

export { Navbar }
