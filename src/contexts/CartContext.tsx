import { createContext, ReactNode, useState } from 'react'

interface Order {
  id: string
  name: string
  imageUrl: string
  price?: number
  description?: string
  defaultPriceId: string
}

interface CartContextType {
  orders: Order[]
  addToCartCheckOut: (id: string) => void
  removeFromCheckout: (id: string) => void
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

  function addAllProducts(orders: Order[]) {
    setAllProducts(orders)
  }

  function addToCartCheckOut(id: string) {
    const isProductAlreadyInCart = orders.some((order) => order.id === id)

    if (!isProductAlreadyInCart) {
      const filteredAllProducts: Order[] = allProducts.filter(
        (prod: Order) => prod.id === id,
      )

      setOrders((state) => [...state, ...filteredAllProducts])
    }
  }

  function removeFromCheckout(id: string) {
    const filteredOrders: Order[] = orders.filter(
      (prod: Order) => prod.id !== id,
    )
    setOrders([...filteredOrders])
  }

  return (
    <CartContext.Provider
      value={{
        orders,
        addToCartCheckOut,
        allProducts,
        addAllProducts,
        removeFromCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
