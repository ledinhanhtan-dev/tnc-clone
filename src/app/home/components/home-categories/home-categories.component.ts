import { Component, OnInit } from '@angular/core';
import { homeCategories, HomeCategory } from '../../models/home-category.model';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss'],
})
export class HomeCategoriesComponent implements OnInit {
  categories: HomeCategory[] = homeCategories;

  constructor() {}

  ngOnInit(): void {}
}
