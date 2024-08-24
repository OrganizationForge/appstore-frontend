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
import { Category, NewFile, NewProduct, NewProductFile, ProductService } from '@angular-monorepo/shop-data-access';
import { map, Observable } from 'rxjs';


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

  categories$!: Observable<Category[]>;
  selectedCategoryId = 0;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // When the user clicks on the button, scroll to the top of the document
    document.documentElement.scrollTop = 0;

    this.categories$ = this.productService.getCategories().pipe(
      map((res) => {
        return res;
      })
    )

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
    const file: File = fileList.files[0];
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
  files: NewFile[] = [];


  AddProduct() {
    this.submitted = true;
    const productFiles: NewProductFile[] = this.mapFilesToNewProductFiles(this.files);

    // console.log(this.productForm.value);
    const newProduct: NewProduct = {
      productName: this.productForm.value.productName,
      description: this.productForm.value.description,
      priceBase: this.productForm.value.priceBase,
      price: this.productForm.value.price,
      // imageFiles: this.files,
      productFiles: productFiles,
      brandId: this.productForm.value.brandId,
      availabilityId: 1,
      categoryId: this.productForm.value.categoryId,
      quantityTypeId: this.productForm.value.quantityTypeId,
      weight: 0,
      stock: this.productForm.value.stock,
      barcode: this.productForm.value.barcode
    };

    console.log(newProduct);

    this.productService.createProduct(newProduct).subscribe((res) => {
      if (res.succeded) {
        alert('Guardado Ok');
        this.productForm.reset();
        this.files = [];
      }
      else res.errors;
    });
  }

  mapFilesToNewProductFiles(files: NewFile[]): NewProductFile[] {
    return files.map((file: NewFile) => ({
      name: file.name,
      extension: file.type,
      data: file.imageBytes
    }));
  }


  onSelect(event: any) {
    const files = event.addedFiles;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = (event: any) => { // Use event object for type safety
      const base64 = event.target.result as string;
      file.imageName = file.name;
      file.imageBytes = base64;
      this.files.push(file); // Add the modified file
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      // Handle errors appropriately (optional)
    };

    reader.readAsDataURL(file);
  }
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
