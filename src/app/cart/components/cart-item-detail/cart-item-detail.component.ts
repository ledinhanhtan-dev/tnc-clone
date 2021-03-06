import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '@cart/services/cart.service';
import { CartItem } from '@cart/models/cart.model';

@Component({
  selector: 'app-cart-item-detail',
  templateUrl: './cart-item-detail.component.html',
  styleUrls: ['./cart-item-detail.component.scss'],
})
export class CartItemDetailComponent implements OnInit {
  @Input() item!: CartItem;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  removeItem() {
    this.cartService.removeFromCart(this.item.id);
  }
}
