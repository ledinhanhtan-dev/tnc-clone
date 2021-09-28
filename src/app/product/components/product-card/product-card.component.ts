import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/product/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  percent!: number;

  constructor() {}

  ngOnInit(): void {
    const { price, priceOld } = this.product;
    this.percent = Math.floor(((priceOld - price) / priceOld) * 100);
  }
}
