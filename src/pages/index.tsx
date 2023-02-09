import Image from 'next/image'
import { HomeContainer, Product, ProductInfo } from '../styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Stripe from 'stripe'
import { Arrow } from '../components/Arrows'
import { Cart } from '../components/Cart'
import { Dots } from '../components/Dots'
import { stripe } from '../lib/stripe'
import { CartContext } from '../contexts/CartContext'
import Link from 'next/link'
import { currencyConverter } from '../utils/currencyConverter'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    defaultPriceId: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const { addAllProducts } = useContext(CartContext)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },

    created() {
      setLoaded(true)
    },
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 58,
    },
  })

  useEffect(() => {
    addAllProducts(products)
  }, [])
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>
              <ProductInfo>
                <div>
                  <strong>{product.name}</strong>
                  <span>{currencyConverter(product.price)}</span>
                </div>
                <Cart color="green" product={product.id} />
              </ProductInfo>
            </Product>
          )
        })}

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left={true}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}

        {loaded && instanceRef.current && (
          <Dots currentSlide={currentSlide} instanceRef={instanceRef} />
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}
