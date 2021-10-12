import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@cart/services/cart.service';
import { ProductService } from 'app/product/services/product.service';

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
    private router: Router,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  addToCart() {
    const quantity = this.productService.quantity$.value;
    this.cartService.addToCart(this.productId, quantity);

    this.resetQuantityInput();
  }

  addAndGoToCart() {
    this.addToCart();
    this.router.navigateByUrl('/cart');
  }

  private resetQuantityInput() {
    this.productService.quantity$.next(1);
  }
}
