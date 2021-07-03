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
  name?: string
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

export const Chord = ({ name }: ChordProps) => {
  return (
    <Box data-testid="chord">
      <Popover trigger="hover">
        <PopoverTrigger>
          <span>Am/E (coloca o mouse em cima de mim)</span>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Am/E</PopoverHeader>
          <PopoverBody>
            <MyChord />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  )
}
