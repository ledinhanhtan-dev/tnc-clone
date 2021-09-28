import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeProducts } from '../models/home-products.model';
import { PRODUCTS_API } from '@core/constants/api.constant';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  fetchHomeProduct() {
    return this.http.get<HomeProducts>(PRODUCTS_API + 'home');
  }

  fetchProduct(id: string) {
    this.http.get(PRODUCTS_API + id).subscribe();
  }
}
