import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'comp-product-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css',
})
export class ProductSliderComponent {
  constructor() { }

  /**
   * Swiper Coverflow setting
   */
  Coverflow = {
    arrows: false, // Show navigation arrows
    infinite: true, // Enable infinite loop
    speed: 300, // Animation speed in milliseconds
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  /**
   * Product Data
   */
  productData = [
    {
      image: 'assets/img/shop/catalog/53.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Mono Color Hooded Top',
      price: '21.99',
      discount: '',
      rating: 4.5,
    },
    {
      image: 'assets/img/shop/catalog/56.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Printed Hooded Top',
      price: '25.99',
      discount: '',
      rating: 4,
    },
    {
      image: 'assets/img/shop/catalog/52.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Printed Hooded Top',
      price: '25.99',
      discount: '',
      rating: 4.5,
    },
    {
      image: 'assets/img/shop/catalog/55.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Block-colored Hooded Top',
      price: '24.99',
      discount: '',
      rating: 3.5,
    },
    {
      image: 'assets/img/shop/catalog/22.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Block-colored Hooded Top',
      price: '24.99',
      discount: '',
      rating: 5,
    },
    {
      image: 'assets/img/shop/catalog/57.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Block-colored Hooded Top',
      price: '23.99',
      discount: '',
      rating: 3,
    },
    {
      image: 'assets/img/shop/catalog/20.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Block-colored Hooded Top',
      price: '24.99',
      discount: '',
      rating: 4,
    },
    {
      image: 'assets/img/shop/catalog/51.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Mono Color Hooded Top',
      price: '21.99',
      discount: '',
      rating: 5,
    },
    {
      image: 'assets/img/shop/catalog/21.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Mono Color Hooded Top',
      price: '26.99',
      discount: '',
      rating: 5,
    },
    {
      image: 'assets/img/shop/catalog/24.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Mono Color Hooded Top',
      price: '24.99',
      discount: '',
      rating: 2.5,
    },
    {
      image: 'assets/img/shop/catalog/23.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Block-colored Hooded Top',
      price: '17.99',
      discount: '24.99',
      rating: 3.5,
    },
    {
      image: 'assets/img/shop/catalog/54.jpg',
      category: 'Hoodies & Sweatshirts',
      name: 'Mono Color Hooded Top',
      price: '21.99',
      discount: '',
      rating: 4,
    }
  ]
}
