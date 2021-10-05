import { Component, OnInit } from '@angular/core';
import { CartService } from '@cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.fetchCartData();
  }
}
