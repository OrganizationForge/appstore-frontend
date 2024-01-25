import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductUiComponent } from '@angular-monorepo/shared/ui/product-ui';
import { Category, Product, ProductService, ShopGridLsdata } from '@angular-monorepo/shop-data-access';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map } from 'rxjs';
import { FilterCollapseComponent } from '@angular-monorepo/shared/ui/filter-ui';
import { NgxSliderModule, Options } from 'ngx-slider-v2';

@Component({
  selector: 'lib-feature-shop-grid-ls',
  standalone: true,
  imports: [CommonModule, ProductUiComponent, NgbPaginationModule, FilterCollapseComponent, NgxSliderModule],
  templateUrl: './feature-shop-grid-ls.component.html',
  styleUrl: './feature-shop-grid-ls.component.scss',
})
export class FeatureShopGridLsComponent implements OnInit {
  // Table data
  content?: any;
  // Gridlists?: any;
  gridList$!: Observable<Product[]>;
  categoryList$!: Observable<Category[]>;

  // Custom Data
  totalRecords: number = 0;
  page: any = 1;
  pageSize: any = 9;


  AllGridlists: any;
  AllGridSize: any;
  AllGridColor: any;

  constructor(private modalService: NgbModal, private productService : ProductService) {
    // this.gridLsList = service.gridLsList$;
  }

  ngOnInit(): void {
    this.gridList$ = this.productService.getProducts(`PageNumber=${this.page}&PageSize=${this.pageSize}`)
      .pipe(
      map(res => {
        if (res.succeded){
          this.totalRecords = res.totalRecords;
          return res.data;
        }
        else
          return []
      })
    );
    this.categoryList$ = this.productService.getCategories();

    this.AllGridlists = Object.assign([], this.gridList$);
    this.AllGridSize = Object.assign([]);
    this.AllGridColor = Object.assign([]);
    document.querySelector('.data-blank')?.classList.add('d-none')

    this.refreshCountries()

    setTimeout(() => {
      document.querySelector('.sidebar-filter')?.classList.remove('d-none')
    }, 0);

  }

  // Pagination data get
  loadPage(page: number) {
    this.gridList$ = this.productService.getProducts(`PageNumber=${page}&PageSize=${this.pageSize}`)
    .pipe(
      map(res => {
        if (res.succeded){
          this.totalRecords = res.totalRecords;
          return res.data;
        }
        else
          return []
      })
    );;
  }

  filterCategory(categoryId: number) {
    console.log("Filter Category Id : ", categoryId);
    this.gridList$ = this.productService.getProducts(`CategoryId=${categoryId}`)
    .pipe(
      map(res => {
        if (res.succeded){
          this.totalRecords = res.totalRecords;
          return res.data;
        }
        else
          return []
      })
    );
  }

   /**
  * Range Slider Wise Data Filter
  */
  // Range Slider
  minValue: number = 250;
  maxValue: number = 721;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };
  valueChange(value: number, boundary: boolean): void {
    if (boundary) {
      this.minValue = value;
    } else {
      this.maxValue = value;
      // this.Gridlists = ShopGridLsdata.filter((data: any) => {
      //   data.price = data.price.replace(/,/g, '')
      //   return data.price >= this.minValue && data.price <= this.maxValue;
      // });
      // this.total = this.Gridlists.length;
    }
  }

  /**
   * Open center modal and product data get
   * @param centerDataModal center modal data
   */
  product_img: any;
  singleData!: Product;
  centerModal(centerDataModal: any, id: any) {
    // this.singleData = this.gridList$[id];
    this.product_img = this.singleData.urlImage;
    // this.modalService.open(centerDataModal, { size: 'xl', centered: true });
  }

  // Image Click Filtering
  filterImg(id: any) {
    this.product_img = this.singleData.urlImage
  }


  // Brand Filtering
  checkedVal: any[] = [];
  refreshCountries() {
    const checkboxes: any = document.getElementsByName('category[]');
    let result
    this.checkedVal = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        this.checkedVal.push(result);
      }
    }
    if (this.checkedVal.length > 0) {
      // this.Gridlists = ShopGridLsdata.filter((product: any) => {
      //   return this.checkedVal.includes(product.brand);
      // });
      // this.total = this.Gridlists.length;
    }
    else {
      // this.total = ShopGridLsdata.length;
      // return this.Gridlists = this.AllGridlists;
    }
  }

  // Product Size Filter
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
    this.AllGridSize = [];
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

  // Product Color Filter
  colorFilter() {
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
    this.AllGridColor = [];
    // if (this.checkedVal.length > 0) {
    //   this.Gridlists = ShopGridLsdata.filter((product: any) => {
    //     for (let i = 0; i < product.colors.length; i++) {
    //       for (let j = 0; j < this.checkedVal.length; j++) {
    //         if (product.colors[i] == this.checkedVal[j]) {
    //           this.AllGridColor.push(product)
    //         }
    //       }
    //     }
    //   });
    //   this.AllGridColor = [...new Map(this.AllGridColor.map((item: any) => [item['id'], item])).values()]
    //   this.Gridlists = this.AllGridColor
    //   this.total = this.Gridlists.length;
    // }
    // else {
    //   this.total = ShopGridLsdata.length;
    //   return this.Gridlists = this.AllGridlists;
    // }
  }

  // Sidebar Close
  close() {
    document.getElementById('shop-sidebar')?.classList.remove('show');
  }

  // Cart
  cart(id: any) {
    // CartData.push(this.Gridlists[id])
  }


}
