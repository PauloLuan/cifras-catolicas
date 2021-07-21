import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { Artist } from '@types/Artist'
import { chain, head } from 'lodash'
import { ArtistItem } from '../ArtistItem'

export interface ArtistListProps {
  artists?: Artist[]
}

interface AlphabetGrouped {
  letter: string
  artists: Artist[]
}

const teste = [
  { slug: 'adriana-arydes', nome: 'Adriana Arydes', info: '', imagem: null },
  {
    slug: 'anjos-de-resgate',
    nome: 'Anjos de Resgate',
    info: '',
    imagem: null
  },
  {
    slug: 'artista-desconhecido',
    nome: 'Artista desconhecido',
    info: null,
    imagem: null
  },
  {
    slug: 'as-criancas-cantam-a-pascoa-e-pentecostes-paulus',
    nome: 'As crianças cantam a Páscoa e Pentecostes - Paulus',
    info: '',
    imagem: null
  },
  {
    slug: 'as-criancas-cantam-advento-e-natal-paulus',
    nome: 'As crianças cantam Advento e Natal - Paulus',
    info: '',
    imagem: null
  },
  {
    slug: 'as-criancas-cantam-o-tempo-comum-paulus',
    nome: 'As crianças cantam o Tempo Comum - Paulus',
    info: '',
    imagem: null
  },
  {
    slug: 'as-criancas-cantam-primeira-eucaristia-e-celebrando-com-maria-paulus',
    nome: 'As criancas cantam Primeira Eucaristia e Celebrando com Maria - Paulus',
    info: '',
    imagem: null
  },
  { slug: 'banda-agnus-dei', nome: 'Banda Agnus Dei', info: '', imagem: null },
  { slug: 'banda-de-fatima', nome: 'Banda de Fátima', info: '', imagem: null },
  { slug: 'banda-dominus', nome: 'Banda Dominus', info: '', imagem: null },
  { slug: 'cancao-nova', nome: 'Canção Nova', info: '', imagem: null },
  {
    slug: 'cancoes-que-curam-e-libertam',
    nome: 'Canções que curam e libertam',
    info: '',
    imagem: null
  },
  {
    slug: 'cantinho-da-crianca-cancao-nova',
    nome: 'Cantinho da Criança - Canção Nova',
    info: '',
    imagem: null
  },
  { slug: 'celio-jose', nome: 'Célio José', info: '', imagem: null },
  {
    slug: 'comunidade-católica-shalom',
    nome: 'Comunidade Católica Shalom',
    info: '',
    imagem: null
  },
  {
    slug: 'comunidade-recado',
    nome: 'Comunidade Recado',
    info: '',
    imagem: null
  },
  {
    slug: 'coral-imaculada-conceição',
    nome: 'Coral Imaculada Conceição',
    info: '',
    imagem: null
  },
  {
    slug: 'coral-palestrina-de-apucarana',
    nome: 'Coral Palestrina de Apucarana',
    info: '',
    imagem: null
  },
  { slug: 'dalvimar-gallo', nome: 'Dalvimar Gallo', info: '', imagem: null },
  {
    slug: 'ddd-doidin-de-deus',
    nome: 'DDD Doidin de Deus',
    info: '',
    imagem: null
  },
  { slug: 'diego-fernandes', nome: 'Diego Fernandes', info: '', imagem: null },
  { slug: 'dunga', nome: 'Dunga', info: '', imagem: null },
  { slug: 'eliana-ribeiro', nome: 'Eliana Ribeiro', info: '', imagem: null },
  { slug: 'eros-biondini', nome: 'Eros Biondini', info: '', imagem: null },
  {
    slug: 'festa-liturgicas-iv-paulus',
    nome: 'Festas Litúrgicas IV  - Paulus',
    info: '',
    imagem: null
  },
  { slug: 'grupo-ide', nome: 'Grupo Ide', info: '', imagem: null },
  { slug: 'mensagem-brasil', nome: 'Mensagem Brasil', info: '', imagem: null },
  {
    slug: 'ministerio-amor-e-adoracao',
    nome: 'Ministério Amor e Adoração',
    info: '',
    imagem: null
  },
  {
    slug: 'ministério-koinonya',
    nome: 'Ministério Koinonya',
    info: '',
    imagem: null
  },
  {
    slug: 'missionario_shalom',
    nome: 'Missionario Shalom',
    info: '',
    imagem: null
  },
  {
    slug: 'padre-fabio-de-melo',
    nome: 'Padre Fábio de Melo',
    info: '',
    imagem: null
  },
  {
    slug: 'padre-jonas-abib',
    nome: 'Padre Jonas Abib',
    info: '',
    imagem: null
  },
  {
    slug: 'padre-marcelo-rossi',
    nome: 'Padre Marcelo Rossi',
    info: '',
    imagem: null
  },
  {
    slug: 'pe-ney-brasil-pereira',
    nome: 'Padre Ney Brasil Pereira',
    info: '',
    imagem: null
  },
  {
    slug: 'padre-reginaldo-manzotti',
    nome: 'Padre Reginaldo Manzotti',
    info: '',
    imagem: null
  },
  { slug: 'padre-zeca', nome: 'Padre Zeca', info: '', imagem: null },
  { slug: 'padre-zezinho', nome: 'Padre Zezinho', info: '', imagem: null },
  { slug: 'paulo-roberto', nome: 'Paulo Roberto', info: '', imagem: null },
  { slug: 'ricardo-sa', nome: 'Ricardo Sá', info: '', imagem: null },
  { slug: 'vida-reluz', nome: 'Vida Reluz', info: '', imagem: null },
  { slug: 'walmir-alencar', nome: 'Walmir Alencar', info: '', imagem: null }
]

function isNumeric(str: string | undefined) {
  if (!str) return
  return /^\d+$/.test(str)
}

const _groupByName = (artists: Artist[]): AlphabetGrouped[] => {
  const result = chain(artists)
    .groupBy((o) => {
      const letter = head(o.nome)?.toUpperCase()
      const IS_NUMBER = isNumeric(letter) || !letter
      return IS_NUMBER ? 'Número' : letter
    })
    .map((artists, letter) => ({ letter, artists }))
    .value()

  return result
}

export const ArtistList = ({ artists = teste }: ArtistListProps) => {
  const alphabetGrouped = _groupByName(artists)

  return (
    <Box flex="1" w="full">
      <Heading
        m={2}
        fontSize="4xl"
        fontWeight="bold"
        color={useColorModeValue('gray.600', 'white')}
      >
        Artistas por ordem Alfabética:
      </Heading>
      {alphabetGrouped?.map(({ artists, letter }, index) => {
        return (
          <>
            <Heading m={2} fontSize="4xl" fontWeight="bold" color={'gray.600'}>
              {letter}
            </Heading>

            <SimpleGrid columns={3} p={4} spacing={4}>
              {artists?.map((artist, index) => (
                <ArtistItem {...artist} key={artist.slug + index} />
              ))}
            </SimpleGrid>
          </>
        )
      })}
    </Box>
  )
}
