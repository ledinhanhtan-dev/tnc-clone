import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header-bottom-mobile',
  templateUrl: './header-bottom-mobile.component.html',
  styleUrls: ['./header-bottom-mobile.component.scss'],
})
export class HeaderBottomMobileComponent implements OnInit {
  hostActive: boolean = false;
  menuActive: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => this.closeMenus());
  }

  toggleHostActive() {
    this.hostActive = !this.hostActive;
  }

  toggleMenuActive() {
    this.menuActive = !this.menuActive;
  }

  private closeMenus() {
    this.hostActive = false;
    this.menuActive = false;
  }
}
