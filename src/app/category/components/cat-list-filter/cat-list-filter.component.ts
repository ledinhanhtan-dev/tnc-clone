import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FilterItem } from 'app/category/models/filter-item.model';
import { CatFilterService } from 'app/category/services/cat-filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-list-filter',
  templateUrl: './cat-list-filter.component.html',
  styleUrls: ['./cat-list-filter.component.scss'],
})
export class CatListFilterComponent implements OnInit, OnDestroy {
  @HostBinding('class.active')
  private active: boolean = true;
  private filterItemsSub!: Subscription;
  filterItems: FilterItem[] = [];

  constructor(private catFilterService: CatFilterService) {}

  ngOnInit(): void {
    this.filterItemsSub = this.catFilterService.filters$.subscribe(items => {
      this.filterItems = items;
      this.active = items.length !== 0;
    });
  }

  removeItem(filterItem: FilterItem) {
    this.catFilterService.removeFilter(filterItem);
  }

  removeAll() {
    this.catFilterService.filters$.next([]);
  }

  ngOnDestroy(): void {
    if (this.filterItemsSub) this.filterItemsSub.unsubscribe();
  }
}
