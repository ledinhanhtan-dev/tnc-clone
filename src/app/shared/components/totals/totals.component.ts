import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '@cart/models/cart.model';
import { CartService } from '@cart/services/cart.service';
import { CheckoutService } from 'app/checkout/services/checkout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss'],
})
export class TotalsComponent implements OnInit, OnDestroy {
  @Input() type: 'modal' | 'cart' | 'checkout' = 'modal';
  goToTitle: string = '';

  private cartSub!: Subscription;
  cart!: Cart;

  constructor(
    private router: Router,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(cart => (this.cart = cart));
    this.setGoToTitle();
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
  }

  onGoTo() {
    if (this.cart.totalQuantity === 0) return;

    switch (this.type) {
      case 'modal':
        this.cartService.closeModal();
        this.router.navigateByUrl('/cart');
        break;
      case 'cart':
        this.router.navigateByUrl('/checkout');
        break;
      default:
        this.checkoutService.submit();
        this.router.navigateByUrl('/success');
        break;
    }
  }

  onDeleteCart() {
    if (this.cart.totalQuantity === 0) return;

    this.cartService.deleteCart();
  }

  onGoToOthers() {
    this.cartService.closeModal();
    this.router.navigate(['/']);
  }

  private setGoToTitle() {
    switch (this.type) {
      case 'modal':
        this.goToTitle = 'ĐẾN GIỎ HÀNG';
        break;
      case 'cart':
        this.goToTitle = 'XÁC NHẬN ĐƠN HÀNG';
        break;
      default:
        this.goToTitle = 'XÁC NHẬN MUA HÀNG';
        break;
    }
  }
}
