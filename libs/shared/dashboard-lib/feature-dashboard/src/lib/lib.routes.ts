import { FeatureWishlistComponent } from './feature-wishlist/feature-wishlist.component';
import { Route } from '@angular/router';
import { FeatureDashboardComponent } from './feature-dashboard/feature-dashboard.component';
import { FeatureProfileComponent } from './feature-profile/feature-profile.component';
import { FeatureAddProductComponent } from './feature-add-product/feature-add-product.component';

export const featureDashboardRoutes: Route[] = [
  {
    path: '',
    component: FeatureDashboardComponent,
    children: [
      {
        path: 'profile',
        component: FeatureProfileComponent,
      },
      {
        path: 'wishlist',
        component: FeatureWishlistComponent,
      },
      {
        path: 'add-product',
        component: FeatureAddProductComponent,
      }
    ]
  },
];
