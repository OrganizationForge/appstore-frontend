import { Store } from '@ngrx/store';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { cartActions, ngrxCartQuery } from '@angular-monorepo/shared/cart-lib/data-access';

import Swal from 'sweetalert2';

import { ShippingMethod, ShippingService } from "@angular-monorepo/shared/shipping-lib/data-access";


type NewType = UntypedFormGroup;

@Component({
  selector: 'lib-feature-shipping-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-shipping-list.component.html',
  styleUrl: './feature-shipping-list.component.scss',
})
export class FeatureShippingListComponent implements OnInit {

  @Input() editable = true;
  @Input() selectable = false;
  @Input() allowNew = true;
  shippingList$!: Observable<ShippingMethod[]>;
  public isCollapsed = true;

  selectedSendMethod!: ShippingMethod;


  // Form Submit
  userForm!: NewType;
  submitted = false;

  private readonly shippingService = inject(ShippingService)
  private readonly store = inject(Store);

  cartShippingMethod$ : Observable<ShippingMethod | null> = this.store.select(ngrxCartQuery.selectShipping);


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

    this.cartShippingMethod$.pipe(
      map(res => {
        if (res) {
          this.selectedSendMethod = res;
        }
      })
    ).subscribe()

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

  onShippingChange(shippingMethod: ShippingMethod) {
    this.selectedSendMethod = shippingMethod;
    // console.log(this.selectedSendMethod);
    this.store.dispatch(cartActions.postShipping({shippingMethod: shippingMethod}));
    // localStorage.setItem('selectedSendMethod', JSON.stringify(sendMethod));
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
      title: 'Estas seguro ?',
      text: 'Seguro que deseas eliminar el metdo de envío?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire({ title: 'Eliminado!', text: 'EL metodo ha sido eliminado.', confirmButtonColor: '#364574', icon: 'success', });
        e.target.closest('tr').remove();
      }
    });
  }
}
