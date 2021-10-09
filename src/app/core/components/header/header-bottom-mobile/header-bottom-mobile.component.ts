import { Component, HostBinding, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header-bottom-mobile',
  templateUrl: './header-bottom-mobile.component.html',
  styleUrls: ['./header-bottom-mobile.component.scss'],
})
export class HeaderBottomMobileComponent implements OnInit {
  hostActive: boolean = false;
  menuActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenuOpen() {
    this.hostActive = !this.hostActive;
  }

  toggleCatOpen() {
    this.menuActive = !this.menuActive;
  }
}
