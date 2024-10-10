import { OrderSummaryUiComponent } from '@angular-monorepo/shared/ui/order-summary-ui';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentData } from './data';
import { cartActions, PaymentMethod } from '@angular-monorepo/shared/cart-lib/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lib-feature-checkout-payment',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgbAccordionModule, OrderSummaryUiComponent],
  templateUrl: './feature-checkout-payment.component.html',
  styleUrl: './feature-checkout-payment.component.css',
})
export class FeatureCheckoutPaymentComponent implements OnInit {

  promocodeForm!: UntypedFormGroup;
  submitted = false;
  paymentsDatas : any;
  selectedPaymentMethod!: PaymentMethod;

  private readonly store = inject(Store);

  constructor(private formBuilder: UntypedFormBuilder) {
    this.paymentsDatas = PaymentData;

  }

  ngOnInit(): void {

    /**
    * Form Validatyion
    */
    this.promocodeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });

    // localStorage.setItem('selectedPaymentMethod', JSON.stringify(this.paymentsDatas[0]));
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

  onPaymentChange(paymentMethod: PaymentMethod) {
    this.selectedPaymentMethod = paymentMethod;
    this.store.dispatch(cartActions.postPayment({paymentMethod: paymentMethod}));

    // localStorage.setItem('selectedPaymentMethod', JSON.stringify(paymentMethod));
  }

  setPayment(type: any){
    console.log(type);
  }

}
