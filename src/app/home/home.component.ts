import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeProducts } from '@core/models/home-products.model';
import { FeaturedProduct } from '@shared/models/featured-product.model';
import { HOME_FEATURED_PRODUCTS } from './constants/home-featured-products.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeFeaturedProducts: FeaturedProduct[] = HOME_FEATURED_PRODUCTS;
  homeProducts!: HomeProducts;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => (this.homeProducts = data[0]));
  }
}
