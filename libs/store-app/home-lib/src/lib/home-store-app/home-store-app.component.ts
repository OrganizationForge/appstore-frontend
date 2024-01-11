import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TrendingComponent } from '@angular-monorepo/trending';
import { ProductSliderComponent } from '@angular-monorepo/product-slider';
import { BrandLogosComponent } from '@angular-monorepo/brand-logos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'angular-monorepo-home-store-app',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule, TrendingComponent, ProductSliderComponent, BrandLogosComponent],
  templateUrl: './home-store-app.component.html',
  styleUrl: './home-store-app.component.css',
})
export class HomeStoreAppComponent {

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
