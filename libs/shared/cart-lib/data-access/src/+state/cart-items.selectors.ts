import { ngrxCartFeature } from "./cart-items.reducer";

export const { selectNgrxCartState, selectProducts,selectTotal, selectError} = ngrxCartFeature;

export const ngrxCartQuery = {
  selectNgrxCartState,
  selectProducts,
  selectTotal,
  selectError
};
