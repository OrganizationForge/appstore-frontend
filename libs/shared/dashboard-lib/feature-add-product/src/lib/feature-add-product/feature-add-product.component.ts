import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NewProduct, ProductService } from '@angular-monorepo/shop-data-access';

@Component({
  selector: 'lib-feature-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxDropzoneModule],
  templateUrl: './feature-add-product.component.html',
  styleUrl: './feature-add-product.component.scss',
})
export class FeatureAddProductComponent implements OnInit {
  productForm!: UntypedFormGroup;
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder, private productService : ProductService) { }

  ngOnInit(): void {

    // When the user clicks on the button, scroll to the top of the document
    document.documentElement.scrollTop = 0;

    /**
     * Form Validation
     */
    this.productForm = this.formBuilder.group({
      ids: [''],
      productName: ['', [Validators.required]],
      description: [''],
      priceBase: ['', [Validators.required]],
      price: ['', [Validators.required]],
      urlImage: [''],
      brandId: [1],
      categoryId: [0, [Validators.required]],
      stock: ['',[Validators.required]],
      warranty: [''],
      barcode: [''],
      quantityTypeId: [1],
      pricePercent: [0]
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
    // product.push(this.productForm.value);
    const file: File = this.files[0];
    this.productForm.patchValue({
      urlImage: file != undefined ? file.name : ''
    });
    console.log(this.productForm.value);

    const newProduct: NewProduct = {
      productName: this.productForm.value.productName,
      description: this.productForm.value.description,
      priceBase: this.productForm.value.priceBase,
      price: this.productForm.value.price,
      urlImage: 'assets/img/shop/catalog/01.jpg',
      brandId: this.productForm.value.brandId,
      availabilityId: 1,
      categoryId: this.productForm.value.categoryId,
      quantityTypeId: this.productForm.value.quantityTypeId,
      weight: 0,
      stock: this.productForm.value.stock,
      barcode: this.productForm.value.barcode
    }
    this.productService.createProduct(newProduct)
      .subscribe(res => {
        if (res.succeded)
          alert("Guardado Ok");
        else
          (res.errors);
      });

  }

  files: File[] = [];

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelectChange(){
    const percent = this.productForm.get('pricePercent')?.value
    const priceBase = this.productForm.get('priceBase')?.value

    this.productForm.patchValue({
      price: Number(priceBase / (1- (percent/100))).toFixed(2)
    });
  }
}
