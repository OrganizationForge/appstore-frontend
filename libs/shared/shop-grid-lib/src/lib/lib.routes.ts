import { Route } from '@angular/router';
import { ShopGridLsComponent } from './shop-grid-ls/shop-grid-ls.component';

export const shopGridLsRoutes: Route[] = [
  {
    path: '',
    component: ShopGridLsComponent,
    children: [
      {
        path: 'grid-ls',
        component: ShopGridLsComponent
      }
    ]
 },
];
