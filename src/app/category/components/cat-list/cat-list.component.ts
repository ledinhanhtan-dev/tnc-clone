import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env';
import { Category } from 'app/category/models/category.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent implements OnInit {
  @Input() category!: Category;
  environment = environment;

  constructor() {}

  ngOnInit(): void {}
}
