import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductUiComponent } from '@angular-monorepo/shared/ui/product-ui';
import { map, Observable } from 'rxjs';
import { Product, ProductService } from '@angular-monorepo/shop-data-access';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'lib-feature-product-list',
  standalone: true,
  imports: [CommonModule, ProductUiComponent, NgbPaginationModule],
  templateUrl: './feature-product-list.component.html',
  styleUrl: './feature-product-list.component.scss',
})
export class FeatureProductListComponent implements OnInit {
  gridList$!: Observable<Product[]>;

  totalRecords = 0;
  page: any = 1;
  pageSize: any = 9;

  private readonly productService = inject(ProductService)

  ngOnInit(): void {
    this.gridList$ = this.productService.getProducts(`PageNumber=${this.page}&PageSize=${this.pageSize}`)
    .pipe(
      map(res => {
        if (res.succeded) {
          this.totalRecords = res.totalRecords;
          return res.data;
        }
        else
          return []
      })
    );
  }

  loadPage(page: number) {
    this.gridList$ = this.productService.getProducts(`PageNumber=${page}&PageSize=${this.pageSize}`)
      .pipe(
        map(res => {
          if (res.succeded) {
            this.totalRecords = res.totalRecords;
            return res.data;
          }
          else
            return []
        })
      );
  }
}
