import { Filter } from '@core/models/filter.model';
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

  filters: Filter[];

  count: number;
}

export const EMPTY_CATEGORY: Category = {
  id: 0,
  name: '',
  slug: '',
  image: '',
  description: { title: '', text: '' },
  products: [],
  filters: [],
  count: 0,
};
