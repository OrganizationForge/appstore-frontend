import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { errorHandlerEffects, errorHandlerFeature, errorHandlingInterceptor } from '@angular-monorepo/error-handler';
import { ngrxFormsFeature, tokenInterceptor } from '@angular-monorepo/auth-data-access';
import { environment } from '../environments/environment';
import { API_URL } from '@angular-monorepo/http-client';
import { ngrxFormsEffects } from '@angular-monorepo/auth-data-access';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore({
      errorHandler: errorHandlerFeature.reducer,
      ngrxForms: ngrxFormsFeature.reducer,
    }),
    provideEffects(errorHandlerEffects, ngrxFormsEffects),
    provideRouterStore(),
    provideHttpClient(withInterceptors([errorHandlingInterceptor, tokenInterceptor])),
    !environment.production ? provideStoreDevtools() : [],
    { provide: API_URL, useValue: environment.api_url },
  ],
};
