import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-feature-checkout-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './feature-checkout-detail.component.html',
  styleUrl: './feature-checkout-detail.component.scss',
})
export class FeatureCheckoutDetailComponent implements OnInit {
  promocodeForm!: UntypedFormGroup;
  submitted = false;

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
}
