import { ApiResponse, ApiService } from "@angular-monorepo/http-client";
import { inject, Injectable } from "@angular/core";
import { CartOrder } from "../models/cart-order.model";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly apiService = inject(ApiService);
  // getProducts(params: string): Observable<ApiPagedResponse<Product[]>> {
  //   let paramsUrl = "";
  //   if (params)
  //     paramsUrl = '?' + params;

  //   return this.apiService.get<ApiPagedResponse<Product[]>>(`/v1/Products${paramsUrl}`);
  //   // .pipe(
  //   //   map(res => {
  //   //     if (res.succeded)
  //   //       return res.data;
  //   //     else
  //   //       return []
  //   //   })
  //   // );
  // }

  // getProduct(id: string): Observable<ApiResponse<Product>> {
  //   return this.apiService.get<ApiResponse<Product>>(`/v1/Products/${id}`);
  // }

  createOrder(newOrder: CartOrder): Observable<ApiResponse<number>> {
    return this.apiService.post<ApiResponse<number>,CartOrder>('/v1/Checkout/Orders', newOrder)
    .pipe(
      map(res => {
        return res
      })
    )
  }


}
