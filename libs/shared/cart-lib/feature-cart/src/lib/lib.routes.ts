import { Route } from '@angular/router';
import { FeatureCartComponent } from './feature-cart.component';
import { CheckoutCompleteComponent } from './checkout-complete/checkout-complete.component';

export const featureCartRoutes: Route[] = [
  {
    path: '',
    component: FeatureCartComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@angular-monorepo/shared/cart-lib/feature-checkout').then((m) => m.FeatureCheckoutComponent)
      },
      {
        path: 'checkout-details',
        loadComponent: () =>
          import('@angular-monorepo/shared/cart-lib/feature-checkout-detail').then((m) => m.FeatureCheckoutDetailComponent)
      },
      {
        path: 'checkout-shipping',
        loadComponent: () =>
          import('@angular-monorepo/shared/cart-lib/feature-checkout-shipping').then((m) => m.FeatureCheckoutShippingComponent)
      },
      {
        path: 'checkout-payment',
        loadComponent: () =>
          import('@angular-monorepo/shared/cart-lib/feature-checkout-payment').then((m) => m.FeatureCheckoutPaymentComponent)
      },
      {
        path: 'checkout-review',
        loadComponent: () =>
          import('@angular-monorepo/shared/cart-lib/feature-checkout-review').then((m) => m.FeatureCheckoutReviewComponent)
      },

    ]
  },
  {
    path: 'checkout-complete',
    component: CheckoutCompleteComponent
  }
];
