export interface ProductComment {
  id: string,
  customerName: string;
  content: string;
  customerImage: string;
  pros: string;
  cons: string;
  rating: number;
  likes: number;
  dislikes: number;
  created: Date;
}

export interface NewProductComment {
  customerName: string;
  content: string;
  pros: string;
  cons: string;
  rating: number;
  productId: string;
}
