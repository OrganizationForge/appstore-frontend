import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthStore, authActions, ngrxAuthQuery } from "@angular-monorepo/auth-data-access";
import { Store } from '@ngrx/store';

@Component({
  selector: 'angular-monorepo-feature-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-login.component.html',
  styleUrl: './feature-login.component.css',
})
export class FeatureLoginComponent implements OnInit, OnDestroy {
  private readonly authStore = inject(AuthStore);
  private readonly store = inject(Store);


  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;

  // Signup form
  SignupForm!: UntypedFormGroup;
  submit = false;
  data$ = this.store.select(ngrxAuthQuery.selectData);

  constructor(private formBuilder: UntypedFormBuilder) { }


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
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
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
    this.store.dispatch(authActions.updateData({ data: this.loginForm.value }));
    this.authStore.login();
  }


  ngOnDestroy() {
    this.store.dispatch(authActions.initializeForm());
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
    this.store.dispatch(authActions.updateData({ data: this.SignupForm.value }));
    this.authStore.register();
  }
}
