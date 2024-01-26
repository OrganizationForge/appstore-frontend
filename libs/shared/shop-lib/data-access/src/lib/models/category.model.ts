export interface Category {
  id: number,
  description: string;
  urlImage: string;
  childrenCategories?: [Category]
}
