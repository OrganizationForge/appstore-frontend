import { authGuard } from '@angular-monorepo/auth-data-access';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo : 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@angular-monorepo/feature-login').then((m) => m.FeatureLoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@angular-monorepo/header').then((m) => m.HeaderComponent),
      canActivate: [authGuard],
  },
];
