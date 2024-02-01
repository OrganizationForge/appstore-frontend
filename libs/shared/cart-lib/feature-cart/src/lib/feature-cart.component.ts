import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-feature-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-cart.component.html',
  styleUrl: './feature-cart.component.scss',
})
export class FeatureCartComponent {

}
