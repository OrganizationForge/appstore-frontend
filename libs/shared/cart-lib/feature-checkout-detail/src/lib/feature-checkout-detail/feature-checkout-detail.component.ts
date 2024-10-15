import { OrderSummaryUiComponent } from '@angular-monorepo/shared/ui/order-summary-ui';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartUserDetail, cartActions, ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'lib-feature-checkout-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, OrderSummaryUiComponent],
  templateUrl: './feature-checkout-detail.component.html',
  styleUrl: './feature-checkout-detail.component.scss',
})
export class FeatureCheckoutDetailComponent implements OnInit {
  promocodeForm!: UntypedFormGroup;
  userForm!: UntypedFormGroup;
  submitted = false;


  private readonly store = inject(Store);
  private readonly router = inject(Router);

  cartUseDetails$ : Observable<CartUserDetail | null> = this.store.select(ngrxCartQuery.selectDetails);

  constructor(private formBuilder: UntypedFormBuilder) { }


  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      checkoutFn: ['',[Validators.required]],
      checkoutLn: ['',[Validators.required]],
      checkoutEmail: ['',[Validators.required]],
      checkoutPhone: ['',[Validators.required]],
      checkoutCountry: [''],
      checkoutZip: ['',[Validators.required]],
      checkoutAddress: ['',[Validators.required]],
    });

    this.cartUseDetails$.pipe(
      map(res => {
        if (res) {
          this.userForm.patchValue({
            checkoutFn: res.firstName,
            checkoutLn: res.lastName,
            checkoutEmail: res.email,
            checkoutPhone: res.phoneNumber,
            checkoutCountry: res.country || '', // Set country to empty string if not present
            checkoutZip: res.zipCode,
            checkoutAddress: res.address
          });
        }
      })
    ).subscribe()


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

  get dataUserForm() { return this.userForm.controls; }

  save() {

    this.submitted = true;
    if (this.userForm.valid) {
      const dataUser : CartUserDetail = {

        firstName: this.userForm.get('checkoutFn')?.value,
        lastName: this.userForm.get('checkoutLn')?.value,
        email: this.userForm.get('checkoutEmail')?.value,
        phoneNumber: this.userForm.get('checkoutPhone')?.value,
        country: this.userForm.get('checkoutCountry')?.value,
        zipCode: this.userForm.get('checkoutZip')?.value,
        address: this.userForm.get('checkoutAddress')?.value,
      }
      this.store.dispatch(cartActions.postUserDetail({userDetail: dataUser}));
      this.router.navigate(['/cart/checkout-shipping'])
    }
    else
    console.log('invalid form');
    // this.userForm.reset();
  }
}
