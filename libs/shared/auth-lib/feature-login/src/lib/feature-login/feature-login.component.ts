import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthStore } from "@angular-monorepo/auth-data-access";

@Component({
  selector: 'angular-monorepo-feature-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-login.component.html',
  styleUrl: './feature-login.component.css',
})
export class FeatureLoginComponent implements OnInit {
  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;

  // Signup form
  SignupForm!: UntypedFormGroup;
  submit = false;

  constructor(private formBuilder: UntypedFormBuilder) { }

  private readonly authStore = inject(AuthStore);

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
     this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });

     /**
     * Form Validatyion
     */
      this.SignupForm = this.formBuilder.group({
        f_name: ['', [Validators.required]],
        l_name: ['', [Validators.required]],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        cpassword: ['', Validators.required],
      });
  }

  //------------------ Sign In Form ---------------------//
   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

   /**
    * Form submit
    */
    onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.loginForm.invalid) {
       return;
     }

     this.authStore.login();
   }

    //------------------ Sign Up Form ---------------------//

   // convenience getter for easy access to form fields
   get fa() { return this.SignupForm.controls; }

   /**
    * Form submit
    */
    SignupSubmit() {
     this.submit = true;

     // stop here if form is invalid
     if (this.SignupForm.invalid) {
       return;
     }
   }
}
