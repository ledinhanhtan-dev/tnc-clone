import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss'],
})
export class HeaderItemComponent implements OnInit {
  @Input() title!: string;
  @Input() iconId!: string;
  @Input() flashy = false;
  @Input() type: 'button' | 'link' = 'link';

  constructor() {}

  ngOnInit(): void {}
}
