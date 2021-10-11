import { Injectable } from '@angular/core';
import { CartService } from '@cart/services/cart.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkout$ = new Subject();

  constructor(private cartService: CartService) {}

  submit() {
    this.checkout$.next();
  }

  checkout(formValue: any) {
    const cartValue = this.cartService.cart$.value;

    console.log(cartValue);

    console.log(formValue);
  }
}
