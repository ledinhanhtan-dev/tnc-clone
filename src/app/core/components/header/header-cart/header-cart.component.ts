import { Subscription } from 'rxjs';
import { CartService } from '@cart/services/cart.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
})
export class HeaderCartComponent implements OnInit, OnDestroy {
  private totalSub!: Subscription;
  total: number = 0;

  constructor(private cartService: CartService) {}

  @HostListener('click') onOpenCartModel() {
    this.cartService.openModal();
  }

  ngOnInit(): void {
    this.totalSub = this.cartService.cart$.subscribe(
      cart => (this.total = cart.totalQuantity)
    );
  }

  ngOnDestroy(): void {
    if (this.totalSub) this.totalSub.unsubscribe();
  }
}
