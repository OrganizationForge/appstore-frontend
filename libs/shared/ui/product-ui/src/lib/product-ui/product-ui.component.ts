import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-product-ui',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbRating],
  templateUrl: './product-ui.component.html',
  styleUrl: './product-ui.component.scss',
})
export class ProductUiComponent {

  @Input() data: any;

}
