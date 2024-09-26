// import { Injectable, inject } from '@angular/core';
// import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { switchMap, catchError, of } from 'rxjs';
// import * as CartItemsActions from './cart-items.actions';
// import * as CartItemsFeature from './cart-items.reducer';

// @Injectable()
// export class CartItemsEffects {
//   private actions$ = inject(Actions);

//   // init$ = createEffect(() =>
//   //   this.actions$.pipe(
//   //     ofType(CartItemsActions.initCartItems),
//   //     switchMap(() =>
//   //       // of(CartItemsActions.loadCartItemsSuccess({ cartItems: [] }))
//   //     ),
//   //     catchError((error) => {
//   //       console.error('Error', error);
//   //       return of(CartItemsActions.loadCartItemsFailure({ error }));
//   //     })
//   //   )
//   // );
// }
