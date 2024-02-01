import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ShippingData } from './data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-feature-checkout-shipping',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './feature-checkout-shipping.component.html',
  styleUrl: './feature-checkout-shipping.component.scss',
})
export class FeatureCheckoutShippingComponent implements OnInit {
  shippingDatas: any;
  promocodeForm!: UntypedFormGroup;
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.shippingDatas = ShippingData;
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
