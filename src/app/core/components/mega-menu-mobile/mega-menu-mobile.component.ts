import { Component, OnInit } from '@angular/core';
import { categories, Category } from '@core/models/category.model';

@Component({
  selector: 'app-mega-menu-mobile',
  templateUrl: './mega-menu-mobile.component.html',
  styleUrls: ['./mega-menu-mobile.component.scss'],
})
export class MegaMenuMobileComponent implements OnInit {
  categories: Category[] = categories;

  constructor() {}

  ngOnInit(): void {}

  onToggleActive(event: MouseEvent) {
    (event.target as HTMLButtonElement).classList.toggle('active');
  }

  onToggleActiveFromCatMenu(event: MouseEvent) {
    (event.target as HTMLButtonElement)
      .closest('.menu-item')
      ?.querySelector('.cat-entry')
      ?.classList.toggle('active');
  }
}
