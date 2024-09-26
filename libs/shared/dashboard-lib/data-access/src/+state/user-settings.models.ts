import { Product } from "@angular-monorepo/shop-data-access";

 export interface  NgrxSettingsState {
   wishlist: Product[],
   error: string | null
 }

 export const ngrxSettingsInitialState: NgrxSettingsState = {
  wishlist: [],
   error: null
 };
