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
      total: cart.total
  }))
  ),
});
