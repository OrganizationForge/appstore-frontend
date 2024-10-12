import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Brand } from '@angular-monorepo/shop-data-access';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BrandService } from "@angular-monorepo/shared/brand-lib/data-access";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';

type NewType = UntypedFormGroup;


@Component({
  selector: 'lib-feature-brand-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-brand-list.component.html',
  styleUrl: './feature-brand-list.component.scss',
})
export class FeatureBrandListComponent implements OnInit {
  @Input() editable = true;
  @Input() selectable = false;
  @Input() allowNew = true;

  brandList$!: Observable<Brand[]>;
  public isCollapsed = true;

  // Form Submit
  brandForm!: NewType;
  submitted = false;

  private readonly brandService = inject(BrandService)


  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder) {
    this.brandList$ = this.brandService.getBrands();
  }

  ngOnInit(): void {

    /**
     * Form Validation
     */
    this.brandForm = this.formBuilder.group({
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
    return this.brandForm.controls;
  }
  /**
   * Save user
   */
  saveUser() {
    if (this.brandForm.valid) {
      const newBrand: Brand = {
        description: this.brandForm.get('description')?.value,
      }

      if (this.brandForm.get('id')?.value) {
        //Aca iria el update
      } else {
        this.brandService.createBrand(newBrand).subscribe((res) => {
          if (res.succeded) {
            alert('Guardado Ok');
          }
          else res.errors;
        });
      }
    }
    this.modalService.dismissAll();
    this.brandForm.reset();
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
    this.brandForm.controls['id'].setValue(data.id);
    this.brandForm.controls['description'].setValue(data.description);
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
