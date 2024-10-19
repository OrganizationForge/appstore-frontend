import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';
import { LocalStorageJwtService } from './local-storage-jwt.service';
import { AuthService } from './auth.service';
import { AuthStore } from '../+state/auth.store';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private readonly jwtService = inject(LocalStorageJwtService);
  private readonly authService = inject(AuthService)
  private readonly authStore = inject(AuthStore);
  // private readonly router = inject(Router)
  // private readonly state = inject(RouterStateSnapshot)

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let token = "";
    this.jwtService.getItem().subscribe((t : any) => (token = t?.jwToken || null));

    if (token)
      req = this.addToken(req, token);

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('/login') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }
        return throwError(() => error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.authStore.loggedIn()) {
        return this.authService.refreshToken().pipe(
          switchMap(() => {
            this.isRefreshing = false;

            return next.handle(request);
          }),
          catchError((error) => {
            this.isRefreshing = false;

            if (error.status == '403') {

              this.authService.logout().subscribe((res) => {
                if (!res.succeded) {

                  this.authStore.logout();

                  // this.router.navigate(["/signin"], {
                  //   queryParams: {
                  //     returnUrl: this.state.url,
                  //   },
                  // });
                }
              });
            }

            return throwError(() => error);
          })
        );
      }
    }
    return this.jwtService
    .getItem()
    .pipe(
      filter((token) => !!token?.jwToken != null),
      take(1),
      switchMap((usr) => {
        return next.handle(this.addToken(request, (usr?.jwToken || '')));
      })
    )
    // return next.handle(request);
  }
}

// export const tokenInterceptor = [
//   { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
// ];

export const tokenInterceptor = (request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  let token: string | null = null;

  inject(LocalStorageJwtService)
    .getItem()
    .subscribe((t) => (token = t?.jwToken || null));


  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(request);
};
