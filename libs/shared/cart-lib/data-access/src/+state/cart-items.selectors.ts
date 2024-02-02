import { ngrxCartFeature } from "./cart-items.reducer";

export const { selectNgrxCartState, selectProducts, selectError} = ngrxCartFeature;

export const ngrxCartQuery = {
  selectNgrxCartState,
  selectProducts,
  selectError
};
