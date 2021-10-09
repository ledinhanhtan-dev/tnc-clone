import { Component, Input, OnInit } from '@angular/core';
import { Filter } from '@core/models/filter.model';
import {
  FilterBlock,
  MANUFACTURE_BLOCK,
  SERIES_BLOCK,
  CPU_BLOCK,
} from 'app/category/models/filter-block.model';

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.scss'],
})
export class CatFilterComponent implements OnInit {
  @Input() filters: Filter[] = [];

  manufacture: FilterBlock = MANUFACTURE_BLOCK;
  series: FilterBlock = SERIES_BLOCK;
  cpu: FilterBlock = CPU_BLOCK;

  constructor() {}

  ngOnInit(): void {}
}
