export type ProductCategory = "wired" | "wireless";

export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  img: string;
  category: ProductCategory;
}
