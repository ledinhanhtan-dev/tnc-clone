import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PRODUCTS_API } from '@core/constants/api.constant';
import { HomeProducts } from 'app/product/models/home-products.model';
import { Product } from 'app/product/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  fetchHomeProducts(): Observable<HomeProducts> {
    return this.http.get<HomeProducts>(PRODUCTS_API + 'home');
  }

  fetchProduct(idName: string): Observable<Product> {
    return this.http.get<Product>(PRODUCTS_API + idName);
  }
}
