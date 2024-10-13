import { ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { map, Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { PaymentMethod } from '../../../../../cart-lib/data-access/src/models/payment-method.model';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private readonly apiService = inject(ApiService);

  getPayments(): Observable<PaymentMethod[]> {

    return this.apiService.get<ApiResponse<PaymentMethod[]>>(`/v1/Payments/methods`)
    .pipe(
      map(res => {
        if (res.succeded)
          return res.data;
        else
          return []
      })
    );
  }

  createPayment(payment: PaymentMethod): Observable<ApiResponse<number>> {
    return this.apiService.post<ApiResponse<number>,PaymentMethod>('/v1/Payments/methods', payment)
    .pipe(
      map(res => {
        return res
      })
    )
  }
}
