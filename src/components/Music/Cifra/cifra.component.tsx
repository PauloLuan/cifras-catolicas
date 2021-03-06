import { Text } from '@chakra-ui/react'
import { DomElement } from 'htmlparser2'
import { get } from 'lodash'
import ReactHtmlParser from 'react-html-parser'
import { Container } from '.'
import { Chord } from '../Chord'

export interface CifraProps {
  cifra: string
}

const transform = (node: DomElement) => {
  if (node.name === 'b') {
    const value = get(node, 'children[0].data')
    return <Chord value={value} />
  }
}

export const Cifra = ({ cifra }: CifraProps) => {
  return (
    <Container>
      <pre>
        <Text
          whiteSpace="pre-wrap"
          wordBreak="break-word"
          fontFamily="monospace"
          fontSize="14"
          letterSpacing="wider"
        >
          {ReactHtmlParser(cifra, { transform })}
        </Text>
      </pre>
    </Container>
  )
}
