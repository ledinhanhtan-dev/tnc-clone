import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-product-top-toolbar',
  templateUrl: './product-top-toolbar.component.html',
  styleUrls: ['./product-top-toolbar.component.scss'],
})
export class ProductTopToolbarComponent implements OnInit {
  @Input() name!: string;
  @Input() price!: number;
  @HostBinding('class.active')
  hostActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY >= 900) this.hostActive = true;
    else this.hostActive = false;
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
