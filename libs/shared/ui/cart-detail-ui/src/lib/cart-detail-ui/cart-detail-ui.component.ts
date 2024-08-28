import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { cartActions, ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';

@Component({
  selector: 'lib-cart-detail-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-detail-ui.component.html',
  styleUrl: './cart-detail-ui.component.scss',
})
export class CartDetailUiComponent {

  @Input() editOptions! : boolean;

  private readonly store = inject(Store);
  cartItems$ = this.store.select(ngrxCartQuery.selectProducts);

  qty: any = 1;


  removeCart(event: any, product: any) {
    //  this.subTotal -= parseFloat(this.cartDatas[id].total)
    this.store.dispatch(cartActions.removeItemFromCart({products: product}));
  }

  quantity(id: any, ev: any) {
    this.qty = ev.target.value

    //  this.cartItems$[id].total = parseFloat(this.cartDatas[id].price) * this.qty;
    //  if (this.cartDatas[id].qty < this.qty) {
    //    this.subTotal += parseFloat(this.cartDatas[id].price)
    //  }
    //  else {
    //    this.subTotal -= parseFloat(this.cartDatas[id].price)
    //  }
    //  this.cartDatas[id].qty = this.qty
  }
}
