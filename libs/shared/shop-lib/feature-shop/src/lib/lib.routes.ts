import { Route } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ShopGridLsComponent } from './shop-grid-ls/shop-grid-ls.component';

export const shopRoutes: Route[] = [{
  path: '',
  component: ShopComponent,
  children: [
    {
      path: 'grid-ls',
      component: ShopGridLsComponent
    },
    {
      path: 'product-detail',
      loadComponent: () =>
        import('@angular-monorepo/shared/shop-lib/feature-product-detail').then((m) => m.FeatureProductDetailComponent)
    }
  ]
}
];
