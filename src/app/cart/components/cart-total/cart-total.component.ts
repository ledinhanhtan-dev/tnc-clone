import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '@cart/services/cart.service';
import { Cart } from '@core/models/cart.model';

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
