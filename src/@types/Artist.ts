export interface Artist {
  slug: string
  nome: string
  info: string
  imagem?: string
  musicas?: Music[]
}
export interface Music {
  slug: string
  nome: string
  cifra: string
  info: string
  video: string
}
