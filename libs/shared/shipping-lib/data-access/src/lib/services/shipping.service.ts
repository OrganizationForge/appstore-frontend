import { ApiPagedResponse, ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ShippingMethod } from '../models/shippingMethod.model';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private readonly apiService = inject(ApiService);

  getShippingMethods(): Observable<ShippingMethod[]> {

    return this.apiService.get<ApiResponse<ShippingMethod[]>>(`/v1/Shipping`)
    .pipe(
      map(res => {
        if (res.succeded)
          return res.data;
        else
          return []
      })
    );
  }

  // getProduct(id: string): Observable<ApiResponse<Product>> {
  //   return this.apiService.get<ApiResponse<Product>>(`/v1/Products/${id}`);
  // }

  createShippingMethod(method: ShippingMethod): Observable<ApiResponse<number>> {
    return this.apiService.post<ApiResponse<number>,ShippingMethod>('/v1/Shipping',method)
    .pipe(
      map(res => {
        return res
      })
    )
  }
}
