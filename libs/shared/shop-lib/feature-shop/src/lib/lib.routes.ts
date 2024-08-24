import { Route } from '@angular/router';
import { FeatureShopComponent } from './feature-shop.component';

export const featureShopRoutes: Route[] = [
  {
    path: '',
    component: FeatureShopComponent,
    children: [
      {
        path: 'grid-ls',
        loadComponent: () =>
          import('@angular-monorepo/shared/shop-lib/feature-shop-grid-ls').then((m) => m.FeatureShopGridLsComponent)
      },
      {
        path: 'product-detail/:productId',
        loadComponent: () =>
          import('@angular-monorepo/shared/shop-lib/feature-product-detail').then((m) => m.FeatureProductDetailComponent)
      }
    ]
  },
];
