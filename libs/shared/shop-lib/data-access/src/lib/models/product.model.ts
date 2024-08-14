import { Availability } from "./availability.model";
import { Brand } from "./brand.model";
import { Category } from "./category.model";

export interface Product {
  id: number;
  productName: string;
  description: string;
  priceBase: number;
  price: number;
  warranty: string;
  category: Category;
  brand: Brand;
  availability: Availability;
  productFiles: ProductFile[];
  rating: number;
  review: number;
  weight: number;
}
export interface ProductFile {
  nameImage: string;
  urlImage: string;
}


export interface NewFile{
  imageName: string;
  imageBytes: string;
}



export interface NewProduct {
  productName: string,
  description: string,
  priceBase: number,
  price?: number,
  brandId: number,
  availabilityId: number,
  categoryId: number,
  quantityTypeId: number,
  weight: number,
  stock: number,
  barcode: string,
  productFiles: NewFile[]
}

export interface NewProductFile extends File{
  imageName: string;
  imageBytes: string;
}


