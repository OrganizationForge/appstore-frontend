export interface Order {
  shipping: Shipping,
  orderItems: OrderItem[]
}


export interface Shipping {
  shippingAddress: string,
  shippingMethodId: string
}

export interface OrderItem {
  id?: string,
  quantity: number,
  price: number,
  productId: string
}

