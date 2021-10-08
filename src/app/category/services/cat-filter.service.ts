import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterItem } from '../models/filter-item.model';

@Injectable({
  providedIn: 'root',
})
export class CatFilterService {
  filters$ = new BehaviorSubject<FilterItem[]>([
    // { id: 1, name: 'Gaming PC Alpha' },
    // { id: 2, name: 'Gaming PC Lumen' },
    // { id: 3, name: 'Gaming PC Lumen' },
    // { id: 4, name: 'Gaming PC Lumen' },
    // { id: 5, name: 'Gaming PC Lumen' },
    // { id: 6, name: 'Gaming PC Lumen' },
  ]);

  constructor() {}

  addFilter(filterItem: FilterItem) {
    const filters = [...this.filters$.value, filterItem];

    this.filters$.next(filters);
  }

  removeFilter(filterItem: FilterItem) {
    this.filters$.next(
      this.filters$.value.filter(filter => filter.id !== filterItem.id)
    );
  }
}
