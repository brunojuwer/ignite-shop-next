import { useRouter } from 'next/router'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartContainer } from './styles'

interface CartProps {
  color?: string
  product?: string
}

export function Cart({ color, product }: CartProps) {
  const { pathname } = useRouter()
  const { orders, addToCartCheckOut } = useContext(CartContext)

  const isSuccessPage = pathname !== '/success'

  function addToCart() {
    addToCartCheckOut(product)
  }

  if (isSuccessPage) {
    return (
      <CartContainer
        color={color === 'green' ? 'green' : 'gray'}
        onClick={addToCart}
      >
        <Handbag size={24} weight="bold" />
        {orders.length > 0 && <div>{orders.length}</div>}
      </CartContainer>
    )
  }
}
