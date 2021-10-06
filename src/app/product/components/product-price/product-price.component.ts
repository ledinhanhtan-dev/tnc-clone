import { Component, Input, OnInit } from '@angular/core';

export interface ProductPriceData {
  available: boolean;
  price: number;
  priceOld: number;
}

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
})
export class ProductPriceComponent implements OnInit {
  @Input() data!: ProductPriceData;

  constructor() {}

  ngOnInit(): void {}
}
