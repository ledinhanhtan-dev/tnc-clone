import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from 'app/category/services/category.service';
import { Tag } from '@core/models/tag.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-list-filters',
  templateUrl: './cat-list-filters.component.html',
  styleUrls: ['./cat-list-filters.component.scss'],
})
export class CatListFilterComponent implements OnInit, OnDestroy {
  @HostBinding('class.active')
  private active: boolean = true;
  private filtersSub!: Subscription;
  tags: Tag[] = [];

  constructor(private catService: CategoryService) {}

  ngOnInit(): void {
    this.filtersSub = this.catService.filters$.subscribe(tags => {
      this.tags = tags;
      this.active = tags.length !== 0;
    });
  }

  removeTag(tag: Tag) {
    this.catService.removeTag(tag);
  }

  removeAllTags() {
    this.catService.removeAllTags();
  }

  ngOnDestroy(): void {
    if (this.filtersSub) this.filtersSub.unsubscribe();
  }
}
