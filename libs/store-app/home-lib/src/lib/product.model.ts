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

