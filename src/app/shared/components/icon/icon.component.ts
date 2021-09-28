import { Component, Input, OnInit } from '@angular/core';

type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconId!: string;
  @Input() size: Size = 'md';

  constructor() {}

  ngOnInit(): void {}
}
