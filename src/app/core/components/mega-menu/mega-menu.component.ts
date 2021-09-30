import { Component, OnInit } from '@angular/core';
import { CATEGORIES, Category } from '@core/constants/category.constant';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent implements OnInit {
  categories: Category[] = CATEGORIES;

  constructor() {}

  ngOnInit(): void {}
}
