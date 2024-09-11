import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { ShippingMethod, ShippingService, tableData } from "@angular-monorepo/shared/shipping-lib/data-access";


type NewType = UntypedFormGroup;

@Component({
  selector: 'lib-feature-shipping-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-shipping-list.component.html',
  styleUrl: './feature-shipping-list.component.scss',
})
export class FeatureShippingListComponent implements OnInit {
  // tables$: Observable<Table[]>;
  shippingList$!: Observable<ShippingMethod[]>;
  // total$: Observable<number>;
  public isCollapsed = true;

  // Form Submit
  userForm!: NewType;
  submitted = false;

  private readonly shippingService = inject(ShippingService)

  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder) {
    this.shippingList$ = this.shippingService.getShippingMethods();
  }

  ngOnInit(): void {
    /**
     * Form Validation
     */
    this.userForm = this.formBuilder.group({
      id: [''],
      f_title: ['', [Validators.required]],
      l_deliveryTime: ['', [Validators.required]],
      description: ['',],
      price: ['', [Validators.required]]
    });
  }

  /**
   * Open Modal
   * @param sizeChartModal scroll modal data
   */
  OpenModal(sizeChartModal: any) {
    this.modalService.open(sizeChartModal, { size: 'lg', centered: true });
  }

  get form() {
    return this.userForm.controls;
  }

  /**
   * Save user
   */
  saveUser() {
    if (this.userForm.valid) {
      const newShipping: ShippingMethod = {
        title: this.userForm.get('f_title')?.value,
        description: this.userForm.get('description')?.value,
        deliveryTime: this.userForm.get('l_deliveryTime')?.value,
        price: this.userForm.get('price')?.value
      }

      if (this.userForm.get('id')?.value) {
        //Aca iria el update
      } else {
        this.shippingService.createShippingMethod(newShipping).subscribe((res) => {
          if (res.succeded) {
            alert('Guardado Ok');
          }
          else res.errors;
        });
      }
    }
    this.modalService.dismissAll();
    this.userForm.reset();
    this.submitted = true;
  }

  /**
   * Open modal
   * @param content modal content
   */
  singleData: any;
  editModal(content: any, data: any) {
    this.submitted = false;
    this.modalService.open(content, { size: 'lg', centered: true });
    this.userForm.controls['id'].setValue(data.id);
    this.userForm.controls['f_title'].setValue(data.title);
    this.userForm.controls['l_deliveryTime'].setValue(data.deliveryTime);
    this.userForm.controls['description'].setValue(data.description);
    this.userForm.controls['price'].setValue(data.price);
  }

  // Remove Data
  removeData(e: any) {
    Swal.fire({
      title: 'Are you Sure ?',
      text: 'Are you Sure You want to Remove this Product ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', confirmButtonColor: '#364574', icon: 'success', });
        e.target.closest('tr').remove();
      }
    });
  }
}
