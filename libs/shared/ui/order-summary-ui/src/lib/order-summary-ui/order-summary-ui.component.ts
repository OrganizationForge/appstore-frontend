import { Component, inject, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { RouterLink } from '@angular/router';

import { Store } from '@ngrx/store';
import {ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';
import { map } from 'rxjs';

@Component({
  selector: 'lib-order-summary-ui',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './order-summary-ui.component.html',
  styleUrl: './order-summary-ui.component.scss',
})
export class OrderSummaryUiComponent implements OnInit {

  @Input() showCartItems!: boolean;

  private readonly store = inject(Store);
  promocodeForm!: UntypedFormGroup;
  submitted = false;
  cartItems$ = this.store.select(ngrxCartQuery.selectProducts);
  cartTotal$ = this.store.select(ngrxCartQuery.selectTotal);
  shipping$ = this.store.select(ngrxCartQuery.selectShipping);

  totalOrder = 0;
  shippingPrice = 0;

  constructor(private formBuilder: UntypedFormBuilder){}

  ngOnInit(): void {
    this.promocodeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });

    this.cartTotal$.subscribe(total => {
      this.totalOrder = this.totalOrder + total;
    });

    this.shipping$.subscribe(ship => {
      this.shippingPrice = this.totalOrder + (ship?.price || 0);
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
