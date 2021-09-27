import { Component, OnInit } from '@angular/core';
import {
  HomeFeaturedProduct,
  homeFeaturedProducts,
} from 'app/home/models/home-featured-product.model';

@Component({
  selector: 'app-home-featured-products',
  templateUrl: './home-featured-products.component.html',
  styleUrls: ['./home-featured-products.component.scss'],
})
export class HomeFeaturedProductsComponent implements OnInit {
  featuredProducts: HomeFeaturedProduct[] = homeFeaturedProducts;

  constructor() {}

  ngOnInit(): void {}
}
