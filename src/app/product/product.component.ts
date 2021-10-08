import { Product } from 'app/product/models/product.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'app/product/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product!: Product;
  relatedProduct: Product[] = [];

  constructor(
    private readonly title: Title,
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.product = data[0];

      this.productService
        .fetchRelatedProduct(this.product.category.id)
        .subscribe(products => (this.relatedProduct = products));
    });

    this.title.setTitle(this.product.name);
  }

  ngOnDestroy(): void {}
}
