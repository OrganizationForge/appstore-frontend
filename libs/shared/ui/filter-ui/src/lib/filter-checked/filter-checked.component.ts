import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-filter-checked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-checked.component.html',
  styleUrl: './filter-checked.component.scss',
})
export class FilterCheckedComponent {

  @Input() data: any;
  @Input() title!: string;
  @Output() send: EventEmitter<any> = new EventEmitter();

  checkedVal: any[] = [];

  sizeFilter() {
    const checkboxes: any = document.getElementsByName('category[]');
    let result
    // checkbox array data get
    this.checkedVal = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        this.checkedVal.push(result);
      }
    }
    // check box check wise data get
    // this.AllGridSize = [];
    if (this.checkedVal.length > 0) {
      // this.Gridlists = ShopGridLsdata.filter((product: any) => {
      //   for (let i = 0; i < product.size.length; i++) {
      //     for (let j = 0; j < this.checkedVal.length; j++) {
      //       if (product.size[i] == this.checkedVal[j]) {
      //         this.AllGridSize.push(product)
      //       }
      //     }
      //   }
      // });
      // this.AllGridSize = [...new Map(this.AllGridSize.map((item: any) => [item['id'], item])).values()]
      // this.Gridlists = this.AllGridSize
      // this.total = this.Gridlists.length;
    }
    else {
      // return this.Gridlists = this.AllGridlists;
    }
  }
}
