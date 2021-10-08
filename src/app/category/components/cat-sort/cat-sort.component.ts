import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/category/services/category.service';

@Component({
  selector: 'app-cat-sort',
  templateUrl: './cat-sort.component.html',
  styleUrls: ['./cat-sort.component.scss'],
})
export class CatSortComponent implements OnInit {
  constructor(private catService: CategoryService) {}

  ngOnInit(): void {}

  onSelectChange(e: Event) {
    const query = (e.target as HTMLSelectElement).value;
    this.catService.fetchSortedCategory(query);
  }
}
