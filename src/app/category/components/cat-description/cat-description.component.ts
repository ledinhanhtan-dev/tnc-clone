import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Category } from 'app/category/models/category.model';

@Component({
  selector: 'app-cat-description',
  templateUrl: './cat-description.component.html',
  styleUrls: ['./cat-description.component.scss'],
})
export class CatDescriptionComponent implements OnInit {
  @HostBinding('class.active')
  active: boolean = false;

  @Input() category!: Category;

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    this.active = !this.active;
  }
}
