import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss'],
})
export class ProductQuantityComponent implements OnInit {
  inputValue: number = 1;

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.inputValue += 1;
  }

  subtract() {
    if (this.inputValue <= 1) return;
    this.inputValue -= 1;
  }
}
