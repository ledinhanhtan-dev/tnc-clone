import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeProducts } from '../models/home-products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  fetchHomeProduct() {
    return this.http.get<HomeProducts>('http://localhost:3000/products/home');
  }

  fetchProduct(id: string) {
    this.http.get(`http://localhost:3000/products/${id}`).subscribe();
  }
}
