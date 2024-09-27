import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CartProduct } from './cart-items.models';

export const cartActions = createActionGroup({
  source: 'Forms',
  events: {
    getCart: props<{ data: any }>(),
    postCart: props<{ products: CartProduct }>(),
    removeItemFromCart: props<{ products: CartProduct }>(),
    getCartFailure: props<{ error: string }>(),
    loadCart:  props<{ cart: any }>(),
    clearCart: emptyProps()
  },
});
