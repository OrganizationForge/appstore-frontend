import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductSliderComponent } from '@angular-monorepo/product-slider';
import { RouterModule } from '@angular/router';
import { TrendingUiComponent } from '@angular-monorepo/shared/ui/trending-ui';
import { BrandLogosUiComponent } from '@angular-monorepo/shared/ui/brand-logos-ui';
import { Observable, map } from 'rxjs';
import { Product, ProductService } from '@angular-monorepo/shop-data-access';

@Component({
  selector: 'angular-monorepo-home-store-app',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule, TrendingUiComponent, ProductSliderComponent, BrandLogosUiComponent],
  templateUrl: './home-store-app.component.html',
  styleUrl: './home-store-app.component.css',
})
export class HomeStoreAppComponent implements OnInit {

  listProducts$!: Observable<Product[]>;

  constructor(private service : ProductService){

  }
  ngOnInit(): void {
    this.listProducts$ = this.service.getProducts("PageNumber=3&PageSize=10")
    .pipe(
      map(res => {
        if (res.succeded)
          return res.data;
        else
          return []
      })
    );;
  }

  Coverflow = {
    dots: true, // Show pagination dots
    arrows: true, // Show navigation arrows
    fade: true, // Enable fade effect
    infinite: true, // Enable infinite loop
    speed: 300, // Animation speed in milliseconds
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
  };
}
