import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import axios from 'axios'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  CartProducts,
  CloseButton,
  Content,
  ImageContainer,
  Overlay,
  ProductInfo,
  ProductOrder,
  ReviewSection,
  Title,
} from './styles'

export function CartCheckout() {
  const { orders } = useContext(CartContext)

  const ordersDefaultPriceIds = orders.map((order) => {
    return { price: order.defaultPriceId, quantity: 1 }
  })

  async function handleBuyProduct() {
    try {
      const response = await axios.post('/api/checkout', {
        prices: ordersDefaultPriceIds,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Close asChild>
          <CloseButton aria-label="Close">
            <X size={24} weight="bold" />
          </CloseButton>
        </Dialog.Close>

        <Title>Sacola de Compras</Title>
        <CartProducts>
          {orders.map((order) => (
            <ProductOrder key={order.id}>
              <ImageContainer>
                <Image src={order.imageUrl} width={94} height={94} alt="" />
              </ImageContainer>
              <ProductInfo>
                <h4>{order.name}</h4>
                <p>
                  <strong>{order.price}</strong>
                </p>
                <button>Remover</button>
              </ProductInfo>
            </ProductOrder>
          ))}
        </CartProducts>

        <ReviewSection>
          <div>
            <span>Quantidade</span>
            <p>{orders.length} itens</p>
          </div>
          <div>
            <strong>Valor Total</strong>
            <h3>R$ 270,00</h3>
          </div>
          <button onClick={handleBuyProduct}>Finalizar compra</button>
        </ReviewSection>
      </Content>
    </Dialog.Portal>
  )
}
