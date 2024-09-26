import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PaymentData, ShippingData } from './data';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import {ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';
import { OrderSummaryUiComponent } from '@angular-monorepo/shared/ui/order-summary-ui';

@Component({
  selector: 'lib-feature-checkout-shipping',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, OrderSummaryUiComponent],
  templateUrl: './feature-checkout-shipping.component.html',
  styleUrl: './feature-checkout-shipping.component.scss',
})
export class FeatureCheckoutShippingComponent implements OnInit {
  shippingDatas: any;
  paymentsDatas: any;
  promocodeForm!: UntypedFormGroup;
  submitted = false;

  selectedPaymentMethod = 1;
  selectedSendMethod = 1;


  constructor(private formBuilder: UntypedFormBuilder) { }

  private readonly store = inject(Store);

  cartItems$ = this.store.select(ngrxCartQuery.selectProducts);

  ngOnInit(): void {
    this.shippingDatas = ShippingData;
    this.paymentsDatas = PaymentData;
    /**
     * Form Validatyion
     */
    this.promocodeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });

    localStorage.setItem('selectedSendMethod', JSON.stringify(this.shippingDatas[0]));
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


  onSendChange(sendMethod: any) {
    this.selectedSendMethod = sendMethod.Id;
    localStorage.setItem('selectedSendMethod', JSON.stringify(sendMethod));
  }
}
