import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators: any;

  loginPassfield!: boolean;
  public isCollapsed = true;
  cartDatas: any;
  subTotal = 0;
  Total: any;

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

  menuVisible = false;

  // constructor(private router: Router, private modalService: NgbModal, private formBuilder: UntypedFormBuilder, public languageService: LanguageService,
  //   public _cookiesService: CookieService, public translate: TranslateService) {
  // }

  ngOnInit(): void {
    // const pathName = window.location.pathname;
    /**
     * Form Validatyion
     */
    // this.loginForm = this.formBuilder.group({
    //   email: ['', [Validators.required]],
    //   password: ['', Validators.required],
    // });

    /**
     * Form Validatyion
     */
    // this.SignupForm = this.formBuilder.group({
    //   email: ['', [Validators.required]],
    //   name: ['', [Validators.required]],
    //   password: ['', Validators.required],
    // });

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

    // this.cartDatas = CartData;
    this.cartDatas = [
      {
          id: 1,
          image: 'assets/img/shop/cart/01.jpg',
          name: 'Women Colorblock Sneakers',
          size: 8.5,
          color: 'White & Blue',
          price: '154.00'
      },
      {
          id: 2,
          image: 'assets/img/shop/cart/02.jpg',
          name: 'TH Jeans City Backpack',
          color: 'Khaki',
          brand: 'Tommy Hilfiger',
          price: '79.50'
      },
      {
          id: 3,
          image: 'assets/img/shop/cart/03.jpg',
          name: '3-Color Sun Stash Hat',
          brand: 'The North Face',
          color: 'Pink / Beige / Dark blue',
          price: '22.50'
      },
      {
          id: 4,
          image: 'assets/img/shop/cart/04.jpg',
          name: 'Cotton Polo Regular Fit',
          size: 42,
          color: 'Light blue',
          price: '9.00'
      },
  ];

  }

  calculatetotal(total: any) {
    this.subTotal = 0;
    this.cartDatas.forEach((element: any) => {

      this.subTotal += parseFloat(element.price)
    });
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
  remove(id: any) {
    this.subTotal -= parseFloat(this.cartDatas[id].price)
    this.cartDatas.splice(id, 1);
  }

}
