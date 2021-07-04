import { DomElement } from 'htmlparser2'
import ReactHtmlParser from 'react-html-parser'
import { Container } from '.'
import { Chord } from '../Chord'
import { get } from 'lodash'

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
      <pre>{ReactHtmlParser(cifra, { transform })}</pre>
    </Container>
  )
}
