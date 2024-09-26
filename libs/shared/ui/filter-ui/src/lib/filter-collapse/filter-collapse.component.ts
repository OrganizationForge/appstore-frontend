import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-filter-collapse',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './filter-collapse.component.html',
  styleUrl: './filter-collapse.component.scss',
})
export class FilterCollapseComponent {
@Input() data: any;
@Input() title!: string;
@Output() send: EventEmitter<any> = new EventEmitter();

  total: any;
    // Category Filtering
    categoryFilter(e: any, name: any) {
      if (name != 'All') {
        // this.Gridlists = ShopGridLsdata.filter((product: any) => {
        //   return product.cat === name;
        // });

        // this.total = this.Gridlists.length;
        this.total != 0 ? document.querySelector('.data-blank')?.classList.add('d-none') : document.querySelector('.data-blank')?.classList.remove('d-none');

      } else {
        // this.total = ShopGridLsdata.length;
        // return this.Gridlists = this.AllGridlists;
      }
    }

  filter(paramFilter: number){
    this.send.emit(paramFilter)
  }

}
