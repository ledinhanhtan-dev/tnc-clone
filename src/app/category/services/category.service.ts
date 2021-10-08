import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CATEGORY_API } from '@core/constants/api.constant';
import { Category, EMPTY_CATEGORY } from '../models/category.model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category$ = new BehaviorSubject<Category>(EMPTY_CATEGORY);
  currentPage$ = new BehaviorSubject<number>(1);
  sortQuery: string = '?sort=createdAt&order=ASC';

  constructor(private http: HttpClient) {}

  fetchCategory(slug: string) {
    return this.http
      .get<Category>(CATEGORY_API + slug)
      .pipe(tap(category => this.category$.next(category)));
  }

  fetchSortedCategory(sortQuery: string) {
    this.sortQuery = sortQuery;
    const slug = this.category$.value.slug;

    this.http
      .get<Category>(CATEGORY_API + slug + sortQuery)
      .subscribe(category => this.category$.next(category));

    this.currentPage$.next(1);
  }

  fetchPaginatedCategory(page: number) {
    const slug = this.category$.value.slug;

    const url = CATEGORY_API + slug + this.sortQuery + `&currentPage=${page}`;

    this.http
      .get<Category>(url)
      .subscribe(category => this.category$.next(category));

    this.currentPage$.next(page);
  }
}
