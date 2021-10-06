import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent implements OnInit {
  @HostBinding('class.active') active: boolean = false;
  @Input() shortDesc!: string[];

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    this.active = !this.active;
  }
}
