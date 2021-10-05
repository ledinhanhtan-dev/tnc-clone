import { Product } from './product.model';

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}

export interface Cart {
  id: number;
  sessionId: string;
  totalPrice: number;
  totalQuantity: number;
  cartItems: CartItem[];
}
