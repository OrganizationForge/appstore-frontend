import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

import { Product, ProductService } from '@angular-monorepo/shop-data-access';


@Component({
  selector: 'lib-feature-shop-list-ls',
  standalone: true,
  imports: [CommonModule, NgbPagination],
  templateUrl: './feature-shop-list-ls.component.html',
  styleUrl: './feature-shop-list-ls.component.scss',
})
export class FeatureShopListLsComponent implements OnInit{

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

  editProduct(product : any){
    console.log(product);
  }

  removeProduct(product : any){
    console.log(product);
  }
}
