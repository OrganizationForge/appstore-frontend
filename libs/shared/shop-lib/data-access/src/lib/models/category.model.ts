export interface Category {
  id: number,
  categoryName: string,
  description: string,
  parentId?: number,
  childrenCategories?: [Category]
}
