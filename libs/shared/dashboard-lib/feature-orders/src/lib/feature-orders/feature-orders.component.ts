import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AccountListService } from './account-list.service';
import { Table } from './account-list.model';
import { NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'lib-feature-orders',
  standalone: true,
  imports: [CommonModule, NgbPagination, FormsModule],
  providers: [AccountListService, DecimalPipe],
  templateUrl: './feature-orders.component.html',
  styleUrl: './feature-orders.component.scss',
})
export class FeatureOrdersComponent{
  tables$: Observable<Table[]>;
  total$: Observable<number>;
  public isCollapsed = true;

  constructor(public service: AccountListService,private modalService: NgbModal) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }


  /**
   * Size Chart Modal
   * @param ordertDetailModal scroll modal data
   */
   orderModal(ordertDetailModal: any) {
    this.modalService.open(ordertDetailModal, { size: 'lg', centered: true });
  }

}
