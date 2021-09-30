import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit, OnDestroy {
  private cartSub!: Subscription;
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(() => {
      this.totalPrice = this.cartService.getTotalPrice();
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
  }

  onGoToCart() {
    if (this.totalQuantity === 0) return;

    this.cartService.closeModal();
    this.router.navigate(['/cart']);
  }
}
