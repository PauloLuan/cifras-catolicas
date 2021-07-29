import React from 'react'
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

const Newsletter = () => {
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
          <GridItem as="label" colSpan={{ base: 'auto', lg: 4 }}>
            <VisuallyHidden>Seu Email</VisuallyHidden>
            <Input
              mt={0}
              size="lg"
              type="email"
              placeholder="Seu melhor e-mail..."
              required={true}
            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{ base: 'auto', lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="orange"
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
