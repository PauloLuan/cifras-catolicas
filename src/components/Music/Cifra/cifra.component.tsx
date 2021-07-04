import { DomElement } from 'htmlparser2'
import ReactHtmlParser from 'react-html-parser'
import { Container } from '.'
import { Chord } from '../Chord'

export interface CifraProps {
  cifra: string
}

const transform = (node: DomElement) => {
  if (node.name === 'b') {
    const value = node.children.data
    return <Chord value={value} />
  }
}

export const Cifra = ({ cifra }: CifraProps) => {
  return (
    <Container>
      <pre>{ReactHtmlParser(cifra, { transform })}</pre>
    </Container>
  )
}
