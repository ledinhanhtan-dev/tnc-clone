import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CartService } from '@cart/services/cart.service';
import { ProductsService } from 'app/product/services/products.service';

@Component({
  selector: 'app-product-cta',
  templateUrl: './product-cta.component.html',
  styleUrls: ['./product-cta.component.scss'],
})
export class ProductCtaComponent implements OnInit {
  @Input()
  productId!: number;

  @Input()
  @HostBinding('class.toolbar')
  toolbar: boolean = false;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {}

  addToCart() {
    const quantity = this.productsService.quantity$.value;
    this.cartService.addToCart(this.productId, quantity);
    this.productsService.quantity$.next(1);
  }
}
