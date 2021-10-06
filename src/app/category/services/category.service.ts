import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CATEGORY_API } from '@core/constants/api.constant';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category, EMPTY_CATEGORY } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category$ = new BehaviorSubject<Category>(EMPTY_CATEGORY);

  constructor(private http: HttpClient) {}

  fetchCategory(slug: string) {
    return this.http
      .get<Category>(CATEGORY_API + slug)
      .pipe(tap(category => this.category$.next(category)));
  }

  fetchSortedCategory(slug: string, query: string) {
    this.http
      .get<Category>(CATEGORY_API + slug + query)
      .subscribe(category => this.category$.next(category));
  }
}
