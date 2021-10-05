import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Product } from '@core/models/product.model';
import { ProductsService } from 'app/product/services/products.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Product | boolean> {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product | boolean> {
    const id: string = route.params.id;

    return this.productsService.fetchProduct(id).pipe(
      catchError(error => {
        this.router.navigate(['not-found']);
        return of(false);
      })
    );
  }
}
