import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '@core/models/cart.model';
import { CartService } from '@core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {
  @Input() cart!: Cart;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  onGoToCart() {
    if (this.cart.totalQuantity === 0) return;

    this.cartService.closeModal();
    this.router.navigate(['/cart']);
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
