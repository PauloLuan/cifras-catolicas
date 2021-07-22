import { CifraDetails } from '@components/CifraDetails'
import { Layout } from '@components/Layout'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

// const ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/cifraas`

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug
  const cifra = { slug }

  return {
    props: {
      cifra
    }
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

function CifraPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <Layout>
      <CifraDetails slug={slug} />
    </Layout>
  )
}

export default CifraPage
