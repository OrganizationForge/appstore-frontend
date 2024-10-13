import { ShippingMethod } from '@angular-monorepo/shared/shipping-lib/data-access';
import { Product } from "@angular-monorepo/shop-data-access";
import { PaymentMethod } from '../models/payment-method.model';
import { CartUserDetail } from '../models/user-details.model';


export interface  CartProduct extends Product {
 total?: number,
 qty?: number
}

export interface  NgrxCartState {
  products: CartProduct[],
  details: CartUserDetail | null,
  shipping: ShippingMethod | null,
  payment: PaymentMethod | null,
  comment: string,
  total: number,
  error: string | null
}

export const ngrxCartInitialState: NgrxCartState = {
  products: [],
  details: null,
  shipping: null,
  payment: null,
  comment: '',
  total: 0,
  error: null
};
