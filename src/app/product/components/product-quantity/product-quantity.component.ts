import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CartService } from '@cart/services/cart.service';
import { ProductsService } from 'app/product/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
})
export class ProductQuantityComponent implements OnInit, OnDestroy {
  qtySub!: Subscription;
  quantity: number = 1;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.qtySub = this.productsService.quantity$.subscribe(
      qty => (this.quantity = qty)
    );
  }

  add() {
    this.productsService.quantity$.next(this.quantity + 1);
  }

  subtract() {
    if (this.quantity <= 1) return;
    this.productsService.quantity$.next(this.quantity - 1);
  }

  ngOnDestroy(): void {
    if (this.qtySub) this.qtySub.unsubscribe();
  }
}
