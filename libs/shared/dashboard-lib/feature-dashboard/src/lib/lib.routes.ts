import { Route } from '@angular/router';
import { FeatureDashboardComponent } from './feature-dashboard.component';
import { authGuard } from '@angular-monorepo/auth-data-access';

export const featureDashboardRoutes: Route[] = [
  {
    path: '',
    component: FeatureDashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-profile').then((m) => m.FeatureProfileComponent)
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-wishlist').then((m) => m.FeatureWishlistComponent)
      },
      {
        path: 'add-product',
        loadComponent: () =>
          import('@angular-monorepo/shared/shop-lib/feature-add-prod').then((m) => m.FeatureAddProductComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-settings').then((m) => m.FeatureSettingsComponent)
      },
      {
        path: 'shipping',
        loadComponent: () =>
          import('@angular-monorepo/shared/shipping-lib/feature-shipping-list').then((m) => m.FeatureShippingListComponent)
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-orders').then((m) => m.FeatureOrdersComponent)
      },
      {
        path: 'payouts',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-payouts').then((m) => m.FeaturePayoutsComponent)
      },
      {
        path: 'sales',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-sales').then((m) => m.FeatureSalesComponent)
      },
      {
        path: 'users',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-users').then((m) => m.FeatureUsersComponent)
      },
      {
        path: 'product-list',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-product-list').then((m) => m.FeatureProductListComponent)
      },
      {
        path: 'dynamic-forms',
        loadChildren: () =>
          import('@angular-monorepo/shared/category-lib/feature-category').then((m) => m.featureCategoryRoutes)
      }
    ]
  },
];
