import { ApiPagedResponse, ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NewProduct, Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { Brand } from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiService = inject(ApiService);
  getProducts(params: string): Observable<ApiPagedResponse<Product[]>> {
    let paramsUrl = "";
    if (params)
      paramsUrl = '?' + params;

    return this.apiService.get<ApiPagedResponse<Product[]>>(`/v1/Products${paramsUrl}`);
    // .pipe(
    //   map(res => {
    //     if (res.succeded)
    //       return res.data;
    //     else
    //       return []
    //   })
    // );
  }

  createProduct(newProduct: NewProduct): Observable<ApiResponse<number>> {
    return this.apiService.post<ApiResponse<number>,NewProduct>('/v1/Products',newProduct)
    .pipe(
      map(res => {
        return res
      })
    )
  }
  // createProduct(newProduct: FormData): Observable<ApiResponse<number>> {
  //   return this.apiService.post<ApiResponse<number>,FormData>('/v1/Products',newProduct)
  //   .pipe(
  //     map(res => {
  //       return res
  //     })
  //   )
  // }

  getCategories(): Observable<Category[]> {

    return this.apiService.get<ApiResponse<Category[]>>(`/v1/Categories`)
    .pipe(
      map(res => {
        if (res.succeded)
          return res.data;
        else
          return []
      })
    );
  }

  getBrands(): Observable<Brand[]> {

    return this.apiService.get<ApiResponse<Brand[]>>(`/v1/Brands`)
    .pipe(
      map(res => {
        if (res.succeded)
          return res.data;
        else
          return []
      })
    );
  }
}
