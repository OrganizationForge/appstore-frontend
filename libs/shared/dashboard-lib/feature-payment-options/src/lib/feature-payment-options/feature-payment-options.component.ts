import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturePaymentListComponent } from "@angular-monorepo/shared/payment-lib/feature-payment-list";

@Component({
  selector: 'lib-feature-payment-options',
  standalone: true,
  imports: [CommonModule, FeaturePaymentListComponent],
  templateUrl: './feature-payment-options.component.html',
  styleUrl: './feature-payment-options.component.scss',
})
export class FeaturePaymentOptionsComponent {}
