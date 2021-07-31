import {
  Box,
  chakra,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { Search } from '@components/Search'
import { useViewportScroll } from 'framer-motion'
import React from 'react'
import { AiOutlineLogin, AiOutlineMenu } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Logo } from '../Logo'

const Navbar = () => {
  const mobileNav = useDisclosure()

  const { toggleColorMode: toggleMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const color = useColorModeValue()
  const orangeColor = useColorModeValue('orange.600', 'orange.200')

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
      aria-label="Cifras Católicas encontre as melhores cifras"
      href={'#'}
      borderWidth="thin"
      borderColor={orangeColor}
      color={orangeColor}
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      outline="0"
      transition="all 0.3s"
      ml={5}
    >
      <Icon as={AiOutlineLogin} w="4" h="4" mr="2" />
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
      spacing={3}
      rounded="sm"
      shadow="sm"
      zIndex={1}
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Search />
    </VStack>
  )
  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        w="full"
        overflowY="hidden"
        bg={color}
      >
        <chakra.div h="4.5rem" mx="auto" maxW="6xl">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
              <Box display={{ base: 'none', md: 'flex' }}>
                <Search />
              </Box>
            </Flex>

            <Flex justify="flex-end" w="full" maxW="824px" align="center">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Mudar para o modo Noturno`}
                variant="outline"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              {/* {LoginButton} */}
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                variant="outline"
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
