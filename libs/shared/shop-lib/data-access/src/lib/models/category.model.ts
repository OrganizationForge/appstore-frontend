export interface Category {
  id: number,
  description: string;
  urlImage: string;
  parentCategory: Category;
  childrenCategories?: [Category]
}
