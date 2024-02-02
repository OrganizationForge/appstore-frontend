import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartProduct, ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';
import { map } from 'rxjs';

@Component({
  selector: 'lib-feature-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbAccordionModule, RouterModule],
  templateUrl: './feature-checkout.component.html',
  styleUrl: './feature-checkout.component.scss',
})
export class FeatureCheckoutComponent implements OnInit {

  private readonly store = inject(Store);

  // Card Form
  cardForm!: UntypedFormGroup;
  submitted = false;

  // Shipping Form
  shippingForm!: UntypedFormGroup;
  submit = false;

  cartItems$ = this.store.select(ngrxCartQuery.selectProducts);

  qty: any = 1;
  subTotal = 0;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
    * Form Validatyion
    */
    this.cardForm = this.formBuilder.group({
      code: ['', [Validators.required]],
    });

    /**
     * Shipping Form Validatyion
     */
    this.shippingForm = this.formBuilder.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      code: ['', [Validators.required]],
    });

    //  this.cartDatas = CartData;
    this.cartItems$.pipe(
      map(res => {
        res.forEach((element: CartProduct) => {

          console.log(element.price)
          element.total = element.price;
          element.qty = 1;
          this.subTotal += element.price
        });
      })
    )
  }

  // Quantity wise price total or total update
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

  // Remove Cart
  removeCart(event: any, id: any) {
    //  this.subTotal -= parseFloat(this.cartDatas[id].total)
    event.target.closest('.border-bottom').remove();
  }

  // convenience getter for easy access to form fields
  get form() { return this.cardForm.controls; }

  /**
  * Form submit
  */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.cardForm.invalid) {
      return;
    }
  }

  // convenience getter for easy access to form fields
  get sform() { return this.shippingForm.controls; }

  /**
  * Form submit
  */
  Submit() {
    this.submit = true;
    // stop here if form is invalid
    if (this.shippingForm.invalid) {
      return;
    }
  }
}
