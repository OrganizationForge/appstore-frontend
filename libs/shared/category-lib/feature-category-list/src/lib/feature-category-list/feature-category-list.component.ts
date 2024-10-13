import { Category, NewCategory } from '@angular-monorepo/shop-data-access';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { CategoryService } from "@angular-monorepo/shared/category-lib/data-access";

type NewType = UntypedFormGroup;


@Component({
  selector: 'lib-feature-category-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbAccordionModule],
  templateUrl: './feature-category-list.component.html',
  styleUrl: './feature-category-list.component.scss',
})
export class FeatureCategoryListComponent implements OnInit {
  @Input() editable = true;
  @Input() selectable = false;
  @Input() allowNew = true;

  categoryList$!: Observable<Category[]>;
  public isCollapsed = true;

  // Form Submit
  categoryForm!: NewType;
  submitted = false;

  private readonly categoryService = inject(CategoryService)


  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder) {
    this.categoryList$ = this.categoryService.getCategories();
  }

  ngOnInit(): void {

    /**
     * Form Validation
     */
    this.categoryForm = this.formBuilder.group({
      id: [''],
      description: ['', [Validators.required]],
      parentId: [{ value: '', disabled: true }],
    });


  }

  onCheckboxChange(event: any) {
    if (event.target.checked)
      this.categoryForm.get('parentId')?.enable()
    else
      this.categoryForm.get('parentId')?.disable()

    // this.isSubcategoryChecked = event.target.checked;
  }

  /**
   * Open Modal
   * @param sizeChartModal scroll modal data
   */
  OpenModal(sizeChartModal: any) {
    this.modalService.open(sizeChartModal, { size: 'lg', centered: true });
  }

  get form() {
    return this.categoryForm.controls;
  }
  /**
   * Save user
   */
  saveUser() {
    if (this.categoryForm.valid) {
      const newCategory: NewCategory = {
        description: this.categoryForm.get('description')?.value,
        parentId: this.categoryForm.get('parentId')?.value || null,
      }


      if (this.categoryForm.get('id')?.value) {
        //Aca iria el update
      } else {
        this.categoryService.createCategory(newCategory).subscribe((res) => {
          if (res.succeded) {
            alert('Guardado Ok');
          }
          else res.errors;
        });
      }
    }
    this.modalService.dismissAll();
    this.categoryForm.reset();
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
    this.categoryForm.controls['id'].setValue(data.id);
    this.categoryForm.controls['description'].setValue(data.description);
    this.categoryForm.controls['parentId'].setValue(data.parentId);
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
