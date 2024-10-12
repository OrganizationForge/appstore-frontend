export interface Category {
  id?: string,
  description?: string;
  urlImage?: string;
  parentCategory?: Category;
  childrens?: [Category]
}

export interface NewCategory {
  description?: string;
  urlImage?: string;
  parentId?: Category;
}
