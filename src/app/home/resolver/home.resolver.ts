import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { HomeProducts } from 'app/product/models/home-products.model';
import { ProductService } from 'app/product/services/product.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<HomeProducts> {
  constructor(private readonly productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<HomeProducts> {
    return this.productService.fetchHomeProduct();
  }
}
