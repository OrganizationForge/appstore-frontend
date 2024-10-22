import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { OrderService } from "@angular-monorepo/shared/dashboard-lib/data-access";


@Component({
  selector: 'lib-checkout-complete',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout-complete.component.html',
  styleUrl: './checkout-complete.component.scss',
})
export class CheckoutCompleteComponent implements OnInit {
  orderId: string | '' = '';

  private route = inject(ActivatedRoute)
  private readonly orderService = inject(OrderService)

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
      this.orderId = params.get('orderId') || '';
    })
  }

  downloadOrder() {
    this.orderService.downloadOrderPdf(this.orderId).subscribe((pdfBlob: Blob) => {
      const blobUrl = URL.createObjectURL(pdfBlob);
      window.open(blobUrl); // Abre el PDF en una nueva pestaña
    });
  }
}
