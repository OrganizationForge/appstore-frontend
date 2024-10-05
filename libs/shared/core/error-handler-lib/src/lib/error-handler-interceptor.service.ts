import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { errorHandlerActions } from './+state/error-handler.actions';
import { AuthService } from '@angular-monorepo/auth-data-access';


export const errorHandlingInterceptor = (
  request: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const store = inject(Store);
  const authService = inject(AuthService);

  return next(request).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        switch (error.status) {
          case 401:
            store.dispatch(errorHandlerActions.throw401Error({ error }));
            authService.refreshToken();
            break;
          case 404:
            store.dispatch(errorHandlerActions.throw404Error({ error }));
            break;
          default:
            throwError(error);
            break;
        }
      }
      return throwError(error);
    }),
  );
};
