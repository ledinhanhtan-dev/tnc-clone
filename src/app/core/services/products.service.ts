import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PRODUCTS_API } from '@core/constants/api.constant';
import { HomeProducts } from '@core/models/home-products.model';
import { Product } from '@core/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  fetchHomeProducts(): Observable<HomeProducts> {
    return this.http.get<HomeProducts>(PRODUCTS_API + 'home');
  }

  fetchProduct(id: string): Observable<Product> {
    return this.http.get<Product>(PRODUCTS_API + id);
  }

  fetchRelatedProduct(catId: number): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_API + catId + '/category');
  }
}
