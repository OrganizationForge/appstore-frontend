import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, NewProductComment, Product, ProductService } from '@angular-monorepo/shop-data-access';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbRatingModule, NgbAccordionModule, NgbTooltipModule, NgbModule, NgbNavItem, NgbModal, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { SpecsInfoComponent } from '../specs-info/specs-info.component';
import { ReviewsInfoComponent } from '../reviews-info/reviews-info.component';
import { map, Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PopulerData, Reviews, StyleData } from './data';
import { ActivatedRoute } from "@angular/router";

import { Store } from '@ngrx/store';
import { cartActions, CartProduct } from '@angular-monorepo/shared/cart-lib/data-access';

import { EditorUiComponent } from "@angular-monorepo/shared/ui/editor-ui";
import { OutputData } from '@editorjs/editorjs';

@Component({
  selector: 'lib-feature-product-detail',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, ReactiveFormsModule, FormsModule,
    NgbRatingModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbModule,
    NgbNavItem,
    GeneralInfoComponent, SpecsInfoComponent, ReviewsInfoComponent
    ,EditorUiComponent
  ],
  templateUrl: './feature-product-detail.component.html',
  styleUrl: './feature-product-detail.component.scss',
})
export class FeatureProductDetailComponent implements OnInit {


  detailProduct$!: Observable<Product | null>;


    // Review Form
    reviewForm!: UntypedFormGroup;
    submitted = false;
    styleDatas: any;
    populerDatas: any;
    zoomImag: any;
    reviews: any;

   productId: string | '' = '';
   selectedQuantity = '1';


  private productService = inject(ProductService);
  private route = inject(ActivatedRoute)
  private readonly store = inject(Store);

  constructor( private modalService: NgbModal, private formBuilder: UntypedFormBuilder ){

  }

  dataContent : OutputData = {
    time: 1722185500950,
    blocks: [
      {
        id: "mhTl6ghSkV",
        type: "paragraph",
        data: {
          text: "Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓",
        },
      }
    ]
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('productId') || '';
    })


    this.detailProduct$ = this.productService.getProduct(this.productId).pipe(
      map( res => {
        if (res.succeded){
          console.log(res.data.comments);
          return res.data
        }
        else{
          console.log(res.data);
          return null
        }
      })
    );

    this.styleDatas = StyleData;
    this.populerDatas = PopulerData;
    this.reviews = Reviews;
    /**
     * Form Validatyion
     */
    this.reviewForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      review: ['', [Validators.required]],
      pros: [''],
      cons: [''],
    });

    this.zoomImag = "assets/img/shop/single/gallery/th01.jpg"
  }

  /**
   * Size Chart Modal
   * @param sizeChartModal scroll modal data
   */
  sizetModal(sizeChartModal: any) {
    this.modalService.open(sizeChartModal, { size: 'md', centered: true });
  }


  // convenience getter for easy access to form fields
  get form() { return this.reviewForm.controls; }

  /**
  * Form submit
  */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.reviewForm.invalid) {
      return;
    }

    const newComment: NewProductComment = {
      customerName: this.reviewForm.value.name,
      content: this.reviewForm.value.review,
      pros: this.reviewForm.value.pros,
      cons: this.reviewForm.value.cons,
      rating: this.reviewForm.value.rating,
      productId: this.productId
    };

    console.log(newComment);

    this.productService.createComment(newComment).subscribe((res) => {
      if (res.succeded) {
        alert('Guardado Ok');
        this.reviewForm.reset();
      }
      else res.errors;
    });
  }

  /**
  * Swiper Style setting
  */
  Style = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  /**
  * Swiper Popular setting
  */
  Popular = {
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1,
    arrows: true, // Disable navigation arrows
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  // Image Click Filtering
  filterImg(e: any, image: any) {
    document.querySelectorAll('.product-gallery-thumblist a').forEach(element => {
      element.classList.remove('active')
      console.log(element);
    });
    const img: any = (document.querySelector('#first img') as HTMLImageElement);
    img.src = image;
    e.target.closest('a').classList.add('active');
    this.zoomImag = image
  }

  addToCart(product: CartProduct) {
    product.qty = Number(this.selectedQuantity);
    product.total = product.price * Number(this.selectedQuantity);
    this.store.dispatch(cartActions.postCart({products: product}));
  }


}
