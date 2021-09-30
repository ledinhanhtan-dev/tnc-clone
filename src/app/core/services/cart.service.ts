import { Injectable } from '@angular/core';
import { CartItem } from '@core/models/cart-item.model';
import { Product } from '@core/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cart$ = new BehaviorSubject<CartItem[]>([]);
  readonly active$ = new BehaviorSubject<boolean>(true);

  constructor() {}

  addToCart(product: Product) {
    const index = this.cart$.value.findIndex(
      item => item.product.id === product.id
    );

    if (index !== -1) this.increaseExistingItemQty(index);
    else this.addNewItem(product);
  }

  private increaseExistingItemQty(index: number) {
    this.increaseQuantity(index);
    this.openModal();
  }

  private addNewItem(product: Product) {
    const cart = this.cart$.value;

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

  deleteCart() {
    this.cart$.next([]);
  }

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

  private reIndexItems(cart: CartItem[]) {
    for (const [index, item] of cart.entries()) {
      item.index = index;
    }

    return cart;
  }
}
