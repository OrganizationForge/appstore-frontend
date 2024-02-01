import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CartData } from './data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-feature-checkout-review',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './feature-checkout-review.component.html',
  styleUrl: './feature-checkout-review.component.css',
})
export class FeatureCheckoutReviewComponent implements OnInit {
  reviewDatas: any;

  promocodeForm!: UntypedFormGroup;
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.reviewDatas = CartData;

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
