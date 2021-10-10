import { Subscription } from 'rxjs';
import { CartService } from '@cart/services/cart.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BP } from '@core/constants/breakpoints.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
})
export class HeaderCartComponent implements OnInit, OnDestroy {
  private totalSub!: Subscription;
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  @HostListener('click') onOpenCartModel() {
    if (window.innerWidth <= BP.DESKTOP_SM) {
      this.router.navigateByUrl('/cart');
    } else {
      this.cartService.openModal();
    }
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
