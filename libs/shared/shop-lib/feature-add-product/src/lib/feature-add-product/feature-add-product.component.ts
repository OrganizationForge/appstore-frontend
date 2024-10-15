import { AfterViewInit, Component, ElementRef, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Availability, Brand, Category, NewFile, NewProduct, NewProductFile, ProductService, QuantityType } from '@angular-monorepo/shop-data-access';
import { EditorUiComponent } from "@angular-monorepo/shared/ui/editor-ui";
import { map, Observable } from 'rxjs';
import { AppToastService } from "@angular-monorepo/shared/ui/toast-ui";

import EditorJS, { OutputData, ToolConstructable } from '@editorjs/editorjs';

import Header from '@editorjs/header';
// @ts-ignore
import NestedList from '@editorjs/nested-list';

@Component({
  selector: 'lib-feature-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxDropzoneModule, EditorUiComponent],
  templateUrl: './feature-add-product.component.html',
  styleUrl: './feature-add-product.component.scss',
})
export class FeatureAddProductComponent implements OnInit, AfterViewInit{
  @ViewChild('editor', {read: ElementRef, static: true}) editorElement! : ElementRef;
  productForm!: UntypedFormGroup;
  submitted = false;

  categories$!: Observable<Category[]>;
  selectedParentId = '';
  childCategories: Category[] = [];

  brands$!: Observable<Brand[]>;
  quantityTypes$!: Observable<QuantityType[]>;
  availabilities$!: Observable<Availability[]>;
  selectedCategoryId = 0;

  @ViewChild('successToast', { static: true }) template!: TemplateRef<any>;
  messageToast! : string;
  toastService = inject(AppToastService);

  private editor! : EditorJS;


  selectOptions: { value: string, label: string }[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService
  ) {

    this.productForm = this.formBuilder.group({
      ids: [''],
      productName: ['', [Validators.required]],
      description: [''],
      priceBase: ['', [Validators.required]],
      price: ['', [Validators.required]],
      urlImage: [''],
      brandId: [''],
      availabilityId: [''],
      categoryId: [0, [Validators.required]],
      childCategoryId: [0, [Validators.required]],
      stock: ['', [Validators.required]],
      warranty: [''],
      barcode: [''],
      quantityTypeId: [''],
      pricePercent: [0],
    });

    // Obtener todas las categorías y separar las categorías padre
    this.categories$ = this.productService.getCategories();

    this.productForm.get('categoryId')?.valueChanges.subscribe(parentId => {
      this.selectedParentId = parentId;
      this.filterChildCategories();
    });
   }

   filterChildCategories() {
    this.categories$.subscribe(categories => {

      const selectedCategory : any = categories.find(category => category.id === this.selectedParentId);
      // Devolver las categorías hijas de la categoría seleccionada, si existen
      this.childCategories =  selectedCategory ? selectedCategory.childrens || [] : [];
    });
  }

  ngAfterViewInit(): void {
    this.initializeEditor();
  }

  initializeEditor() : void{
    this.editor = new EditorJS({
      minHeight: 30,
      holder: this.editorElement.nativeElement,
      placeholder: 'Escribí acá lo que quieras!!',
      inlineToolbar: ['bold', 'italic'],
      tools: {
        list: {
          class: NestedList as unknown as ToolConstructable,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },
        header: {
          class: Header as unknown as ToolConstructable,
          shortcut: 'CMD+SHIFT+H',

          config: {
            levels: [2, 3, 4],
            defaultLevel: 3,
            placeholder: 'Titulo'
          }
        }
      },
    });
  }

  ngOnInit(): void {
    // When the user clicks on the button, scroll to the top of the document
    document.documentElement.scrollTop = 0;

    // this.categories$.subscribe(categories => {
    //   this.selectOptions = this.createSelectOptions(categories);
    // });

    this.brands$ = this.productService.getBrands().pipe(
      map((res) => {
        return res;
      })
    )

    this.quantityTypes$ = this.productService.getQuantityTypes().pipe(
      map((res) => {
        return res;
      })
    )

    this.availabilities$ = this.productService.getAvailabilities().pipe(
      map((res) => {
        return res;
      })
    )
    /**
     * Form Validation
     */

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
    };
    reader.readAsDataURL(file);
  }

  /**
   * Save user
   */
  files: NewFile[] = [];

  AddProduct() {
    this.submitted = true;

    this.editor.save().then((outputData) => {

      const productFiles: NewProductFile[] = this.mapFilesToNewProductFiles(this.files);
      const newProduct: NewProduct = {
        productName: this.productForm.value.productName,
        description: JSON.stringify(outputData),
        priceBase: this.productForm.value.priceBase,
        price: this.productForm.value.price,
        productFiles: productFiles,
        brandId: this.productForm.value.brandId,
        availabilityId: this.productForm.value.availabilityId,
        categoryId: this.productForm.value.childCategoryId,
        quantityTypeId: this.productForm.value.quantityTypeId,
        weight: 0,
        stock: this.productForm.value.stock,
        barcode: this.productForm.value.barcode
      };


      this.productService.createProduct(newProduct).subscribe((res) => {
        if (res.succeded) {
          this.messageToast = 'Producto guardado correctamente.';
          this.toastService.show({ template: this.template,  classname: 'bg-success text-light', delay: 2000 });
          this.productForm.reset();
          this.files = [];
          this.editor.clear();
        }
        else res.errors;
      });

    }).catch((error) => {
      console.log('Saving failed: ', error)
    });


  }

  mapFilesToNewProductFiles(files: NewFile[]): NewProductFile[] {
    return files.map((file: NewFile) => ({
      name: file.name,
      extension: file.type,
      data: file.imageBytes
    }));
  }

  // createSelectOptions(categories: Category[]): { value: string, label: string }[] {
  //   return categories.flatMap(category => [
  //     { value: category.id, label: category.description },
  //     ...category.childrenCategories ? this.createSelectOptions(category.childrenCategories) : []
  //   ]);
  // }

  // createSelectOptions(categories: Category[]): { value: string, label: string }[] {
  //   return categories.flatMap(category => {
  //     console.log('Procesando categoría:', category); // Agrega un log para ver qué categorías se están procesando
  //     return [
  //       { value: category.id, label: category.description },
  //       ...category.childrenCategories ? this.createSelectOptions(category.childrenCategories) : []
  //     ];
  //   });
  // }

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

  }

  onSelectChange() {
    const percent = this.productForm.get('pricePercent')?.value;
    const priceBase = this.productForm.get('priceBase')?.value;

    this.productForm.patchValue({
      price: Number(priceBase * (1 + percent / 100)).toFixed(2),
    });
  }

  // onSelectChange() {
  //   const percent = this.productForm.get('pricePercent')?.value;
  //   const priceFinal = this.productForm.get('price')?.value;
  //   const priceBase = this.productForm.get('priceBase')?.value;

  //   // Si alguno de los valores cambia, realizamos los cálculos necesarios
  //   if (priceFinal || priceBase || percent) {
  //     // Calcular precio final si cambia el precio base o el porcentaje
  //     if (priceBase && percent) {
  //       const calculatedPriceFinal = priceBase * (1 + percent / 100);
  //       this.productForm.patchValue({
  //         price: calculatedPriceFinal.toFixed(2)
  //       });
  //     }

  //     // Calcular porcentaje si cambia el precio final y el precio base
  //     if (priceFinal && priceBase) {
  //       const calculatedPercent = ((priceFinal / priceBase - 1) * 100).toFixed(2);
  //       this.productForm.patchValue({
  //         pricePercent: calculatedPercent
  //       });
  //     }
  //   }
  // }





}
