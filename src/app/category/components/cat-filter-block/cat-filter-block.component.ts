import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Filter } from '@core/models/filter.model';

@Component({
  selector: 'app-cat-filter-block',
  templateUrl: './cat-filter-block.component.html',
  styleUrls: ['./cat-filter-block.component.scss'],
})
export class CatFilterBlockComponent implements OnInit {
  @HostBinding('class.active') active: boolean = true;
  @Input() filter!: Filter;

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    this.active = !this.active;
  }
}
