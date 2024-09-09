export interface Category {
  id: string,
  description: string;
  urlImage: string;
  parentCategory: Category;
  childrenCategories?: [Category]
}
