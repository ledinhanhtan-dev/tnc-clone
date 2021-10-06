import { Component, OnInit } from '@angular/core';
import {
  Category,
  MEGA_MENU_CATEGORIES,
} from '@core/constants/mega-menu-categories.constant';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent implements OnInit {
  categories: Category[] = MEGA_MENU_CATEGORIES;

  constructor() {}

  ngOnInit(): void {}
}
