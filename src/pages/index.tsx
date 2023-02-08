import Image from 'next/image'
import { HomeContainer, Product, ProductInfo } from '../styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'


import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Stripe from 'stripe'
import { Arrow } from '../components/Arrows'
import { stripe } from '../lib/stripe'
import { Dots } from '../components/Dots'
import { Cart } from '../components/Cart'

interface HomeProps {
 products: {
   id: string,
   name: string,
   imageUrl: string,
   price: number,
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ loaded, setLoaded ] = useState(false)

  const [ sliderRef, instanceRef ] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    
    created(){
      setLoaded(true)
    },
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 58,
    },
  })

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {
          products.map(product => {
            return (
              <Product 
                className='keen-slider__slide' 
                href={`/product/${product.id}`} 
                key={product.id}
                prefetch={false}
                style={{maxWidth: 696 + 'px'}}
              >
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
                <ProductInfo>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <Cart />
                </ProductInfo>
              </Product>
            )
          })
        }

        {
          loaded && instanceRef.current && (
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
          )
        }

        {loaded && instanceRef.current && (
          <Dots currentSlide={currentSlide} instanceRef={instanceRef}/>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100), // divide por 100 pois vem em centavos
    }
  })

  return {
    props: {products},
    revalidate: 60 * 60 * 2, // 2 horas
  }
}
