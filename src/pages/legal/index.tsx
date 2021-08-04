import {
  Heading,
  StackDivider,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { Layout } from 'components'

const Privacy = () => (
  <>
    <Heading as="h1" size="4xl">
      Política de Privacidade
    </Heading>
    <Heading as="h2" size="3xl">
      1 - Regra 1
    </Heading>
    <Text>A Regra 1 trata-se de </Text>
  </>
)
const Terms = () => (
  <>
    <Heading as="h1" size="4xl">
      Termos de uso
    </Heading>
    <Heading as="h2" size="3xl">
      1 - Regra 1
    </Heading>
    <Text>A Regra 1 trata-se de </Text>
  </>
)

const Index = () => (
  <Layout>
    <VStack
      divider={
        <StackDivider borderColor={useColorModeValue('gray.400', 'gray.50')} />
      }
      spacing={50}
      align="stretch"
    >
      <Privacy />
      <Terms />
    </VStack>
  </Layout>
)

export default Index
