import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@angular-monorepo/feature-login').then((m) => m.FeatureLoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@angular-monorepo/header').then((m) => m.HeaderComponent),
  },
];
