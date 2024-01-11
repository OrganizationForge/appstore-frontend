import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'comp-brand-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-logos.component.html',
  styleUrl: './brand-logos.component.css',
})
export class BrandLogosComponent {
  brandData = [
    {
      image: 'assets/img/shop/brands/01.png',
    },
    {
      image: 'assets/img/shop/brands/02.png',
    },
    {
      image: 'assets/img/shop/brands/03.png',
    },
    {
      image: 'assets/img/shop/brands/04.png',
    },
    {
      image: 'assets/img/shop/brands/05.png',
    },
    {
      image: 'assets/img/shop/brands/06.png',
    },
    {
      image: 'assets/img/shop/brands/07.png',
    },
    {
      image: 'assets/img/shop/brands/08.png',
    },
    {
      image: 'assets/img/shop/brands/09.png',
    },
    {
      image: 'assets/img/shop/brands/10.png',
    },
    {
      image: 'assets/img/shop/brands/11.png',
    },
    {
      image: 'assets/img/shop/brands/12.png',
    }
  ]
}
