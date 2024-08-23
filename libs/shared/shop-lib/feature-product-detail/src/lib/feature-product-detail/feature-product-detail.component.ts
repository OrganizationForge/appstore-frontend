import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularData, Product, ProductService } from '@angular-monorepo/shop-data-access';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {NgbRatingModule, NgbAccordionModule, NgbTooltipModule, NgbModule, NgbNavItem } from '@ng-bootstrap/ng-bootstrap';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { SpecsInfoComponent } from '../specs-info/specs-info.component';
import { ReviewsInfoComponent } from '../reviews-info/reviews-info.component';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'lib-feature-product-detail',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule,
    NgbRatingModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbModule,
    NgbNavItem,
    GeneralInfoComponent, SpecsInfoComponent, ReviewsInfoComponent
  ],
  templateUrl: './feature-product-detail.component.html',
  styleUrl: './feature-product-detail.component.scss',
})
export class FeatureProductDetailComponent implements OnInit {
  // Data Get
  PopularDatas: any;

  detailProduct$: Observable<Product | null>;

  private productService = inject(ProductService);

  constructor(){
    this.detailProduct$ = this.productService.getProduct(1).pipe(
      map( res => {
        if (res.succeded){
          console.log(res.data);
          return res.data
        }
        else{
          console.log(res.data);
          return null
        }
      })
    );
  }

  ngOnInit(): void {
    this.PopularDatas = PopularData;
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
