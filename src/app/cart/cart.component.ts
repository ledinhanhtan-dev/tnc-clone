import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY_CART } from '@cart/constants/cart.constant';
import { Cart } from '@cart/models/cart.model';
import { Subscription } from 'rxjs';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  private cartSub!: Subscription;
  cart: Cart = EMPTY_CART;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(cart => (this.cart = cart));
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
  }
}
