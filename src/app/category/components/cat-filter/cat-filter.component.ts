import { Component, OnInit } from '@angular/core';
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
  manufacture: FilterBlock = MANUFACTURE_BLOCK;
  series: FilterBlock = SERIES_BLOCK;
  cpu: FilterBlock = CPU_BLOCK;

  constructor() {}

  ngOnInit(): void {}
}
