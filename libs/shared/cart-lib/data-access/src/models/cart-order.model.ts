export interface CartOrder {
  shipping: CartShipping,
  orderItems: OrderItem[]
}


export interface CartShipping {
  shippingAddress: string,
  shippingMethodId: string
}

export interface OrderItem {
  id?: string,
  quantity: number,
  price: number,
  productId: string
}

