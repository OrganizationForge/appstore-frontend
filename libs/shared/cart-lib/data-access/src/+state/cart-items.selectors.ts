import { ngrxCartFeature } from "./cart-items.reducer";

export const { selectNgrxCartState, selectProducts,selectTotal, selectError, selectDetails, selectShipping, selectPayment,  selectComment } = ngrxCartFeature;

export const ngrxCartQuery = {
  selectNgrxCartState,
  selectProducts,
  selectDetails,
  selectShipping,
  selectPayment,
  selectComment,
  selectTotal,
  selectError
};
