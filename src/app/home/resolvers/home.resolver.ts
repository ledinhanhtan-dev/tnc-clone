import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { HomeProducts } from 'app/products/models/home-products.model';
import { ProductsService } from 'app/products/services/products.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<HomeProducts> {
  constructor(private readonly productsServices: ProductsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<HomeProducts> {
    return this.productsServices.fetchHomeProduct();
  }
}
