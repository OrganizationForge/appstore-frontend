import { ngrxAuthFeature } from './auth.reducer';

export const { selectNgrxAuthState, selectData, selectErrors, selectStructure, selectTouched, selectValid } =
  ngrxAuthFeature;

export const ngrxAuthQuery = {
  selectNgrxAuthState,
  selectData,
  selectErrors,
  selectStructure,
  selectTouched,
  selectValid,
};
