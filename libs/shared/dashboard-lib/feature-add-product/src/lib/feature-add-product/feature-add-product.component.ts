import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { product } from '../data';
import { DropzoneCdkModule } from '@ngx-dropzone/cdk';

@Component({
  selector: 'lib-feature-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropzoneCdkModule],
  templateUrl: './feature-add-product.component.html',
  styleUrl: './feature-add-product.component.scss',
})
export class FeatureAddProductComponent implements OnInit {
  productForm!: UntypedFormGroup;
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    // When the user clicks on the button, scroll to the top of the document
    document.documentElement.scrollTop = 0;

    /**
     * Form Validation
     */
    this.productForm = this.formBuilder.group({
      ids: [''],
      productName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priceBase: ['', [Validators.required]],
      price: ['', [Validators.required]],
      urlImage: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      stock: ['',[Validators.required]],
      warranty: ['']
    });
  }

  /**
   * Form data get
   */
  get form() {
    return this.productForm.controls;
  }

  // File Upload
  imageURL: string | undefined;
  fileChange(event: any) {
    const fileList: any = event.target as HTMLInputElement;
    console.log(fileList)
    const file: File = fileList.files[0];
    console.log(file)
    // document.getElementById('');
    // this.productForm.patchValue({
    //   salefile: file.name
    // });
    // console.log( this.productForm)
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      console.log(this.imageURL)
    }
    reader.readAsDataURL(file);
  }

  /**
   * Save user
   */
  AddProduct() {
    this.submitted = true;
    product.push(this.productForm.value);
  }
  files: File[] = [];

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
