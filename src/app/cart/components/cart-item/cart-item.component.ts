import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '@core/models/cart-item.model';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.total = this.cartItem.calcTotal();
  }

  increase() {
    this.total = this.cartService.increaseQuantity(this.cartItem.index);
  }

  decrease() {
    this.total = this.cartService.decreaseQuantity(this.cartItem.index);

    if (this.total < 1) this.cartService.removeFromCart(this.cartItem.index);
  }

  remove() {
    this.cartService.removeFromCart(this.cartItem.index);
  }
}
