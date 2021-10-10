import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Filter } from '@core/models/filter.model';
import { CatFilterMobileService } from 'app/category/services/cat-filter-mobile.service';
import { CategoryService } from 'app/category/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cat-filters-mobile',
  templateUrl: './cat-filters-mobile.component.html',
  styleUrls: ['./cat-filters-mobile.component.scss'],
})
export class CatFiltersMobileComponent implements OnInit, OnDestroy {
  private activeSub!: Subscription;
  @Input() filters: Filter[] = [];
  @HostBinding('class.active')
  active: boolean = false;

  constructor(
    private catService: CategoryService,
    private catFiltersMobile: CatFilterMobileService
  ) {}

  ngOnInit(): void {
    this.activeSub = this.catFiltersMobile.active$.subscribe(
      active => (this.active = active)
    );
  }

  ngOnDestroy(): void {
    if (this.activeSub) this.activeSub.unsubscribe();
  }

  closeModal() {
    this.catFiltersMobile.closeModal();
  }

  clear() {
    this.catService.removeAllTags();
  }
}
