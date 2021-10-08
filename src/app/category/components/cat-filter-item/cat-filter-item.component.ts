import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FilterItem } from 'app/category/models/filter-item.model';
import { CatFilterService } from 'app/category/services/cat-filter.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cat-filter-item',
  templateUrl: './cat-filter-item.component.html',
  styleUrls: ['./cat-filter-item.component.scss'],
})
export class CatFilterItemComponent implements OnInit, OnDestroy {
  @Input() item!: FilterItem;
  private filtersSub!: Subscription;
  checked: boolean = false;

  constructor(private catFilterService: CatFilterService) {}

  ngOnInit(): void {
    this.filtersSub = this.catFilterService.filters$.subscribe(filters => {
      if (!this.checked) return;

      const hasThisItem = filters.find(item => item.id === this.item.id);

      if (this.checked && !hasThisItem) this.checked = false;
    });
  }

  ngOnDestroy(): void {
    if (this.filtersSub) this.filtersSub.unsubscribe();
  }

  onSelectItem() {
    if (this.checked) this.catFilterService.addFilter(this.item);
    else this.catFilterService.removeFilter(this.item);
  }
}
