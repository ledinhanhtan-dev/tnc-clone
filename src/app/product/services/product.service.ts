import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PRODUCTS_API } from '@core/constants/api.constant';
import { HomeProducts } from '@core/models/home-products.model';
import { Product } from 'app/product/models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  activeInfoIndex$ = new BehaviorSubject<number>(0);
  quantity$ = new BehaviorSubject<number>(1);

  constructor(private readonly http: HttpClient) {}

  fetchHomeProducts(): Observable<HomeProducts> {
    return this.http.get<HomeProducts>(PRODUCTS_API + 'home');
  }

  fetchProduct(slug: string): Observable<Product> {
    return this.http.get<Product>(PRODUCTS_API + slug);
  }

  fetchRelatedProduct(catId: number): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_API + catId + '/category');
  }
}
