import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '@cart/services/cart.service';

@Component({
  selector: 'app-cart-quantity',
  templateUrl: './cart-quantity.component.html',
  styleUrls: ['./cart-quantity.component.scss'],
})
export class CartQuantityComponent implements OnInit {
  @Input() quantity!: number;
  @Input() itemId!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addQuantity() {
    this.cartService.increaseItemQty(this.itemId);
  }

  subQuantity() {
    if (this.quantity <= 1) this.cartService.removeFromCart(this.itemId);
    else this.cartService.decreaseItemQty(this.itemId);
  }
}
