import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {
  Category,
  MEGA_MENU_CATEGORIES,
} from '@core/constants/mega-menu-categories.constant';
import { timer } from 'rxjs';
import { filter } from 'rxjs/operators';

type Div = HTMLDivElement;
@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent implements OnInit {
  categories: Category[] = MEGA_MENU_CATEGORIES;

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => this.hideMegaMenuThenSetBackToDefault());
  }

  private hideMegaMenuThenSetBackToDefault() {
    (this.elementRef.nativeElement as Div).style.display = 'none';
    timer(100).subscribe(
      () => ((this.elementRef.nativeElement as Div).style.display = '')
    );
  }
}
