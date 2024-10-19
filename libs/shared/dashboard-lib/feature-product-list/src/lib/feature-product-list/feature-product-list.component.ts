import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureShopListLsComponent } from "@angular-monorepo/shared/shop-lib/feature-shop-list-ls";


@Component({
  selector: 'lib-feature-product-list',
  standalone: true,
  imports: [CommonModule, FeatureShopListLsComponent],
  templateUrl: './feature-product-list.component.html',
  styleUrl: './feature-product-list.component.scss',
})
export class FeatureProductListComponent {}
