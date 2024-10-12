import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CartProduct } from './cart-items.models';
import { PaymentMethod } from '../../../../payment-lib/data-access/src/lib/models/payment-method.model';
import { ShippingMethod } from '@angular-monorepo/shared/shipping-lib/data-access';
import { CartUserDetail } from '../models/user-details.model';

export const cartActions = createActionGroup({
  source: 'Forms',
  events: {
    getCart: props<{ data: any }>(),
    postCart: props<{ products: CartProduct }>(),
    postUserDetail: props<{ userDetail: CartUserDetail }>(),
    postShipping: props<{ shippingMethod: ShippingMethod }>(),
    postPayment: props<{ paymentMethod: PaymentMethod }>(),
    postComment: props<{ comment: string }>(),
    removeItemFromCart: props<{ products: CartProduct }>(),
    getCartFailure: props<{ error: string }>(),
    loadCart:  props<{ cart: any }>(),
    clearCart: emptyProps()
  },
});
