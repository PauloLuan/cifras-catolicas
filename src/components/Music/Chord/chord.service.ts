const guitar = require(`@tombatossals/chords-db/lib/guitar.json`)

interface Chord {
  key: string
  suffix: string
}

const _breakSuffix = (input: string): Chord => {
  const IS_SHARP = input[1] === '#'
  let key = IS_SHARP ? input.slice(0, 2) : input.slice(0, 1)
  key = key.replace('#', 'sharp')
  const suffix = IS_SHARP ? input.slice(2) : input.slice(1)
  return { key, suffix }
}

export const findChord = (input: string) => {
  const { key, suffix } = _breakSuffix(input)
  const chords = guitar.chords[key]
  if (!chords) return 'NOT FOUND'

  if (!key && !suffix) {
    return 'NOT FOUND'
  }

  if (!suffix) {
    return chords.find((c) => c.suffix === 'major')
  }

  if (suffix === 'm') {
    // FIXME: perguntar para o Gustavo se o m pequeno significa minor mesmo...
    return chords.find((c) => c.suffix === 'minor')
  }

  return chords.find((c) => c.suffix === suffix)
}

const _isUpperCase = (key: string) => {
  const IS_UPPER_CASE = key == key.toUpperCase()
  return IS_UPPER_CASE
}

// findChord('E') //?
// findChord('A') //?
// findChord('Am/E') //?
// findChord('E') //?
// findChord('C#m') //?
// findChord('F#m') //?
// findChord('A') //?
// findChord('B') //?
// findChord('E') //?
// findChord('A') //?
