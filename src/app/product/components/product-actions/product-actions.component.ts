import { Component, Input, OnInit } from '@angular/core';

export interface ProductActionsData {
  available: boolean;
  price: number;
  priceOld: number;
}

@Component({
  selector: 'app-product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.scss'],
})
export class ProductActionsComponent implements OnInit {
  @Input() data!: ProductActionsData;

  constructor() {}

  ngOnInit(): void {}
}
