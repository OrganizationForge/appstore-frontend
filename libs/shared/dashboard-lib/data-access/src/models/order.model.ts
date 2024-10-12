import { OrderItem, PaymentMethod } from '@angular-monorepo/shared/cart-lib/data-access';
import { ShippingMethod } from '@angular-monorepo/shared/shipping-lib/data-access';

export interface Order {
  id: string,
  status: number,
  createdDate: Date,
  total: number,
  payment: PaymentMethod,
  shipping: Shipping,
  orderItems: OrderItem[]
}


export interface Shipping {
  shippingAddress: string,
  shippingMethod: ShippingMethod,
}
