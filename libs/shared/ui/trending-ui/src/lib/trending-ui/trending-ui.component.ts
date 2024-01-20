import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductUiComponent } from '@angular-monorepo/shared/ui/product-ui';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbRatingModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-trending-ui',
  standalone: true,
  imports: [CommonModule, ProductUiComponent, RouterModule, NgbTooltipModule,NgbRatingModule],
  templateUrl: './trending-ui.component.html',
  styleUrl: './trending-ui.component.scss',
})
export class TrendingUiComponent {
  readonly = true;
  @Input() itemsData: any;

  constructor(private modalService: NgbModal) { }


  /**
   * Product Data
   */



  /**
   * Open center modal and product data get
   * @param centerDataModal center modal data
   */
  product_img: any;
  singleData: any;
  centerModal(centerDataModal: any, id: any) {
    this.singleData = this.itemsData[id];
    this.product_img = this.singleData.image[0];
    this.modalService.open(centerDataModal, { size: 'xl', centered: true });
  }

  // Image Click Filtering
  filterImg(id: any) {
    this.product_img = this.singleData.image[id]
  }
}
