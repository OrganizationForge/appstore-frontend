import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-feature-shop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-shop.component.html',
  styleUrl: './feature-shop.component.scss',
})
export class FeatureShopComponent {}
