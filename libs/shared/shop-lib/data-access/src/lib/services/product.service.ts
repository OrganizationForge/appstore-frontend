import { ApiPagedResponse, ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NewProduct, Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { Brand } from '../models/brand.model';
import { NewProductComment } from '../models/comment.model';
import { QuantityType } from '../models/quantityType.model';
import { Availability } from '../models/availability.model';

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

  getProduct(id: string): Observable<ApiResponse<Product>> {
    return this.apiService.get<ApiResponse<Product>>(`/v1/Products/${id}`);
  }

  createProduct(newProduct: NewProduct): Observable<ApiResponse<number>> {
    return this.apiService.post<ApiResponse<number>,NewProduct>('/v1/Products',newProduct)
    .pipe(
      map(res => {
        return res
      })
    )
  }

  createComment(newComment: NewProductComment): Observable<ApiResponse<number>> {
    return this.apiService.post<ApiResponse<number>,NewProductComment>('/v1/Products/comments',newComment)
    .pipe(
      map(res => {
        return res
      })
    )
  }

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

  getQuantityTypes(): Observable<QuantityType[]> {

    return this.apiService.get<ApiResponse<QuantityType[]>>(`/v1/Domain/quantity-types`)
    .pipe(
      map(res => {
        if (res.succeded)
          return res.data;
        else
          return []
      })
    );
  }

  getAvailabilities(): Observable<Availability[]> {

    return this.apiService.get<ApiResponse<Availability[]>>(`/v1/Domain/availabilities`)
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
