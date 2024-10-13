import { Component, Input, TemplateRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbRating, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { cartActions, CartProduct } from '@angular-monorepo/shared/cart-lib/data-access';
import { settingsActions } from "@angular-monorepo/shared/dashboard-lib/data-access";
import { Product } from '@angular-monorepo/shop-data-access';
import { AppToastService } from "@angular-monorepo/shared/ui/toast-ui";

@Component({
  selector: 'lib-product-ui',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbRating, RouterLink],
  templateUrl: './product-ui.component.html',
  styleUrl: './product-ui.component.scss',
})
export class ProductUiComponent {

  @Input() data: any;
  @Input() layout!: string;
  @ViewChild('successToast', { static: true }) template!: TemplateRef<any>;
  messageToast! : string;
  toastService = inject(AppToastService);

  private readonly store = inject(Store);

  addToCart(product: CartProduct) {
    product.total = product.price;
    product.qty = 1;
    this.store.dispatch(cartActions.postCart({products: product}));
    this.messageToast = 'Producto añadido correctamente al carrito.';
    this.toastService.show({ template: this.template,  classname: 'bg-success text-light', delay: 2000 });
  }

  addToWishlist(product: Product) {
    this.messageToast = 'Guardado en tus favoritos.';
    this.toastService.show({ template: this.template,  classname: 'bg-success text-light', delay: 2000 });
    this.store.dispatch(settingsActions.postSettings({wishlist: product}));
  }
}
