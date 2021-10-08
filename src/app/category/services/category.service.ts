import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CATEGORY_API } from '@core/constants/api.constant';
import { Category, EMPTY_CATEGORY } from '../models/category.model';
import { INIT_SORT_QUERY } from '../constants/category.constant';
import { CatPagination } from '../models/cat-pagination';
import { Tag } from 'app/tag/models/tag.model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category$ = new BehaviorSubject<Category>(EMPTY_CATEGORY);
  pagination$ = new BehaviorSubject<CatPagination>({
    count: 0,
    currentPage: 1,
  });
  filters$ = new BehaviorSubject<Tag[]>([]);
  sortQuery: string = INIT_SORT_QUERY;

  constructor(private http: HttpClient) {}

  initialFetchByResolver(slug: string) {
    return this.http.post<Category>(CATEGORY_API + slug, { filters: [] }).pipe(
      tap(category => {
        this.category$.next(category);
        this.paginationNext(category.count);
      })
    );
  }

  fetchCategory() {
    const slug = this.category$.value.slug;
    this.http
      .post<Category>(CATEGORY_API + slug, { filters: [] })
      .subscribe(category => {
        this.category$.next(category);
        this.paginationNext(category.count);
      });

    this.filters$.next([]);
  }

  fetchSortedCategory(sortQuery: string) {
    // Save sort query for pagination
    this.sortQuery = sortQuery;

    const slug = this.category$.value.slug;
    const url = CATEGORY_API + slug + sortQuery;
    const filters = this.filters$.value;

    this.http.post<Category>(url, { filters }).subscribe(category => {
      this.category$.next(category);
      this.paginationNext(category.count);
    });
  }

  fetchPaginatedCategory(currentPage: number) {
    const slug = this.category$.value.slug;
    const url =
      CATEGORY_API + slug + this.sortQuery + `&currentPage=${currentPage}`;
    const filters = this.filters$.value;

    this.http.post<Category>(url, { filters }).subscribe(category => {
      this.category$.next(category);
      this.paginationNext(category.count, currentPage);
    });
  }

  fetchFilteredCategory(filters: Tag[]) {
    const slug = this.category$.value.slug;

    this.http
      .post<Category>(CATEGORY_API + slug + this.sortQuery, { filters })
      .subscribe(category => {
        this.category$.next(category);
        this.paginationNext(category.count);
      });

    this.filters$.next(filters);
  }

  addTag(tag: Tag) {
    const filters = [...this.filters$.value, tag];

    this.fetchFilteredCategory(filters);
  }

  removeTag(tag: Tag) {
    const filters = this.filters$.value.filter(t => t.id !== tag.id);

    if (filters.length === 0) this.fetchCategory();
    else this.fetchFilteredCategory(filters);
  }

  removeAllTags() {
    this.fetchCategory();
  }

  private paginationNext(count: number, currentPage: number = 1) {
    this.pagination$.next({ count, currentPage });
  }
}
