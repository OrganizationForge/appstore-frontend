import { Route } from '@angular/router';
import { FeatureDashboardComponent } from './feature-dashboard.component';

export const featureDashboardRoutes: Route[] = [
  {
    path: '',
    component: FeatureDashboardComponent,
    children: [
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
          import('@angular-monorepo/shared/dashboard-lib/feature-add-prod').then((m) => m.FeatureAddProductComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('@angular-monorepo/shared/dashboard-lib/feature-settings').then((m) => m.FeatureSettingsComponent)
      }
    ]
  },
];
