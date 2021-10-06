import { CartItem } from '@core/models/cart.model';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '@cart/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item!: CartItem;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  closeModal() {
    this.cartService.closeModal();
  }

  addQuantity() {
    this.cartService.increaseItemQty(this.item.id);
  }

  subQuantity() {
    if (this.item.quantity <= 1) this.cartService.removeFromCart(this.item.id);
    else this.cartService.decreaseItemQty(this.item.id);
  }

  remove() {
    this.cartService.removeFromCart(this.item.id);
  }
}
