import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'phosphor-react'
import { useContext } from 'react'
import Stripe from 'stripe'
import { CartContext } from '../../contexts/CartContext'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  NavContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { currencyConverter } from '../../utils/currencyConverter'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { addToCartCheckOut } = useContext(CartContext)

  if (isFallback) {
    return <p>Loading....</p>
  }

  function handleAddtoCart() {
    addToCartCheckOut(product.id)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <NavContainer href={'/'}>
        <ArrowLeft size={24} weight="bold" />
        <p>Voltar</p>
      </NavContainer>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={420} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{currencyConverter(product.price)}</span>
          <p>{product.description}</p>

          <button onClick={handleAddtoCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NIUZ6Qr7e0HspE' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: (60 * 60) / 1, // 1 hour
  }
}
