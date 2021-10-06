import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/product/models/product.model';
@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
})
export class ProductPriceComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
