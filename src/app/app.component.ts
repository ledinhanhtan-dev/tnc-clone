import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartService } from '@cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private title: Title, private cartService: CartService) {}

  ngOnInit(): void {
    this.title.setTitle('TNC Store - Clone');
    this.cartService.fetchCartData();
  }
}
