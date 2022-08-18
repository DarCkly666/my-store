export interface Product {
  id: string;
  name: string;
  description: string;
  images: Array<string>;
  price: number;
  stock: number;
  discount: number;
  featured: boolean;
  category: Array<string>;
  created: number;
}
