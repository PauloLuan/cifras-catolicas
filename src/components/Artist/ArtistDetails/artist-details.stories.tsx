import { Box } from '@chakra-ui/react'
import React from 'react'
import { ArtistDetails } from '.'

export default {
  component: ArtistDetails,
  title: 'ArtistDetails'
}

const artist: Artist = {
  slug: 'anjos-de-resgate',
  nome: 'Anjos de Resgate',
  info: '',
  imagem: null,
  musicas: [
    {
      slug: 'O-CEU-INTEIRO-ESTA-REZANDO-POR-TI',
      nome: 'O CÉU ESTÁ REZANDO POR TI',
      cifra:
        '\nTOM: <b>C</b>\n\n<b>G                                C G</b>\n<strong>O CÉU INTEIRO ESTÁ REZANDO POR TI\nSE FOR PRECISO, NÓS ESTAMOS AQUI</strong>\n\nSOLO 1 - <b>G C D G C D G C D G C D G</b>\n\n       <b>Em       Am7    Bm7    Em   Am7  Bm7</b>\nSE A CRUZ TE PARECE PESADA DEMAIS,\n     <b>Em        Am7         Bm7      Em   Am7 Bm7</b>\nSÊ FIEL E NÃO PERCA A ESPERANÇA DA PAZ\n        <b>Am</b>\nNÃO ESQUEÇA QUE O AMOR\n     <b>C/G                  B4     B</b>\nQUE EMANA DE DEUS NÃO VAI SE ACABAR.\n\n<b>G          C       D           G</b>\n<strong>O CÉU INTEIRO ESTÁ REZANDO POR TI\n         <b>C            D       G</b>\nSE FOR PRECISO, NÓS ESTAMOS AQUI         \n           <b>C        D         Em</b>\nANJOS E SANTOS INTERCEDEM POR TI\n          <b>C         D       G</b>\nE SE PRECISO FOR, ESTAMOS AQUI.</strong>\n\n<b>Em              Am7       Bm7         Em    Am7  Bm7</b>\nSE O MUNDO TE HUMILHA E TE FAZ DIZER NÃO,\n         <b>Em        Am7        Bm7      Em   Am7  Bm7</b>\nCRÊ EM DEUS E ELE VAI TE MOSTRAR SUA DIREÇÃO.\n         <b>Am</b>\nNO EXTREMO DA DOR,\n<b>C/G                     B4       B</b>\nO TEU DEUS SEGUROU FORTE A TUA MÃO.\n\n<b>G          C       D          G</b>\n<strong>O CÉU INTEIRO ESTÁ REZANDO POR TI\n      <b>C                D        G</b>\nSE FOR PRECISO, NÓS ESTAMOS AQUI\n            <b>C        D         Em</b>\nANJOS E SANTOS INTERCEDEM POR TI\n          <b>C         D       G</b>\nE SE PRECISO FOR, ESTAMOS AQUI.</strong>\n\n\n  ( <b>Em Am7 Bm7</b> )\n\n         <b>Am</b>\nNO EXTREMO DA DOR,\n<b>C/G                     B4       B</b>\nO TEU DEUS SEGUROU FORTE A TUA MÃO.\n\n<b>G          C       D          G</b>\n<strong>O CÉU INTEIRO ESTÁ REZANDO POR TI\n      <b>C                D        G</b>\nSE FOR PRECISO, NÓS ESTAMOS AQUI\n            <b>C        D         Em</b>\nANJOS E SANTOS INTERCEDEM POR TI\n          <b>C</b>\nE SE PRECISO FOR, ESTAMOS AQUI</strong>\n\n<b>Bb        Eb       F          Bb</b>\n<strong>O CÉU INTEIRO ESTÁ REZANDO POR TI\n      <b>Eb                F        Bb</b>\nSE FOR PRECISO, NÓS ESTAMOS AQUI\n            <b>Eb        F         G</b>\nANJOS E SANTOS INTERCEDEM POR TI\n          <b>Eb         F       Bb</b>\nE SE PRECISO FOR, ESTAMOS AQUI</strong>',
      info: 'ANJOS DE RESGATE\nMÚSICA  PARA GRUPO DE ORAÇÃO CATÓLICO  \nMÚSICA  DE ANIMAÇÃO PARA GRUPO DE ORAÇÃO CATÓLICO\nANIMAÇÃO PARA GRUPO DE ORAÇÃO',
      video: 'https://www.youtube.com/watch?v=frKz4xTNgek'
    },
    {
      slug: 'um-passo-pra-jesus',
      nome: 'UM PASSO PRA JESUS ',
      cifra:
        '\nTOM: <b>E</b>\n\nINTRO: <b>E A B</b>\n              \n             <b>E                 B</b>\nSE VOCÊ NÃO SABE AONDE A VIDA MORA\n          <b>G#m              A          B</b>\nPRESTE ATENÇÃO, EU VOU TE ENSINAR AGORA.\n             <b>F#m          B</b>\nBASTA DAR UM PASSO PRA JESUS\n          <b>E             A</b>\nE VOCÊ VERÁ O QUANTO É BOM SENTIR\n     <b>F#m          A           B</b>\nESSA PAZ, ESSE AMOR QUE TANTO ME COMPRAZ!\n\n            <b>E                    B</b>\nVENHA HOJE MESMO SEGUIR A JESUS CRISTO\n          <b>G#m           A         B</b>\nELE TE OFERECE A VIDA ETERNA E O PARAÍSO.\n             <b>F#m              B</b>\nO TEMPO NÃO ESPERA E VAI EMBORA\n             <b>E             A</b>\nVENHA PARA CRISTO, VENHA AGORA.\n       <b>F#m        A           B</b>\nDÊ UM PASSO PARA ELE, SEJA UM VENCEDOR!\n\n              <b>E              A           B</b>\n<strong>SE VOCÊ NÃO SABE O QUE É SENTIR ESSE JESUS,\n             <b>G#m        A          B</b>\nBASTA DAR UM PASSO E ABRIR SEU CORAÇÃO.\n         <b>E            A           B</b>\nELE É A FORÇA QUE TE FAZ UM VENCEDOR,\n              <b>F#m  G#m   A   B</b>\nELE É A SALVAÇÃO  </strong>\n\n            <b>E                    B</b>\nVENHA HOJE MESMO SEGUIR A JESUS CRISTO\n          <b>G#m           A         B</b>\nELE TE OFERECE A VIDA ETERNA E O PARAÍSO.\n             <b>F#m              B</b>\nO TEMPO NÃO ESPERA E VAI EMBORA\n             <b>E             A</b>\nVENHA PARA CRISTO, VENHA AGORA.\n       <b>F#m        A           B</b>\nDÊ UM PASSO PARA ELE, SEJA UM VENCEDOR!\n\n              <b>E              A           B</b>\n<strong>SE VOCÊ NÃO SABE O QUE É SENTIR ESSE JESUS,\n             <b>G#m        A          B</b>\nBASTA DAR UM PASSO E ABRIR SEU CORAÇÃO.\n         <b>E            A           B</b>\nELE É A FORÇA QUE TE FAZ UM VENCEDOR,\n              <b>F#m  G#m   A   B</b>\nELE É A SALVAÇÃO  </strong>',
      info: 'ANJOS DE RESGATE\nMÚSICA  PARA GRUPO DE ORAÇÃO CATÓLICO  \nMÚSICA  DE ANIMAÇÃO PARA GRUPO DE ORAÇÃO CATÓLICO\nANIMAÇÃO PARA GRUPO DE ORAÇÃO',
      video: 'https://www.youtube.com/watch?v=0ejjYKLoT5A'
    }
  ]
}

export const primary = () => {
  /* eslint-disable-next-line */

  return (
    <Box maxW="300">
      <ArtistDetails artist={artist} />
    </Box>
  )
}
