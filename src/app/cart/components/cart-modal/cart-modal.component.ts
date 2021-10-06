import { Subscription } from 'rxjs';
import { Cart } from '@core/models/cart.model';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '@cart/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit, OnDestroy {
  private activeSub!: Subscription;
  private cartSub!: Subscription;
  cart!: Cart;

  @HostBinding('class.active')
  active: boolean = true;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.activeSub = this.cartService.active$.subscribe(
      active => (this.active = active)
    );

    this.cartSub = this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
    if (this.activeSub) this.activeSub.unsubscribe();
  }

  onCloseModal() {
    this.cartService.closeModal();
  }
}
