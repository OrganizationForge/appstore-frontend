import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FeatureMenuComponent } from '@angular-monorepo/feature-menu';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthStore } from '@angular-monorepo/auth-data-access';
import { Store } from '@ngrx/store';
import { cartActions, CartProduct, ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';
import { map, Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'angular-monorepo-header',
  standalone: true,
  imports: [CommonModule, FeatureMenuComponent, RouterModule, AsyncPipe, ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  private readonly authStore = inject(AuthStore);
  router = inject(Router)

  showNavigationArrows = true;
  showNavigationIndicators: any;

  loginPassfield!: boolean;
  public isCollapsed = true;
  cartDatas: any;
  subTotal = 0;
  Total: any;

  $isAuthenticated = this.authStore.loggedIn;

  // Login Form
  // loginForm!: UntypedFormGroup;
  submitted = false;

  //  Signup form
  signupPassfield!: boolean;
  signupCPassfield!: boolean;
  // SignupForm!: UntypedFormGroup;
  submit = false;

  // Language set
  flagvalue: any;
  selectedLanguage: any;
  flag: any;
  countryName: any;
  cookieValue: any;
  valueset: any;

  searchControl = new FormControl('');
  menuVisible = false;

  private readonly store = inject(Store);

  cartItems$! : Observable<CartProduct[]>;

  // constructor(private router: Router, private modalService: NgbModal, private formBuilder: UntypedFormBuilder, public languageService: LanguageService,
  //   public _cookiesService: CookieService, public translate: TranslateService) {
  // }

  ngOnInit(): void {


    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.store.dispatch(cartActions.loadCart({ cart: JSON.parse(storedCart) }));
    }

  this.cartItems$ = this.store.select(ngrxCartQuery.selectProducts).pipe();


    // Language set
    // this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/img/flags/en.png'; }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }

    this.selectedLanguage = 'Eng / $'

  }

  search(){
    const searchTerm = this.searchControl.value;
    this.router.navigate(['/shop/grid-ls', searchTerm]);
  }

  calculatetotal(total: any) {
    this.subTotal = 0;

    this.cartItems$.pipe(
      map(res => {
        console.log(res)
        res.forEach((element: CartProduct) => {
          console.log(element.total)
          this.subTotal += element.total ? element.total : 0
        });
      })
    )

    // this.cartItems$.forEach((element: any) => {
    //   console.log(element);
    //   this.subTotal += parseFloat(element.price)
    // });
    return this.subTotal.toFixed(2)
  }


  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.querySelector('.navbar-sticky');
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      navbar?.classList.add('navbar-stuck');
      document.querySelector(".btn-scroll-top")?.classList.add('show');
    }
    else {
      navbar?.classList.remove('navbar-stuck');
      document.querySelector(".btn-scroll-top")?.classList.remove('show');
    }
  }

  /**
   * Open scroll modal
   * @param toggleDataModal scroll modal data
   */
  toggleModal(staticDataModal: any) {
    // this.modalService.open(staticDataModal, { size: 'md', centered: true });
  }

  //------------------ Sign In Form ---------------------//
  // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }
  }

  /**
   * Password Hide/Show
   */
  toggleLoginPassField() {
    this.loginPassfield = !this.loginPassfield;
  }

  //------------------ Sign Up Form ---------------------//

  // convenience getter for easy access to form fields
  // get fa() { return this.SignupForm.controls; }

  /**
   * Form submit
   */
  SignupSubmit() {
    this.submit = true;

    // stop here if form is invalid
    // if (this.SignupForm.invalid) {
    //   return;
    // }
  }

  /**
 * Password Hide/Show
 */
  togglesignupPassfield() {
    this.signupPassfield = !this.signupPassfield;
  }

  /**
  * Password Hide/Show
  */
  togglesignupCPassfield() {
    this.signupCPassfield = !this.signupCPassfield;
  }

  // Scroll Toggle Menu Hide/Show
  menuShow() {
    this.menuVisible = !this.menuVisible
    // document.querySelector('.navbar-stuck-menu')?.classList.toggle('show');
  }

  // Sidebar Toggle
  sidebar() {
    document.getElementById('shop-sidebar')?.classList.add('show');
  }

  /***
 * Language Listing
 */
  listLang = [
    { text: 'English', flag: 'assets/img/flags/en.png', lang: 'en', language: 'Eng / $' },
    { text: 'Deutsche', flag: 'assets/img/flags/de.png', lang: 'de', language: 'DE / £' },
    { text: 'Italiana', flag: 'assets/img/flags/it.png', lang: 'it', language: 'IT / ¥' },
    { text: 'français', flag: 'assets/img/flags/fr.png', lang: 'fr', language: 'FR / €' },
  ];

  /***
   * Language Value Set
   */
  setLanguage(text: string, lang: string, flag: string, language: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.selectedLanguage = language
    // this.languageService.setLanguage(lang);
  }

  // Remove
  remove(product: any) {
    // this.subTotal -= parseFloat(this.cartDatas[id].price)
    this.store.dispatch(cartActions.removeItemFromCart({products: product}));
  }

}
