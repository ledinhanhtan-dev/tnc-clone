import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { ProductsService } from '@core/services/products.service';
import { HomeProducts } from 'app/product/models/home-products.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<HomeProducts> {
  cache!: HomeProducts;

  constructor(private readonly productsService: ProductsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<HomeProducts> {
    if (this.cache) return of(this.cache);

    return this.productsService
      .fetchHomeProducts()
      .pipe(tap(homeProducts => (this.cache = homeProducts)));
  }
}
