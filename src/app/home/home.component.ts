import { Component, OnInit } from '@angular/core';
import { HomeProducts } from 'app/product/models/home-products.model';
import { ProductService } from 'app/product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeProducts: HomeProducts = { isFetched: false, discountProducts: [] };

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    if (this.homeProducts.isFetched) return;

    this.productService
      .fetchHomeProduct()
      .subscribe(homeProducts => (this.homeProducts = homeProducts));
  }
}
