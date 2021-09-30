import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit, OnDestroy {
  activeSub!: Subscription;

  @HostBinding('class.active')
  active: boolean = true;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.activeSub = this.cartService.$active.subscribe(
      active => (this.active = active)
    );
  }

  ngOnDestroy(): void {
    if (this.activeSub) this.activeSub.unsubscribe();
  }

  onCloseModal() {
    this.cartService.closeModal();
  }
}
