import {
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/react'
import { default as ReactChord } from '@tombatossals/react-chords/lib/Chord'

export interface ChordProps {
  value: string
}

const MyChord = () => {
  const chord = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false
  }
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
      standard: ['E', 'A', 'D', 'G', 'B', 'E']
    }
  }
  const lite = false // defaults to false if omitted
  return <ReactChord chord={chord} instrument={instrument} lite={lite} />
}

export const Chord = ({ value }: ChordProps) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <b>{value}</b>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>{value}</PopoverHeader>
        <PopoverBody>
          <MyChord />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
