import {
  Center,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text
} from '@chakra-ui/react'
import { default as ReactChord } from '@tombatossals/react-chords/lib/Chord'
import { findChord } from './chord.service'
import { isEmpty } from 'lodash'

export interface ChordProps {
  value: string
}

const NOT_FOUND = <>Cifra não encontrada 😞</>

const MyChord = ({ value }: ChordProps) => {
  if (isEmpty(value)) return NOT_FOUND

  let chord = findChord(value)
  if (!chord || chord === 'NOT FOUND') return NOT_FOUND
  chord = chord.positions[0] // FIXME: avaliar o que é este positions aqui...

  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'guitar',
    numberOfChords: 2141,
    tunings: { standard: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] },
    keys: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']
  }
  const lite = false // defaults to false if omitted
  return <ReactChord chord={chord} instrument={instrument} lite={lite} />
}

export const Chord = ({ value }: ChordProps) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text as="b" cursor="pointer">
          {value}
        </Text>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <Center>{value}</Center>
        </PopoverHeader>
        <PopoverBody>
          <Center>
            <MyChord value={value} />
          </Center>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
