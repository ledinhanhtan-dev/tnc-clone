import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeProducts } from 'app/products/models/home-products.model';
import { ProductsService } from 'app/products/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  homeProductsSub!: Subscription;
  homeProducts!: HomeProducts;

  constructor(private readonly productsService: ProductsService) {}

  ngOnInit(): void {
    this.homeProductsSub = this.productsService.homeProduct$.subscribe(
      homeProducts => {
        console.log(homeProducts);

        this.homeProducts = homeProducts;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.homeProductsSub) this.homeProductsSub.unsubscribe();
  }
}
