import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
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
}
