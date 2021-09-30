import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
})
export class HeaderCartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  @HostListener('click') onOpenCartModel() {
    this.cartService.openModal();
  }
}
