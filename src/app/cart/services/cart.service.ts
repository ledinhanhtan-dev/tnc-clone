import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CART_API } from '@core/constants/api.constant';
import { EMPTY_CART } from '@cart/constants/cart.constant';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from '@cart/models/cart.model';
import { BP } from '@core/constants/breakpoints.constant';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly active$ = new BehaviorSubject<boolean>(false);
  readonly cart$ = new BehaviorSubject<Cart>(EMPTY_CART);

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  fetchCartData() {
    const sessionId = this.cookieService.get('sessionId');

    if (!sessionId) {
      this.http.get<Cart>(CART_API + 'new').subscribe(cart => {
        this.cookieService.set('sessionId', cart.sessionId);
        this.cart$.next(cart);
      });
    } else {
      this.http
        .get<Cart>(CART_API)
        .pipe(
          catchError(() => {
            this.cookieService.delete('sessionId');
            // Refetch new cart
            this.fetchCartData();
            return of(EMPTY_CART);
          })
        )
        .subscribe(cart => {
          this.cart$.next(cart);
        });
    }
  }

  addToCart(productId: number, quantity: number = 1) {
    this.http
      .post<Cart>(CART_API + 'add/' + productId, { quantity })
      .pipe(tap(() => this.openModal()))
      .subscribe(cart => this.cart$.next(cart));
  }

  increaseItemQty(cartItemId: number) {
    this.http
      .get<Cart>(CART_API + 'plus/' + cartItemId)
      .subscribe(cart => this.cart$.next(cart));
  }

  decreaseItemQty(cartItemId: number) {
    this.http
      .get<Cart>(CART_API + 'minus/' + cartItemId)
      .subscribe(cart => this.cart$.next(cart));
  }

  removeFromCart(cartItemId: number) {
    this.http
      .get<Cart>(CART_API + 'remove/' + cartItemId)
      .subscribe(cart => this.cart$.next(cart));
  }

  deleteCart() {
    this.http
      .get<Cart>(CART_API + 'delete')
      .subscribe(_ => this.cart$.next(EMPTY_CART));
  }

  openModal() {
    if (window.innerWidth <= BP.DESKTOP_MD) return;
    else this.active$.next(true);
  }

  closeModal() {
    this.active$.next(false);
  }
}
