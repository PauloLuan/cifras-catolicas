import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { Artist } from '@types/Artist'
import { chain, isEmpty } from 'lodash'
import React, { useEffect, useState } from 'react'
import { SearchResultCard } from '../SearchResultCard'

const mockSearchResults = [
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

export interface FloatingSearchProps {
  testId?: string
}

const _cleanKeyword = (stringInput = '') =>
  chain(stringInput).lowerCase().deburr().split(' ').value()

const _filterResults = (userInput = '', artists: Artist[]) => {
  const keywords = _cleanKeyword(userInput)

  const filteredSuggestions = artists.filter(({ slug }) => {
    const found = keywords.every((keyword) => slug.includes(keyword))
    return found
  })

  return filteredSuggestions
}

export const FloatingSearch = ({
  testId = 'floating-search-id'
}: FloatingSearchProps) => {
  const [searchResults, setSearchResults] = useState<Artist[]>([
    ...mockSearchResults
  ])
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    if (isEmpty(userInput)) setSearchResults(mockSearchResults)

    const found = _filterResults(userInput, mockSearchResults)
    setSearchResults(found)
  }, [userInput])

  return (
    <>
      <Stack spacing={4} p={4} data-testid={testId}>
        <InputGroup color={'gray.500'} bg="gray.300" rounded="lg" size="lg">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
          <Input
            size="lg"
            placeholder="Pesquise por nomes de cantores"
            _placeholder={{
              color: 'gray.500'
            }}
            onChange={(e) => {
              const userInput = e.currentTarget.value
              setUserInput(userInput)
            }}
          />
        </InputGroup>

        <Stack>
          {searchResults.map((artist) => (
            <SearchResultCard
              key={artist.slug}
              slug={artist.slug}
              artistName={artist.nome}
              musicName={artist.slug}
              testId={artist.slug}
              image={artist.imagem}
            />
          ))}
        </Stack>
      </Stack>
    </>
  )
}
