import { createFeature, createReducer, on } from '@ngrx/store';
import { cartActions } from './cart-items.actions';
import { ngrxCartInitialState } from './cart-items.models';

export const ngrxCartFeature = createFeature({
  name: 'ngrxCart',
  reducer: createReducer(
    ngrxCartInitialState,
    on(cartActions.getCart, (state) => ({...state,})),
    on(cartActions.postCart, (state, action) => {
      state = {...state, products: [...state.products, action.products], total: state.total + (action.products.total || 0) }
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    }),
    on(cartActions.postUserDetail, (state, action) => {
      state = {...state, details: action.userDetail }
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    }),
    on(cartActions.postShipping, (state, action) => {
      state = {...state, shipping: action.shippingMethod }
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    }),
    on(cartActions.postPayment, (state, action) => {
      state = {...state, payment: action.paymentMethod }
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    }),
    on(cartActions.postComment, (state, action) => {
      state = {...state, comment: action.comment }
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    }),
    on(cartActions.removeItemFromCart, (state, action) => {
      const products = [...state.products];
      const index = products.findIndex(x => x.id === action.products.id);
      products.splice(index, 1);
      state = {...state, products: products, total: state.total - (action.products.total || 0) }
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
     }),
    on(cartActions.getCartFailure, (state, action) => ({...state, error: action.error,})),
    on(cartActions.loadCart, (state, { cart }) => ({
      ...state,
      products: cart.products,
      details: cart.details,
      shipping: cart.shipping,
      payment: cart.payment,
      comment: cart.comment,
      total: cart.total
    })),
    on(cartActions.clearCart, () => ({
      products: [],
      details: null,
      shipping: null,
      payment: null,
      comment: '',
      total: 0,
      error: null,
    }))
  ),
});
