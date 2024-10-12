import { ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category, NewCategory } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly apiService = inject(ApiService);

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

  createCategory(newCategory: NewCategory): Observable<ApiResponse<number>> {
    return this.apiService.post<ApiResponse<number>,Category>('/v1/Categories',newCategory)
    .pipe(
      map(res => {
        return res
      })
    )
  }
}
