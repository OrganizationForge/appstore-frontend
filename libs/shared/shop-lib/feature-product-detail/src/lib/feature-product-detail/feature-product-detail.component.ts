import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PopularData } from '@angular-monorepo/shop-data-access';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {NgbRatingModule, NgbAccordionModule, NgbTooltipModule, NgbModule, NgbNavItem } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-feature-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SlickCarouselModule,
    NgbRatingModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbModule,
    NgbNavItem
  ],
  templateUrl: './feature-product-detail.component.html',
  styleUrl: './feature-product-detail.component.scss',
})
export class FeatureProductDetailComponent implements OnInit {
  reviewForm!: UntypedFormGroup;
  submitted = false;
  // Data Get
  PopularDatas: any;


  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.PopularDatas = PopularData;
    /**
     * Form Validatyion
     */
    this.reviewForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      review: ['', [Validators.required]],
    });
  }

  // Image Click Filtering
  filterImg(e: any, image: any) {
    document.querySelectorAll('.product-gallery-thumblist a').forEach(element => {
      element.classList.remove('active')
    });
    const img: any = (document.querySelector('#first img') as HTMLImageElement);
    img.src = image;
    e.target.closest('a').classList.add('active');
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
  }

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

  /**
  * Swiper Cheaper setting
  */
  Cheaper = {
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    dots: true, // Show pagination dots
    arrows: false, // Hide navigation arrows
    infinite: true, // Enable infinite loop
    speed: 300, // Animation speed in milliseconds
  };
}
