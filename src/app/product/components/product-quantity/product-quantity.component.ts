import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'app/product/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
})
export class ProductQuantityComponent implements OnInit {
  quantity: number = 1;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.quantity$.subscribe(qty => (this.quantity = qty));
  }

  // FIX: bind input
  add() {
    this.productsService.quantity$.next(this.quantity + 1);
  }

  subtract() {
    if (this.quantity <= 1) return;
    this.productsService.quantity$.next(this.quantity - 1);
  }
}
