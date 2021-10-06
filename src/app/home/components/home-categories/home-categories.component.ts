import { Component, OnInit } from '@angular/core';
import {
  HomeCategory,
  HOME_CATEGORIES,
} from 'app/home/constants/home-categories.constant';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss'],
})
export class HomeCategoriesComponent implements OnInit {
  categories: HomeCategory[] = HOME_CATEGORIES;

  constructor() {}

  ngOnInit(): void {}
}
