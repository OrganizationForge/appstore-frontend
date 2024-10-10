import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { AuthState, authInitialState, initialUserValue } from './auth.model';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { exhaustMap, pipe, switchMap, tap } from 'rxjs';
import { concatLatestFrom, tapResponse } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { LocalStorageJwtService } from './services/local-storage-jwt.service';
import { Router } from '@angular/router';
import { ngrxAuthQuery } from './+state/auth.selectors';
import { authActions } from './+state/auth.actions';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<AuthState>(authInitialState),
  withMethods(
    (
      store,
      reduxStore = inject(Store),
      authService = inject(AuthService),
      localStorageService = inject(LocalStorageJwtService),
      router = inject(Router),
    ) => ({
      getUser: rxMethod<void>(
        pipe(
          switchMap(() => authService.user()),
          tap(({ data }) => patchState(store, { data, loggedIn: true })),
        ),
      ),
      login: rxMethod<void>(
        pipe(
          concatLatestFrom(() => reduxStore.select(ngrxAuthQuery.selectData)),
          exhaustMap(([, data]) =>
            authService.login(data).pipe(
              tapResponse({
                next: ({ data }) => {
                  patchState(store, { data, loggedIn: true });
                  localStorageService.setItem(data);
                  router.navigateByUrl('home');
                },
                error: ({ error }) => reduxStore.dispatch(authActions.setErrors({ errors: error.errors })),
              }),
            ),
          ),
        ),
      ),
      register: rxMethod<void>(
        pipe(
          concatLatestFrom(() => reduxStore.select(ngrxAuthQuery.selectData)),
          exhaustMap(([, data]) =>
            authService.register(data).pipe(
              tapResponse({
                next: ({ data }) => {
                  patchState(store, { data, loggedIn: true });
                  localStorageService.setItem(data);
                  router.navigateByUrl('home');
                },
                error: ({ error }) => reduxStore.dispatch(authActions.setErrors({ errors: error.errors })),
              }),
            ),
          ),
        ),
      ),
      logout:rxMethod<void>(
        pipe(
          concatLatestFrom(() => reduxStore.select(ngrxAuthQuery.selectData)),
          exhaustMap(() =>
            authService.logout().pipe(
              tapResponse({
                next: () => {
                  patchState(store, { data: initialUserValue, loggedIn: false });
                  localStorageService.removeItem();
                  router.navigateByUrl('home');
                },
                error: ({ error }) => reduxStore.dispatch(authActions.setErrors({ errors: error.errors })),
              }),
            )
          ),
        ),
      )
    }),
  ),
);
