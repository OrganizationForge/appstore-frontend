import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-brand-logos-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-logos-ui.component.html',
  styleUrl: './brand-logos-ui.component.scss',
})
export class BrandLogosUiComponent {
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
