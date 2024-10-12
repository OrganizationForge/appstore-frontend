import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBrandListComponent } from "@angular-monorepo/shared/brand-lib/feature-brand-list";

@Component({
  selector: 'lib-feature-dashboard-brands',
  standalone: true,
  imports: [CommonModule, FeatureBrandListComponent],
  templateUrl: './feature-dashboard-brands.component.html',
  styleUrl: './feature-dashboard-brands.component.scss',
})
export class FeatureDashboardBrandsComponent {}
