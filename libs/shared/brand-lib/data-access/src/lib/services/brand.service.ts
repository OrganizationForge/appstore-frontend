import { ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { map, Observable } from 'rxjs';
import { Brand } from '../models/brand.model';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private readonly apiService = inject(ApiService);

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

  createBrand(brand: Brand): Observable<ApiResponse<number>> {
    return this.apiService.post<ApiResponse<number>,Brand>('/v1/Brands', brand)
    .pipe(
      map(res => {
        return res
      })
    )
  }
}
