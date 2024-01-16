import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-product-ui',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-ui.component.html',
  styleUrl: './product-ui.component.scss',
})
export class ProductUiComponent {
  @Input() data: any;
}
