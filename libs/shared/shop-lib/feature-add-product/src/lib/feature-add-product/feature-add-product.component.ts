import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NewFile, NewProduct, NewProductFile, ProductService } from '@angular-monorepo/shop-data-access';


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

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService
  ) { }

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
      stock: ['', [Validators.required]],
      warranty: [''],
      barcode: [''],
      quantityTypeId: [1],
      pricePercent: [0],
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
    console.log(fileList);
    const file: File = fileList.files[0];
    console.log(file);
    // document.getElementById('');
    // this.productForm.patchValue({
    //   salefile: file.name
    // });
    // console.log( this.productForm)
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      console.log(this.imageURL);
    };
    reader.readAsDataURL(file);

  }

  /**
   * Save user
  */
  files: NewProductFile[] = [];
  AddProduct() {
    this.submitted = true;

    // const formData = new FormData();
    // formData.append('ProductName', this.productForm.value.productName);
    // formData.append('Description', this.productForm.value.productName);
    // formData.append('PriceBase', this.productForm.value.productName);
    // formData.append('Price', this.productForm.value.productName);
    // formData.append('BrandId', this.productForm.value.productName);
    // formData.append('AvailabilityId', this.productForm.value.productName);
    // formData.append('CategoryId', this.productForm.value.productName);
    // formData.append('QuantityTypeId', this.productForm.value.productName);
    // formData.append('Weight', this.productForm.value.productName);
    // formData.append('Stock', this.productForm.value.productName);
    // formData.append('Barcode', this.productForm.value.productName);
    // this.files.forEach( x => {

    //   formData.append('ImageFiles', x, x.name);
    // });


    const fileProducts : NewFile[] = [];

    this.files.forEach( x => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64 = reader.result as string;
        const file: NewFile = {
          imageName : x.name,
          imageBytes: base64
        }
        fileProducts.push(file);
      };
      reader.readAsDataURL(x);
    });

    // console.log(fileProducts);
    // // console.log(this.productForm.value);
    const newProduct: NewProduct = {
      productName: this.productForm.value.productName,
      description: this.productForm.value.description,
      priceBase: this.productForm.value.priceBase,
      price: this.productForm.value.price,
      productFiles: fileProducts,
      brandId: this.productForm.value.brandId,
      availabilityId: 1,
      categoryId: this.productForm.value.categoryId,
      quantityTypeId: this.productForm.value.quantityTypeId,
      weight: 0,
      stock: this.productForm.value.stock,
      barcode: this.productForm.value.barcode,
    };

    console.log(newProduct);

    // this.productService.createProduct(formData).subscribe((res) => {
    //   if (res.succeded) alert('Guardado Ok');
    //   else res.errors;
    // });

    this.productService.createProduct(newProduct).subscribe((res) => {
      if (res.succeded) alert('Guardado Ok');
      else res.errors;
    });
  }


  onSelect(event: any) {

    // const files = event.addedFiles;

    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     const base64 = reader.result as string;
    //     file.imageName = file.name;
    //     file.imageBytes = base64;
    //     this.files.push(file);
    //   };
    //   reader.readAsDataURL(file);
    // }

    console.log(this.files);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    console.log(this.files);

  }

  onSelectChange() {
    const percent = this.productForm.get('pricePercent')?.value;
    const priceBase = this.productForm.get('priceBase')?.value;

    this.productForm.patchValue({
      price: Number(priceBase / (1 - percent / 100)).toFixed(2),
    });
  }
}
