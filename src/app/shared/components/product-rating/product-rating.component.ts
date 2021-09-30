import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],
})
export class ProductRatingComponent implements OnInit {
  @Input() size: 'small' | 'medium' = 'medium';
  @Input() score!: number;
  @Input() count!: number;
  @HostBinding('class.small') small: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.small = this.size === 'small';
  }
}
