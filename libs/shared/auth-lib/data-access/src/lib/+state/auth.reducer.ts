import { authInitialState } from './auth.model';
import { authActions } from './auth.actions';
import { createFeature, createReducer, on } from '@ngrx/store';


export const ngrxAuthFeature = createFeature({
  name: 'ngrxAuth',
  reducer: createReducer(
    authInitialState,
    on(authActions.getData, (state) => ({...state,})),
    on(authActions.setData, (state, action) => ({ ...state, data: action.data, loggedIn: action.loggedIn })),
    on(authActions.setLoginData, (state, action) => ({ ...state, loginData: action.data })),
    on(authActions.updateData, (state, action) => {
      const data = { ...state.data, ...action.data };
      return { ...state, data};
    }),
    on(authActions.setErrors, (state, action) => ({ ...state, errors: action.errors })),
    on(authActions.initializeErrors, (state) => ({ ...state, errors: {} })),
  ),
});
