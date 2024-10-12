import { PaymentService } from './../../../../data-access/src/lib/services/payment.service';
import { PaymentMethod } from '@angular-monorepo/shared/cart-lib/data-access';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

type NewType = UntypedFormGroup;

@Component({
  selector: 'lib-feature-payment-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-payment-list.component.html',
  styleUrl: './feature-payment-list.component.scss',
})
export class FeaturePaymentListComponent implements OnInit{
  @Input() editable = true;
  @Input() selectable = false;
  @Input() allowNew = true;

  paymentList$!: Observable<PaymentMethod[]>;
  public isCollapsed = true;

  // Form Submit
  paymentForm!: NewType;
  submitted = false;

  private readonly paymentService = inject(PaymentService)


  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder) {
    this.paymentList$ = this.paymentService.getPayments();
  }

  ngOnInit(): void {

    /**
     * Form Validation
     */
    this.paymentForm = this.formBuilder.group({
      id: [''],
      description: ['',[Validators.required]],
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
    return this.paymentForm.controls;
  }
  /**
   * Save user
   */
  saveUser() {
    if (this.paymentForm.valid) {
      const newBrand: PaymentMethod = {
        description: this.paymentForm.get('description')?.value,
      }

      if (this.paymentForm.get('id')?.value) {
        //Aca iria el update
      } else {
        this.paymentService.createPayment(newBrand).subscribe((res) => {
          if (res.succeded) {
            alert('Guardado Ok');
          }
          else res.errors;
        });
      }
    }
    this.modalService.dismissAll();
    this.paymentForm.reset();
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
    this.paymentForm.controls['id'].setValue(data.id);
    this.paymentForm.controls['description'].setValue(data.description);
  }

  // Remove Data
  removeData(e: any) {
    Swal.fire({
      title: 'Estas seguro ?',
      text: 'Seguro que deseas eliminar la marca?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Si, eliminar!'
    }).then(result => {
      if (result.value) {
        Swal.fire({ title: 'Eliminado!', text: 'La marca ha sido eliminada.', confirmButtonColor: '#364574', icon: 'success', });
        e.target.closest('tr').remove();
      }
    });
  }
}
