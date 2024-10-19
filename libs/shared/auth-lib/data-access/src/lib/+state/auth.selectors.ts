import { ngrxAuthFeature } from './auth.reducer';

export const { selectNgrxAuthState, selectData, selectErrors, selectLoginData,selectLoggedIn } =
  ngrxAuthFeature;

export const ngrxAuthQuery = {
  selectNgrxAuthState,
  selectData,
  selectLoginData,
  selectLoggedIn,
  selectErrors,
};
