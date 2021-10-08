import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CATEGORY_API } from '@core/constants/api.constant';
import { Category, EMPTY_CATEGORY } from '../models/category.model';
import { INIT_SORT_QUERY } from '../constants/category.constant';
import { CatPagination, INIT_PAGINATION } from '../models/cat-pagination.model';
import { Tag } from 'app/tag/models/tag.model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  pagination$ = new BehaviorSubject<CatPagination>(INIT_PAGINATION);
  sortQuery$ = new BehaviorSubject<string>(INIT_SORT_QUERY);
  category$ = new BehaviorSubject<Category>(EMPTY_CATEGORY);
  filters$ = new BehaviorSubject<Tag[]>([]);

  constructor(private http: HttpClient) {}

  initialFetchByResolver(slug: string) {
    return this.http.post<Category>(CATEGORY_API + slug, { filters: [] }).pipe(
      tap(category => {
        this.category$.next(category);
        this.paginationNext(category.count);
      })
    );
  }

  private fetchCategory() {
    const slug = this.category$.value.slug;

    this.http
      .post<Category>(CATEGORY_API + slug, { filters: [] })
      .subscribe(category => {
        this.filters$.next([]);
        this.category$.next(category);
        this.sortQuery$.next(INIT_SORT_QUERY);
        this.paginationNext(category.count);
      });
  }

  fetchSortedCategory(sortQuery: string) {
    const filters = this.filters$.value;
    const slug = this.category$.value.slug;
    const url = CATEGORY_API + slug + sortQuery;

    this.http.post<Category>(url, { filters }).subscribe(category => {
      this.category$.next(category);
      this.sortQuery$.next(sortQuery);
      this.paginationNext(category.count);
    });
  }

  fetchPaginatedCategory(currentPage: number) {
    const slug = this.category$.value.slug;
    const query = this.sortQuery$.value;
    const filters = this.filters$.value;

    const url = CATEGORY_API + slug + query + `&currentPage=${currentPage}`;

    this.http.post<Category>(url, { filters }).subscribe(category => {
      this.category$.next(category);
      this.paginationNext(category.count, currentPage);
    });
  }

  fetchFilteredCategory(filters: Tag[]) {
    const slug = this.category$.value.slug;
    const query = INIT_SORT_QUERY;

    this.http
      .post<Category>(CATEGORY_API + slug + query, { filters })
      .subscribe(category => {
        this.filters$.next(filters);
        this.category$.next(category);
        this.sortQuery$.next(INIT_SORT_QUERY);
        this.paginationNext(category.count);
      });
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
