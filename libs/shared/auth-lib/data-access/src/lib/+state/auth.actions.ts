import { User } from '../models/user';
import { Errors } from './auth.interfaces';
import { props, createActionGroup, emptyProps } from '@ngrx/store';

export const authActions = createActionGroup({
  source: 'Forms',
  events: {
    getData: props<{ data: User }>(),
    setData: props<{ data: User, loggedIn: boolean }>(),
    setLoginData: props<{ data: any }>(),
    updateData: props<{ data: User }>(),
    setErrors: props<{ errors: Errors }>(),
    initializeErrors: emptyProps(),
  },
});
