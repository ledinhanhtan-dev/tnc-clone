import { Product } from 'app/product/models/product.model';

export interface Category {
  id: number;

  name: string;

  slug: string;

  image: string;

  description: { title: string; content: string };

  products: Product[];

  count: number;
}
