import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  percent!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    const { price, priceOld } = this.product;
    this.percent = Math.floor(((priceOld - price) / priceOld) * 100);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
