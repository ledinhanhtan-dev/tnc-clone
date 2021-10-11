import { Component, Input, OnInit } from '@angular/core';
import { FeaturedProduct } from '@shared/models/featured-product.model';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  @Input()
  products!: FeaturedProduct[];

  constructor() {}

  ngOnInit(): void {}
}
