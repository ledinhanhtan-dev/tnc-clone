import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'app/product/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
})
export class ProductQuantityComponent implements OnInit {
  quantity: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.quantity$.subscribe(qty => (this.quantity = qty));
  }

  // FIX: bind input
  add() {
    this.productService.quantity$.next(this.quantity + 1);
  }

  subtract() {
    if (this.quantity <= 1) return;
    this.productService.quantity$.next(this.quantity - 1);
  }
}
