import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '@core/models/filter.model';
@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.scss'],
})
export class CatFilterComponent implements OnInit {
  @Input() filters: Filter[] = [];

  constructor() {}

  ngOnInit(): void {}
}
