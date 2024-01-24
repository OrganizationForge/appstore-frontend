import { Availability } from "./availability.model";
import { Brand } from "./brand.model";
import { Category } from "./category.model";

export interface Product {
  id: number;
  productName: string;
  description: string;
  priceBase: number;
  price: number;
  urlImage: string;
  warranty: string;
  category: Category;
  brand: Brand;
  availability: Availability;
  rating: number;
  review: number;
  weight: number;
}

export interface NewProduct {
  productName: string,
  description: string,
  priceBase: number,
  price?: number,
  urlImage: string ,
  brandId: number,
  availabilityId: number,
  categoryId: number,
  quantityTypeId: number,
  weight: number,
  stock: number,
  barcode: string
}

