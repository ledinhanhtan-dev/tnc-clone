import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header-bottom-mobile',
  templateUrl: './header-bottom-mobile.component.html',
  styleUrls: ['./header-bottom-mobile.component.scss'],
})
export class HeaderBottomMobileComponent implements OnInit {
  // FIX: close hamburger icons
  menuOpen$ = new BehaviorSubject<boolean>(false);
  catOpen$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  ngOnInit(): void {}

  toggleMenuOpen() {
    this.menuOpen$.next(!this.menuOpen$.value);
  }

  toggleCatOpen() {
    console.log('GOT');

    this.catOpen$.next(!this.catOpen$.value);
  }
}
