import { Product } from './product.model';

export interface HomeProducts {
  discountProducts: Product[];
  newProducts: Product[];
  hotProducts: Product[];
}
