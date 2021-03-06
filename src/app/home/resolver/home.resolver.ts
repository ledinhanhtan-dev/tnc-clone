import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { HomeProducts } from '@core/models/home-products.model';
import { ProductService } from 'app/product/services/product.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<HomeProducts> {
  cache!: HomeProducts;

  constructor(private readonly productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<HomeProducts> {
    if (this.cache) return of(this.cache);

    return this.productService
      .fetchHomeProducts()
      .pipe(tap(homeProducts => (this.cache = homeProducts)));
  }
}
