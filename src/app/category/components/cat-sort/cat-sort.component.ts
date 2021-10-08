import { Component, OnInit } from '@angular/core';
import { INIT_SORT_QUERY } from 'app/category/constants/category.constant';
import { CategoryService } from 'app/category/services/category.service';

@Component({
  selector: 'app-cat-sort',
  templateUrl: './cat-sort.component.html',
  styleUrls: ['./cat-sort.component.scss'],
})
export class CatSortComponent implements OnInit {
  initSelected: boolean = true;

  constructor(private catService: CategoryService) {}

  ngOnInit(): void {
    this.catService.sortQuery$.subscribe(sortQuery => {
      if (sortQuery === INIT_SORT_QUERY) this.initSelected = true;
      else this.initSelected = false;
    });
  }

  onSelectChange(e: Event) {
    const query = (e.target as HTMLSelectElement).value;
    this.catService.fetchSortedCategory(query);
  }
}
