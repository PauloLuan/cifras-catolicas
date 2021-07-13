import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Logo } from '../Logo'

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={12}
      h={12}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.500', 'whiteAlpha.500')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'extrabold'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export const Footer = () => {
  return (
    <Box>
      <Container as={Stack} maxW={'6xl'} p={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={'md'}>
              © 2021 Cifras Católicas. Todos os direitos Reservados.
            </Text>
            <Stack
              direction={'row'}
              spacing={6}
              align={'center'}
              justify={'center'}
            >
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Musicas</ListHeader>
            <Link href={'#'}>Top Músicas</Link>
            <Link href={'#'}>Top Artistas</Link>
            <Link href={'#'}>Novidades</Link>
            <Link href={'#'}>Vídeos</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Participe</ListHeader>
            <Link href={'#'}>Crie sua Conta Grátis</Link>
            <Link href={'#'}>Envie Cifras</Link>
            <Link href={'#'}>Peça Cifras</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Assine</ListHeader>
            <Link href={'#'}>Cifras Católicas PRO</Link>
            <Link href={'#'}>Cifras Católicas Academy</Link>
            <Link href={'#'}>Músicas para missas</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Sobre o site</ListHeader>
            <Link href={'#'}>Aviso Legal</Link>
            <Link href={'#'}>Política de Privacidade</Link>
            <Link href={'#'}>Contato</Link>
            <Link href={'#'}>Anuncie no Site</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
