import { FeaturedProduct } from '@shared/models/featured-product.model';
import { Category } from 'app/category/models/category.model';

export interface Store {
  id: number;

  name: string;

  slug: string;

  banner: string;

  categories: Category[];

  featuredProducts: FeaturedProduct[];
}
