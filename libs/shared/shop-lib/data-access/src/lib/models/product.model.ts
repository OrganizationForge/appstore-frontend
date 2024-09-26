import { Availability } from "./availability.model";
import { Brand } from "./brand.model";
import { Category } from "./category.model";
import { ProductComment } from "./comment.model";

export interface Product {
  id: string;
  productName: string;
  description: string;
  priceBase: number;
  price: number;
  warranty: string;
  category: Category;
  brand: Brand;
  availability: Availability;
  productFiles: ProductFile[];
  comments: ProductComment[];
  rating: number;
  review: number;
  weight: number;
}
export interface ProductFile {
  nameImage: string;
  urlImage: string;
}
export interface NewProduct {
  productName: string,
  description: string,
  priceBase: number,
  price?: number,
  brandId: string,
  availabilityId: string,
  categoryId: string,
  quantityTypeId: string,
  weight: number,
  stock: number,
  barcode: string,
  productFiles?: NewProductFile[]
}

export interface NewProductFile{
  name: string;
  extension: string;
  data: string;
}

export interface NewFile extends File {
  imageName: string;
  imageBytes: string;
}


