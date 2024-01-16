import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-product-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-ui.component.html',
  styleUrl: './product-ui.component.scss',
})
export class ProductUiComponent {
  @Input() data: any;
}
