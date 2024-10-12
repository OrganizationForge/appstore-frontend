import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCategoryListComponent } from "@angular-monorepo/shared/category-lib/feature-category-list";

@Component({
  selector: 'lib-feature-dashboard-categories',
  standalone: true,
  imports: [CommonModule, FeatureCategoryListComponent],
  templateUrl: './feature-dashboard-categories.component.html',
  styleUrl: './feature-dashboard-categories.component.scss',
})
export class FeatureDashboardCategoriesComponent {}
