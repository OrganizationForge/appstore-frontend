import { Product } from "@angular-monorepo/shop-data-access";


export interface  CartProduct extends Product {
 total?: number,
 qty?: number
}

export interface  NgrxCartState {
  products: CartProduct[],
  error: string | null
}

export const ngrxCartInitialState: NgrxCartState = {
  products: [],
  error: null
};
