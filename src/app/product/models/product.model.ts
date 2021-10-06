import { Category } from 'app/category/models/category.model';
import { Brand } from '../../core/models/brand.model';

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  priceOld: number;
  thumbnail: string;
  images: string[];
  shortDesc: string[];
  rating: { score: number; count: number };
  guarantee: number;
  inStock: boolean;

  brand: Brand;
  category: Category;
}
