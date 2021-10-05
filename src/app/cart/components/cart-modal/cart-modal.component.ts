import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { Cart } from '@core/models/cart.model';
import { CartService } from '@core/services/cart.service';
import { Subscription } from 'rxjs';

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
      console.log(cart);

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
