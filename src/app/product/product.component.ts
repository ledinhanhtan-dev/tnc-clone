import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  productSub!: Subscription;
  product!: Product;

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productSub = this.productService
        .fetchProduct(params.id)
        .subscribe(product => (this.product = product));
    });
  }

  ngOnDestroy(): void {
    if (this.productSub) this.productSub.unsubscribe();
  }
}
