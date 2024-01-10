import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@angular-monorepo/feature-login').then((m) => m.FeatureLoginComponent),
  },

];
