import { ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiService = inject(ApiService);
  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.apiService.get<ApiResponse<Product[]>>('/v1/Products')
    .pipe(
      map(res => {
        if (res.succeded)
          return res.data;
        else
          return []
      })
    );;
  }
}