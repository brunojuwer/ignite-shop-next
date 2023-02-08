import { useRouter } from 'next/router'
import { Handbag } from 'phosphor-react'
import { CartContainer } from './styles'

interface CartProps {
  color?: string
}

export function Cart({ color }: CartProps) {
  const { pathname } = useRouter()

  const isSuccessPage = pathname !== '/success'

  if (isSuccessPage) {
    return (
      <CartContainer color={color}>
        <Handbag size={24} weight="bold" />
        <div>1</div>
      </CartContainer>
    )
  }
}
