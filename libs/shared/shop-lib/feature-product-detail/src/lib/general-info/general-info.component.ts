import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductGalleryUiComponent } from '@angular-monorepo/shared/ui/product-gallery-ui';

@Component({
  selector: 'lib-general-info',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule, ProductGalleryUiComponent],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss',
})
export class GeneralInfoComponent {

  images = [

    'assets/img/shop/single/gallery/05.jpg',
    'assets/img/shop/single/gallery/06.jpg',
    'assets/img/shop/single/gallery/07.jpg',
    'assets/img/shop/single/gallery/08.jpg',
  ]

}
