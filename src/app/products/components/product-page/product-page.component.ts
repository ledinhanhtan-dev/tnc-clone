import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'app/products/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.productsService.fetchProduct(params.id)
    );
  }
}
