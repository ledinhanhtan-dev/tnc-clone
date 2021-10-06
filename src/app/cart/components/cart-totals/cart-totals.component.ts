import { Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '@cart/services/cart.service';
import { Cart } from '@core/models/cart.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.scss'],
})
export class CartTotalsComponent implements OnInit, OnDestroy {
  @Input() isModal: boolean = false;
  private cartSub!: Subscription;
  cart!: Cart;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(cart => (this.cart = cart));
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
  }

  onGoTo() {
    if (this.cart.totalQuantity === 0) return;

    if (this.isModal) {
      this.cartService.closeModal();
      this.router.navigate(['/cart']);
    }
    // else go to checkout
  }

  onDeleteCart() {
    if (this.cart.totalQuantity === 0) return;

    this.cartService.deleteCart();
  }

  onGoToOthers() {
    this.cartService.closeModal();
    this.router.navigate(['/']);
  }
}
