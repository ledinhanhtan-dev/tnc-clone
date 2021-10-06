import { Product } from '../../product/models/product.model';

export interface HomeProducts {
  discountProducts: Product[];
  newProducts: Product[];
  hotProducts: Product[];
}
