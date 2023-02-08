import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
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
import shirt1 from '../../assets/camisetas/1.png'

export function CartCheckout() {
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
          <ProductOrder>
            <ImageContainer>
              <Image src={shirt1} width={94} height={94} alt="" />
            </ImageContainer>
            <ProductInfo>
              <h4>Camiseta Beyond the Limits</h4>
              <p>
                <strong>R$ 79,00</strong>
              </p>
              <button>Remover</button>
            </ProductInfo>
          </ProductOrder>
          <ProductOrder>
            <ImageContainer>
              <Image src={shirt1} width={94} height={94} alt="" />
            </ImageContainer>
            <ProductInfo>
              <h4>Camiseta Beyond the Limits</h4>
              <p>
                <strong>R$ 79,00</strong>
              </p>
              <button>Remover</button>
            </ProductInfo>
          </ProductOrder>
          <ProductOrder>
            <ImageContainer>
              <Image src={shirt1} width={94} height={94} alt="" />
            </ImageContainer>
            <ProductInfo>
              <h4>Camiseta Beyond the Limits</h4>
              <p>
                <strong>R$ 79,00</strong>
              </p>
              <button>Remover</button>
            </ProductInfo>
          </ProductOrder>
        </CartProducts>

        <ReviewSection>
          <div>
            <span>Quantidade</span>
            <p>3 itens</p>
          </div>
          <div>
            <strong>Valor Total</strong>
            <h3>R$ 270,00</h3>
          </div>
          <button>Finalizar compra</button>
        </ReviewSection>
      </Content>
    </Dialog.Portal>
  )
}
