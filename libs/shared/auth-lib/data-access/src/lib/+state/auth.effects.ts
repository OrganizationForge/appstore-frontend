import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { authActions } from './auth.actions';

export const setData$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(authActions.setData, authActions.updateData),
      map(() => authActions.initializeErrors()),
    );
  },
  { functional: true },
);
