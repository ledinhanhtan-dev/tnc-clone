import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Product } from 'app/product/models/product.model';
import { ProductService } from 'app/product/services/product.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Product | boolean> {
  constructor(private productService: ProductService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product | boolean> {
    const slug: string = route.params.slug;

    return this.productService.fetchProduct(slug).pipe(
      catchError(error => {
        this.router.navigate(['not-found']);
        return of(false);
      })
    );
  }
}
