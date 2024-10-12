import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureShippingListComponent } from "@angular-monorepo/shared/shipping-lib/feature-shipping-list";


@Component({
  selector: 'lib-feature-shipping-options',
  standalone: true,
  imports: [CommonModule, FeatureShippingListComponent],
  templateUrl: './feature-shipping-options.component.html',
  styleUrl: './feature-shipping-options.component.scss',
})
export class FeatureShippingOptionsComponent {}
