import React from 'react'
import { Cifra, CifraProps } from '.'

export default {
  component: Cifra,
  title: 'Cifra'
}

const cifraSample = `
<b>INTRODUÇÃO:</b> <b>E</b>  <b>A</b>  <b>Am/E</b>  <b>E</b>  <b>C#m</b>  <b>F#m</b>  <b>A</b>  <b>B</b>

<b>E</b>           <b>A</b>
AVE CHEIA DE GRAÇA,
<b>Am/E</b>  <b>E</b>
BENDITA SEJAS MÃE,
<b>E</b>             <b>A</b>
TE AMO COM AMOR ETERNO,
<b>Am/E</b>    <b>E</b>
SINGELO DE CORAÇÃO,
<b>E</b>               <b>A</b>
QUERO ENTÃO COLOCAR
    <b>Am/E</b>    <b>E</b>
MINHA VIDA EM TUAS MÃOS,
<b>E</b>               <b>A</b>
SENTIR QUE PODES NINAR-ME
<b>Am/E</b>
MÃEZINHA
        <b>E</b>
COM TUA PROTEÇÃO.

        <b>C#m7</b>
EU QUERO DEIXAR
                <b>A</b>
QUE O TEU PLANO EM MIM
        <b>F#m</b>
POSSA REALIZAR
        <b>B</b>
SEM LIMITAÇÕES,
        <b>C#m</b>
E QUERO TENTAR
            <b>A</b>
SEM POREM SABER,
        <b>F#m</b>
SER UM POUQUINHO
        <b>D</b>  <b>B</b>
DO QUE TU ÉS (BIS)

<b>E</b>            <b>A</b>       <b>Am</b>       <b>E</b>
AVE CHEIA DE GRAÇA   UH UH UH UH...
`

export const primary = () => {
  /* eslint-disable-next-line */
  const props: CifraProps = {
    cifra: cifraSample
  }

  return <Cifra {...props} />
}
