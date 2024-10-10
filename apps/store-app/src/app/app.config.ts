import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { errorHandlerEffects, errorHandlerFeature, errorHandlingInterceptor } from '@angular-monorepo/error-handler';
import { HttpRequestInterceptor, ngrxAuthFeature, tokenInterceptor } from '@angular-monorepo/auth-data-access';
import { environment } from '../environments/environment';
import { API_URL } from '@angular-monorepo/http-client';
import { ngrxAuthEffects } from '@angular-monorepo/auth-data-access';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { ngrxCartFeature } from '@angular-monorepo/shared/cart-lib/data-access';
import { ngrxSettingsFeature } from '@angular-monorepo/shared/dashboard-lib/data-access';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideStore({
      errorHandler: errorHandlerFeature.reducer,
      ngrxAuth: ngrxAuthFeature.reducer,
      ngrxCart: ngrxCartFeature.reducer,
      ngrxSettings: ngrxSettingsFeature.reducer,

    }),
    provideEffects(errorHandlerEffects, ngrxAuthEffects),
    provideRouterStore(),
    provideHttpClient(withInterceptors([errorHandlingInterceptor, tokenInterceptor])),
    // { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    // tokenInterceptor,
    !environment.production ? provideStoreDevtools() : [],
    { provide: API_URL, useValue: environment.api_url },
  ],
};
