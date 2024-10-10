import { CartDetailUiComponent } from '@angular-monorepo/shared/ui/cart-detail-ui';
import { OrderSummaryUiComponent } from '@angular-monorepo/shared/ui/order-summary-ui';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartActions, CartService, ngrxCartQuery, Order, OrderItem, PaymentMethod, Shipping } from '@angular-monorepo/shared/cart-lib/data-access';
import { ShippingMethod } from '@angular-monorepo/shared/shipping-lib/data-access';

@Component({
  selector: 'lib-feature-checkout-review',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule,OrderSummaryUiComponent, CartDetailUiComponent],
  templateUrl: './feature-checkout-review.component.html',
  styleUrl: './feature-checkout-review.component.css',
})
export class FeatureCheckoutReviewComponent implements OnInit {
  reviewDatas: any;

  promocodeForm!: UntypedFormGroup;
  submitted = false;

  private readonly store = inject(Store);
  private readonly cartService = inject(CartService)
  private readonly router = inject(Router)

  paymentMethod$ = this.store.select(ngrxCartQuery.selectPayment);
  shippingMethod$ = this.store.select(ngrxCartQuery.selectShipping);
  userDetails$ = this.store.select(ngrxCartQuery.selectDetails);

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    /**
     * Form Validatyion
     */
    this.promocodeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get form() { return this.promocodeForm.controls; }

  /**
  * Form submit
  */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.promocodeForm.invalid) {
      return;
    }
  }

  saveOrder() {

    const storedProductsString = localStorage.getItem('cart');
    let storedProducts : any;
    if (storedProductsString)
      storedProducts = JSON.parse(storedProductsString);

    const orderItems : OrderItem[] = [];

    const shipping : Shipping = {
      shippingAddress: storedProducts.details.address,
      shippingMethodId: storedProducts.shipping.id
    }

      let message = `¡Hola! Estoy interesado en encargar:\n`;

      // Recorremos el array de productos y agregamos los detalles a cada uno
      storedProducts.products.forEach((product: any) => {

        orderItems.push({
          quantity: product.qty,
          price: product.price,
          productId: product.id
        })

        message += `\n* ${product.productName} *\n`;
        // message += `Descripción: ${product.description}\n`;
        message += `Precio: ${product.price}\n`;
        // Agrega más detalles del producto según tus necesidades
      });

    // save order logic here
    const newOrder : Order = {
      shipping: shipping,
      orderItems: orderItems
    };

  console.log(newOrder);
  this.cartService.createOrder(newOrder).subscribe((res) => {
    if (res.succeded) {
      // this.messageToast = 'Producto guardado correctamente.';
      // this.toastService.show({ template: this.template,  classname: 'bg-success text-light', delay: 2000 });
      // this.productForm.reset();
      // this.files = [];
      // this.editor.clear();

      this.openWhatsApp(message);
      this.store.dispatch(cartActions.clearCart());
      this.router.navigate(['/cart/checkout-complete']);
    }
    else res.errors;
    });
  }

  openWhatsApp(message : string) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/+5491138880723?text=${encodedMessage}`, '_blank');
    }
  }
