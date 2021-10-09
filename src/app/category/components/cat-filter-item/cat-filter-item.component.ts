import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from 'app/category/services/category.service';
import { Tag } from '@core/models/tag.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-filter-item',
  templateUrl: './cat-filter-item.component.html',
  styleUrls: ['./cat-filter-item.component.scss'],
})
export class CatFilterItemComponent implements OnInit, OnDestroy {
  private filtersSub!: Subscription;
  checked: boolean = false;
  @Input() tag!: Tag;

  constructor(private catService: CategoryService) {}

  ngOnInit(): void {
    this.filtersSub = this.catService.filters$.subscribe(tags => {
      if (!this.checked) return;

      const hasThisTag = tags.find(tag => tag.id === this.tag.id);
      if (!hasThisTag) this.checked = false;
    });
  }

  ngOnDestroy(): void {
    if (this.filtersSub) this.filtersSub.unsubscribe();
  }

  onSelectTag() {
    if (this.checked) this.catService.addTag(this.tag);
    else this.catService.removeTag(this.tag);
  }
}
