import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductSliderComponent } from '@angular-monorepo/product-slider';
import { RouterModule } from '@angular/router';
import { TrendingUiComponent } from '@angular-monorepo/shared/ui/trending-ui';
import { BrandLogosUiComponent } from '@angular-monorepo/shared/ui/brand-logos-ui';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'angular-monorepo-home-store-app',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule, TrendingUiComponent, ProductSliderComponent, BrandLogosUiComponent],
  templateUrl: './home-store-app.component.html',
  styleUrl: './home-store-app.component.css',
})
export class HomeStoreAppComponent implements OnInit {

  listProducts$!: Observable<Product[]>;

  constructor(private homeService : HomeService){

  }
  ngOnInit(): void {
    this.listProducts$ = this.homeService.getProducts();
    console.log(this.listProducts$);
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

  productData = [
    {
      id: '1',
      image: ['assets/img/shop/catalog/01.jpg', 'assets/img/shop/single/gallery/th01.jpg'],
      category: 'Sneakers & Keds',
      name: 'Women Colorblock Sneakers',
      price: '154.00',
      discount: '',
      rating: 3.5,
      review: 75,
      size: ['7.5', '8', '8.5', '9'],
      colors: [],
      type: 'size',
      cat: 'Sneakers',
      brand: 'adidas'
    },
    {
      id: '2',
      image: ['assets/img/shop/catalog/02.jpg'],
      category: 'Women’s T-shirt',
      name: 'Cotton Lace Blouse',
      price: '28.50',
      discount: '38.50',
      rating: 3,
      review: 50,
      size: [],
      colors: ['#eaeaeb', '#d1dceb', '#f4e6a2', '#f3dcff'],
      type: 'color',
      cat: 'Blouses',
      brand: 'ataylor'
    },
    {
      id: '3',
      image: ['assets/img/shop/catalog/03.jpg'],
      category: 'Women’s Shorts',
      name: 'Mom High Waist Shorts',
      price: '28.50',
      discount: '39.50',
      rating: 5,
      review: 20,
      size: ['XS', 'S', 'M', 'L'],
      colors: [],
      type: 'size',
      cat: 'Shorts',
      brand: 'ataylor'
    },
    {
      id: '4',
      image: ['assets/img/shop/catalog/04.jpg'],
      category: 'Sportswear',
      name: 'Women Sports Jacket',
      price: '68.40',
      discount: '',
      rating: 4,
      review: 70,
      size: ['XS', 'S', 'M', 'L'],
      colors: [],
      type: 'size',
      cat: 'Sportswear',
      brand: 'ataylor'
    },
    {
      id: '5',
      image: ['assets/img/shop/catalog/05.jpg'],
      category: 'Men’s Sunglasses',
      name: 'Polarized Sunglasses',
      price: '',
      discount: '',
      rating: 4.5,
      review: 55,
      size: [],
      colors: [],
      type: 'details',
      cat: 'Classic',
      brand: 'armani'
    },
    {
      id: '6',
      image: ['assets/img/shop/catalog/06.jpg'],
      category: 'Backpacks',
      name: 'TH Jeans City Backpack',
      price: '79.50',
      discount: '',
      rating: 3,
      review: 10,
      size: [],
      colors: ['#97947c', '#99a8be', '#eaeaeb'],
      type: 'color',
      cat: 'Backpacks'
    },
    {
      id: '7',
      image: ['assets/img/shop/catalog/07.jpg'],
      category: `Women's Swimwear`,
      name: 'Two-Piece Bikini in Print',
      price: '18.99',
      discount: '',
      rating: 4,
      review: 25,
      size: ['XS', 'S', 'M'],
      colors: [],
      type: 'size',
      cat: 'Swimwear'
    },
    {
      id: '8',
      image: ['assets/img/shop/catalog/08.jpg'],
      category: `Kid's Toys`,
      name: 'Soft Panda Teddy Bear',
      price: '14.99',
      discount: '',
      rating: 5,
      review: 30,
      size: [],
      colors: [],
      type: 'size'
    },
  ]

}
