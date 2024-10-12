import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import {ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';
import { OrderSummaryUiComponent } from '@angular-monorepo/shared/ui/order-summary-ui';

import { FeatureShippingListComponent } from "@angular-monorepo/shared/shipping-lib/feature-shipping-list";

@Component({
  selector: 'lib-feature-checkout-shipping',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, OrderSummaryUiComponent, FeatureShippingListComponent],
  templateUrl: './feature-checkout-shipping.component.html',
  styleUrl: './feature-checkout-shipping.component.scss',
})
export class FeatureCheckoutShippingComponent implements OnInit {
  promocodeForm!: UntypedFormGroup;
  submitted = false;


  constructor(private formBuilder: UntypedFormBuilder) { }

  private readonly store = inject(Store);

  cartItems$ = this.store.select(ngrxCartQuery.selectProducts);

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
}
