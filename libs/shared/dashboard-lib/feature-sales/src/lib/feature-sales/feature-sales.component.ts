import { NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ChartType } from './sales.model';
import { linewithDataChart, OrderCountChart } from './data';
import { NgApexchartsModule } from "ng-apexcharts";
import { map, Observable } from 'rxjs';
import { Table } from './account-list.model';
import { AccountListService } from './account-list.service';
import { FormsModule } from '@angular/forms';
import { Order, OrderService } from "@angular-monorepo/shared/dashboard-lib/data-access";
import { StatusColorDirectoryDirective } from './status-color-directory.directive';





@Component({
  selector: 'lib-feature-sales',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, NgbPagination, FormsModule, StatusColorDirectoryDirective],
  providers: [AccountListService, DecimalPipe],
  templateUrl: './feature-sales.component.html',
  styleUrl: './feature-sales.component.scss',
})
export class FeatureSalesComponent implements OnInit{

  linewithDataChart!: ChartType;
  OrderCountChart!: ChartType;
  basicLineChart: any;

  orders$!: Observable<Order[]>;
  orderDetail$!: Observable<Order | null>;

  totalRecords = 0;
  page: any = 1;
  pageSize: any = 5;
  status: any = "0";

  public isCollapsed = true;

  private readonly orderService = inject(OrderService)

  constructor(private modalService: NgbModal) {

    this.orders$ = this.orderService.getOrders(`PageNumber=${this.page}&PageSize=${this.pageSize}`)
    .pipe(
      map(res => {
        if (res.succeded) {
          this.totalRecords = res.totalRecords;
          return res.data;
        }
        else
          return []
      })
    );
  }


  ngOnInit(): void {

    document.documentElement.scrollTop = 0;

    //fetch data
    this.linewithDataChart = linewithDataChart;
    this.OrderCountChart = OrderCountChart;
  }
  /**
   * Size Chart Modal
   * @param ordertDetailModal scroll modal data
   * @param orderId scroll modal data
   */
   orderModal(ordertDetailModal: any, orderId : string) {
    console.log(orderId);
    this.orderDetail$ = this.orderService.getOrder(orderId).pipe(
      map( res => {
        if (res.succeded){
          console.log(res);
          return res.data
        }
        else{
          console.log(res.data);
          return null
        }
      })
    );

    this.modalService.open(ordertDetailModal, { size: 'lg', centered: true });
  }

  loadPage(page: number) {
    this.orders$ = this.orderService.getOrders(`PageNumber=${this.page}&PageSize=${this.pageSize}`)
      .pipe(
        map(res => {
          if (res.succeded) {
            this.totalRecords = res.totalRecords;
            return res.data;
          }
          else
            return []
        })
      );
  }

  sort(){

    this.orders$ = this.orderService.getOrders(`Status=${this.status}&PageNumber=${this.page}&PageSize=${this.pageSize}`)
    .pipe(
      map(res => {
        if (res.succeded) {
          this.totalRecords = res.totalRecords;
          return res.data;
        }
        else
          return []
      })
    );
  }

}
