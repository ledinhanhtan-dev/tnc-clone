import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '@core/models/cart.model';
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
    this.total = this.cartItem.quantity * this.cartItem.product.price;
  }

  increase() {}

  decrease() {}

  remove() {}
}
