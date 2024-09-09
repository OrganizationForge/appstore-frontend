import { CartDetailUiComponent } from '@angular-monorepo/shared/ui/cart-detail-ui';
import { OrderSummaryUiComponent } from '@angular-monorepo/shared/ui/order-summary-ui';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CartData } from './data';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';

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
  paymentMethod: any;
  sendMethod: any;

  private readonly store = inject(Store);

  cartItems$ = this.store.select(ngrxCartQuery.selectProducts);

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.reviewDatas = CartData;

    /**
     * Form Validatyion
     */
    this.promocodeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });

    const storedPaymentMethod = localStorage.getItem('selectedPaymentMethod');
    if (storedPaymentMethod) {
      this.paymentMethod = JSON.parse(storedPaymentMethod);
    }

    const storedSendMethod = localStorage.getItem('selectedSendMethod');
    if (storedSendMethod) {
      this.sendMethod = JSON.parse(storedSendMethod);
    }
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

  openWhatsApp() {
    const storedProductsString = localStorage.getItem('cart');

    let storedProducts: any[] = []; // Inicializamos un array vacío por defecto

    if (storedProductsString)
      storedProducts = JSON.parse(storedProductsString);

      let message = `¡Hola! Estoy interesado en encargar:\n`;

      // Recorremos el array de productos y agregamos los detalles a cada uno
      storedProducts.forEach((product: any) => {
        message += `\n* ${product.productName} *\n`;
        message += `Descripción: ${product.description}\n`;
        message += `Precio: ${product.price}\n`;
        // Agrega más detalles del producto según tus necesidades
      });

      message += `\nMétodo de pago: ${this.paymentMethod.title}\nMétodo de envío: ${this.sendMethod.title}`;

      // Codifica el mensaje para la URL de WhatsApp
      const encodedMessage = encodeURIComponent(message);

      // Abre WhatsApp en una nueva pestaña
      window.open(`https://wa.me/+541139214662?text=${encodedMessage}`, '_blank');
    }
  }
