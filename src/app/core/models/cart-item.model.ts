import { Product } from '@core/models/product.model';

interface CreateCartItemDto {
  index: number;
  quantity: number;
  product: Product;
}

export class CartItem {
  public index: number;
  public quantity: number;
  public product: Product;

  constructor(createDto: CreateCartItemDto) {
    this.index = createDto.index;
    this.quantity = createDto.quantity;
    this.product = createDto.product;
  }

  calcTotal(): number {
    return this.quantity * this.product.price;
  }
}
