import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'app/category/models/category.model';

@Component({
  selector: 'app-cat-description',
  templateUrl: './cat-description.component.html',
  styleUrls: ['./cat-description.component.scss'],
})
export class CatDescriptionComponent implements OnInit {
  @Input() category!: Category;

  constructor() {}

  ngOnInit(): void {}
}
