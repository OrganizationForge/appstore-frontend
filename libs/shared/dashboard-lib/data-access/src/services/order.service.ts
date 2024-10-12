import { ApiPagedResponse, ApiResponse, ApiService } from "@angular-monorepo/http-client";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Order } from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly apiService = inject(ApiService);

  // getOrders(): Observable<Order[]> {

  //   return this.apiService.get<ApiResponse<Order[]>>(`/v1/Checkout/Orders`)
  //   .pipe(
  //     map(res => {
  //       if (res.succeded)
  //         return res.data;
  //       else
  //         return []
  //     })
  //   );
  // }

  getOrders(params: string): Observable<ApiPagedResponse<Order[]>> {
    let paramsUrl = "";
    if (params)
      paramsUrl = '?' + params;

    return this.apiService.get<ApiPagedResponse<Order[]>>(`/v1/Checkout/Orders${paramsUrl}`);
  }

  getOrder(id: string): Observable<ApiResponse<Order>> {
    return this.apiService.get<ApiResponse<Order>>(`/v1/Checkout/Orders/${id}`);
  }


}
