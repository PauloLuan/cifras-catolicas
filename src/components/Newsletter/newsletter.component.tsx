import React, { SyntheticEvent, useState } from 'react'
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Button,
  Stack,
  Icon
} from '@chakra-ui/react'

import { subscribe } from './newsletter.service'
import Swal from 'sweetalert2'

const Feature = (props) => (
  <Flex alignItems="center" color={useColorModeValue(null, 'white')}>
    <Icon
      boxSize={4}
      mr={1}
      color="green.600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </Icon>
    {props.children}
  </Flex>
)

const Newsletter = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const _clearState = () => {
    setName('')
    setEmail('')
  }

  const _handleSuccess = () => {
    Swal.fire(
      'Inscrito com sucesso!',
      'Enviamos uma mensagem no seu e-mail, Deus lhe abençoe!',
      'success'
    )
  }

  const _handleError = () => {
    Swal.fire(
      'Opsss!',
      'Tivemos um problema, tente novamente em alguns instantes!',
      'error'
    )
  }

  const _handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    await subscribe({ name, email })
    _clearState()
    _handleSuccess()
  }

  return (
    <Box w="full">
      <Box w={{ base: 'full' }} textAlign={{ base: 'center' }} mx="auto">
        <chakra.h1
          mb={3}
          fontSize={{ base: '5xl' }}
          fontWeight={{ base: 'extrabold' }}
          color={useColorModeValue('gray.600', 'gray.100')}
          lineHeight="shorter"
        >
          As melhores cifras e novidades.
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: 'lg', md: 'xl' }}
          color="gray.500"
          lineHeight="base"
        >
          Receba as melhores novidades direto no seu e-mail!
        </chakra.p>
        <SimpleGrid
          as="form"
          w={{ base: 'full', md: 7 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem as="label" colSpan={{ base: 'auto', lg: 6 }}>
            <VisuallyHidden>Digite seu nome</VisuallyHidden>
            <Input
              value={name}
              mt={0}
              size="lg"
              type="text"
              placeholder="Seu nome"
              errorBorderColor="red.300"
              _placeholder={{ color: 'gray.500' }}
              borderColor="gray.500"
              required={true}
              onChange={(event) => setName(event.target.value)}
            />
          </GridItem>
          <GridItem as="label" colSpan={{ base: 'auto', lg: 6 }}>
            <VisuallyHidden>Digite seu email</VisuallyHidden>
            <Input
              value={email}
              mt={0}
              size="lg"
              type="email"
              placeholder="Seu melhor e-mail..."
              _placeholder={{ color: 'gray.500' }}
              borderColor="gray.500"
              errorBorderColor="red.300"
              required={true}
              onChange={(event) => setEmail(event.target.value)}
            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{ base: 'auto', lg: 6 }}
            size="lg"
            type="submit"
            onClick={_handleSubmit}
          >
            Cadastrar
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'start', md: 'center' }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color="gray.600"
        >
          <Feature>Sem spam</Feature>
          <Feature>Somente coisas relevantes</Feature>
          <Feature>Você vai gostar</Feature>
        </Stack>
      </Box>
    </Box>
  )
}

export { Newsletter }
