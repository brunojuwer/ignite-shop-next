interface Order {
  id: string
  name: string
  imageUrl: string
  price?: number
  description?: string
  defaultPriceId: string
}

export function useSumAmount(array: Order[]): number {
  return array.reduce((acc, order) => {
    return (acc += order.price)
  }, 0)
}
