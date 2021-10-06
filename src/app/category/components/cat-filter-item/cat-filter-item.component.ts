import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-filter-item',
  templateUrl: './cat-filter-item.component.html',
  styleUrls: ['./cat-filter-item.component.scss'],
})
export class CatFilterItemComponent implements OnInit {
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}
}
