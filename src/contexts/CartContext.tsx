import { createContext, ReactNode, useState } from 'react'

interface Order {
  id: string
  name: string
  imageUrl: string
  price?: string
  description?: string
  defaultPriceId: string
}

interface CartContextType {
  orders: Order[]
  addToCartCheckOut: (id: string) => void
  allProducts: Order[]
  addAllProducts: (orders: Order[]) => void
}

interface ContextProviderPros {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: ContextProviderPros) {
  const [orders, setOrders] = useState<Order[]>([])
  const [allProducts, setAllProducts] = useState<Order[]>([])

  function addToCartCheckOut(id: string) {
    const filteredAllProducts: Order[] = allProducts.filter(
      (prod: Order) => prod.id === id,
    )
    setOrders((state) => [...state, ...filteredAllProducts])
  }

  function addAllProducts(orders: Order[]) {
    setAllProducts(orders)
  }

  return (
    <CartContext.Provider
      value={{ orders, addToCartCheckOut, allProducts, addAllProducts }}
    >
      {children}
    </CartContext.Provider>
  )
}
