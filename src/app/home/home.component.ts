import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeProducts } from 'app/products/models/home-products.model';
import { ProductsService } from 'app/products/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeProducts: HomeProducts = { isFetched: false, discountProducts: [] };

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    if (this.homeProducts.isFetched) return;

    this.productsService
      .fetchHomeProduct()
      .subscribe(homeProducts => (this.homeProducts = homeProducts));
  }
}
