import { Product } from 'app/product/models/product.model';

export interface CategoryDescription {
  title: string;
  text: string;
}

export interface Category {
  id: number;

  name: string;

  slug: string;

  image: string;

  description: CategoryDescription;

  products: Product[];

  count: number;
}
