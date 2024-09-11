import { Route } from '@angular/router';
import { FeatureDashboardComponent } from './feature-dashboard.component';

export const featureDashboardRoutes: Route[] = [
  {
    path: '',
    component: FeatureDashboardComponent,
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
        path: 'dynamic-forms',
        loadChildren: () =>
          import('@angular-monorepo/shared/category-lib/feature-category').then((m) => m.featureCategoryRoutes)
      }
    ]
  },
];
