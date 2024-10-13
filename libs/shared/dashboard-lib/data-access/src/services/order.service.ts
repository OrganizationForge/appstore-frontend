import { ApiPagedResponse, ApiResponse, ApiService } from "@angular-monorepo/http-client";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { NewOrderStatus, Order } from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly apiService = inject(ApiService);


  getOrders(params: string): Observable<ApiPagedResponse<Order[]>> {
    let paramsUrl = "";
    if (params)
      paramsUrl = '?' + params;

    return this.apiService.get<ApiPagedResponse<Order[]>>(`/v1/Orders${paramsUrl}`);
  }

  getOrder(id: string): Observable<ApiResponse<Order>> {
    return this.apiService.get<ApiResponse<Order>>(`/v1/Orders/${id}`);
  }

  setStatusOrder(status: NewOrderStatus): Observable<ApiResponse<number>> {
    return this.apiService.put<ApiResponse<number>,NewOrderStatus>('/v1/Orders/status', status)
    .pipe(
      map(res => {
        return res
      })
    )
  }

}
