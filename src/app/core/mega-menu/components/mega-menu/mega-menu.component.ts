import { Component, OnInit } from '@angular/core';
import { categories, Category } from '../../models/category.model';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent implements OnInit {
  categories: Category[] = categories;

  constructor() {}

  ngOnInit(): void {}
}
