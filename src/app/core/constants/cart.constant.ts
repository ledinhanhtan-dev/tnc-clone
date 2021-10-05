import { Cart } from '@core/models/cart.model';

export const EMPTY_CART: Cart = {
  id: 0,
  sessionId: '',
  totalPrice: 0,
  totalQuantity: 0,
  cartItems: [],
};
