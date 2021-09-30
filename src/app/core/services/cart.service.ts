import { Injectable } from '@angular/core';
import { CartItem } from '@core/models/cart-item.model';
import { Product } from '@core/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cart$ = new BehaviorSubject<CartItem[]>([]);
  readonly active$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  openModal() {
    this.active$.next(true);
  }

  closeModal() {
    this.active$.next(false);
  }

  getTotalQuantity(): number {
    let totalQty = 0;
    this.cart$.value.forEach(item => (totalQty += item.quantity));
    return totalQty;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    this.cart$.value.forEach(item => (totalPrice += item.calcTotal()));
    return totalPrice;
  }

  addToCart(product: Product) {
    const cart = this.cart$.value;

    console.log(product.idName);

    // Existing cart item: increase quantity
    const index = cart.findIndex(
      item => item.product.idName === product.idName
    );

    if (index !== -1) {
      this.increaseQuantity(index);
      this.openModal();
      return;
    }

    const cartItem = new CartItem({
      index: this.cart$.value.length,
      quantity: 1,
      product,
    });

    cart.push(cartItem);

    this.cart$.next(cart);
    this.openModal();
  }

  removeFromCart(index: number) {
    let cart = this.cart$.value;
    cart.splice(index, 1);
    cart = this.reIndexItems(cart);

    this.cart$.next(cart);
  }

  increaseQuantity(index: number): number {
    const cart = this.cart$.value;
    cart[index].quantity += 1;

    this.cart$.next(cart);

    return cart[index].calcTotal();
  }

  decreaseQuantity(index: number): number {
    const cart = this.cart$.value;
    cart[index].quantity -= 1;

    this.cart$.next(cart);

    return cart[index].calcTotal();
  }

  private reIndexItems(cart: CartItem[]) {
    for (const [index, item] of cart.entries()) {
      item.index = index;
    }

    return cart;
  }
}
