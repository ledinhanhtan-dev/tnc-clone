import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'app/category/models/category.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent implements OnInit {
  @Input() category!: Category;

  constructor() {}

  ngOnInit(): void {}
}
