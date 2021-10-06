import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FilterBlock } from 'app/category/models/filter-block.model';

@Component({
  selector: 'app-cat-filter-block',
  templateUrl: './cat-filter-block.component.html',
  styleUrls: ['./cat-filter-block.component.scss'],
})
export class CatFilterBlockComponent implements OnInit {
  @HostBinding('class.active') active: boolean = true;
  @Input() block!: FilterBlock;

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    this.active = !this.active;
  }
}
