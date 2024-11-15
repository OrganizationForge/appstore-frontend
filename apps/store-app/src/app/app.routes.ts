import { authGuard } from '@angular-monorepo/auth-data-access';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@angular-monorepo/feature-login').then(
        (m) => m.FeatureLoginComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@angular-monorepo/home-store-app').then(
        (m) => m.HomeStoreAppComponent
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('@angular-monorepo/shared/shop-lib/feature-shop').then(
        (m) => m.featureShopRoutes
      ),
  },
  {
    path: 'dashboard',

    loadChildren: () =>
      import('@angular-monorepo/shared/dashboard-lib/feature-dashboard').then(
        (m) => m.featureDashboardRoutes
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('@angular-monorepo/shared/cart-lib/feature-cart').then(
        (m) => m.featureCartRoutes
      ),
  },
];
