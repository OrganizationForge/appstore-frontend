import { Errors, Field } from './auth.interfaces';
import { authActions } from './auth.actions';
import { createFeature, createReducer, on } from '@ngrx/store';

export interface NgrxAuthState {
  data: any;
  structure: Field[];
  valid: boolean;
  errors: Errors;
  touched: boolean;
}

export const ngrxAuthInitialState: NgrxAuthState = {
  data: {},
  structure: [],
  valid: true,
  errors: {},
  touched: false,
};

export const ngrxAuthFeature = createFeature({
  name: 'ngrxAuth',
  reducer: createReducer(
    ngrxAuthInitialState,
    on(authActions.setData, (state, action) => ({ ...state, data: action.data })),
    on(authActions.updateData, (state, action) => {
      const data = { ...state.data, ...action.data };
      return { ...state, data, touched: true };
    }),
    on(authActions.setStructure, (state, action) => ({ ...state, structure: action.structure.slice(0) })),
    on(authActions.setErrors, (state, action) => ({ ...state, errors: action.errors })),
    on(authActions.initializeErrors, (state) => ({ ...state, errors: {} })),
    on(authActions.initializeForm, () => ngrxAuthInitialState),
    on(authActions.resetForm, (state) => ({ ...state, touched: false })),
  ),
});
