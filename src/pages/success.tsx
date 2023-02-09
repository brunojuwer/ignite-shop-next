import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  ImagesSection,
  SuccessContainer,
} from '../styles/pages/success'

interface SessionProps {
  customerName: string
  productImages: string[]
}

export default function Success({ customerName, productImages }: SessionProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImagesSection>
          {productImages.map((item) => (
            <ImageContainer key={item}>
              <Image src={item} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesSection>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          {productImages.length} camisetas já está a caminho de sua casa!
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const productImages = session.line_items.data.map(
    (prod: any) => prod.price.product.images[0],
  )
  return {
    props: {
      customerName,
      productImages: [...productImages],
    },
  }
}
