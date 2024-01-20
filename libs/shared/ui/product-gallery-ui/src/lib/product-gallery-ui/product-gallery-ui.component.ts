import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-product-gallery-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-gallery-ui.component.html',
  styleUrl: './product-gallery-ui.component.scss',
})
export class ProductGalleryUiComponent {

  @Input() dataImages!: string[];


  // Image Click Filtering
  filterImg(e: any, image: string) {
    document.querySelectorAll('.product-gallery-thumblist a').forEach(element => {
      element.classList.remove('active')
    });
    const img: HTMLImageElement = (document.querySelector('#first img') as HTMLImageElement);
    img.src = image;
    e.target.closest('a').classList.add('active');
  }
}
