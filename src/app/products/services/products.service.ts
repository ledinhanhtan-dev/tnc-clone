import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { HomeProducts } from '../models/home-products.model';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  homeProduct$ = new BehaviorSubject<HomeProducts>({
    isFetched: false,
    discountProducts: [],
  });

  constructor(private readonly http: HttpClient) {}

  fetchHomeProduct() {
    if (this.homeProduct$.value.isFetched)
      return new Observable<HomeProducts>();

    return this.http
      .get<HomeProducts>('http://localhost:3000/products/home')
      .pipe(tap(homeProducts => this.homeProduct$.next(homeProducts)));
  }
}
