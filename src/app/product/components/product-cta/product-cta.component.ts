import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cta',
  templateUrl: './product-cta.component.html',
  styleUrls: ['./product-cta.component.scss'],
})
export class ProductCtaComponent implements OnInit {
  @Input()
  @HostBinding('class.toolbar')
  toolbar: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
