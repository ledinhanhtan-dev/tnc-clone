import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '@core/models/filter.model';
@Component({
  selector: 'app-cat-filters',
  templateUrl: './cat-filters.component.html',
  styleUrls: ['./cat-filters.component.scss'],
})
export class CatFiltersComponent implements OnInit {
  @Input() filters: Filter[] = [];

  constructor() {}

  ngOnInit(): void {}
}
