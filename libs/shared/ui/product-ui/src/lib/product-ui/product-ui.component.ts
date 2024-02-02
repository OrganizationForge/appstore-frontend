import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { cartActions } from '@angular-monorepo/shared/cart-lib/data-access';

@Component({
  selector: 'lib-product-ui',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbRating],
  templateUrl: './product-ui.component.html',
  styleUrl: './product-ui.component.scss',
})
export class ProductUiComponent {

  @Input() data: any;

  private readonly store = inject(Store);

  addToCart(product: any) {
    product.total = 0;
    product.qty = 0;
    this.store.dispatch(cartActions.postCart({products: product}))
  }
}
