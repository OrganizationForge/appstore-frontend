import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { cartActions, CartProduct } from '@angular-monorepo/shared/cart-lib/data-access';
import { settingsActions } from "@angular-monorepo/shared/dashboard-lib/data-access";
import { Product } from '@angular-monorepo/shop-data-access';

@Component({
  selector: 'lib-product-ui',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbRating, RouterLink],
  templateUrl: './product-ui.component.html',
  styleUrl: './product-ui.component.scss',
})
export class ProductUiComponent {

  @Input() data: any;

  private readonly store = inject(Store);

  addToCart(product: CartProduct) {
    product.total = product.price;
    product.qty = 1;
    this.store.dispatch(cartActions.postCart({products: product}));
  }

  addToWishlist(product: Product) {

    this.store.dispatch(settingsActions.postSettings({wishlist: product}));
  }
}
