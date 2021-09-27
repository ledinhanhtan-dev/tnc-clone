import { Product } from './product.model';

export interface HomeProducts {
  isFetched: boolean;
  discountProducts: Product[];
}
