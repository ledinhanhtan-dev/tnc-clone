import { Component, OnInit } from '@angular/core';
import {
  HomeFeaturedProduct,
  HOME_FEATURED_PRODUCTS,
} from 'app/home/constants/home-featured-products.constant';

@Component({
  selector: 'app-home-featured-products',
  templateUrl: './home-featured-products.component.html',
  styleUrls: ['./home-featured-products.component.scss'],
})
export class HomeFeaturedProductsComponent implements OnInit {
  featuredProducts: HomeFeaturedProduct[] = HOME_FEATURED_PRODUCTS;

  constructor() {}

  ngOnInit(): void {}
}
