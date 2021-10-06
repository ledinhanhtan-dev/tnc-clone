import { Product } from 'app/product/models/product.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'app/product/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product!: Product;
  relatedProduct: Product[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.product = data[0];

      this.productsService
        .fetchRelatedProduct(this.product.category.id)
        .subscribe(products => (this.relatedProduct = products));
    });
  }

  ngOnDestroy(): void {}
}
