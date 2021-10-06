import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from './models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  private catSub!: Subscription;
  category!: Category;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.catSub = this.route.data.subscribe(data => (this.category = data[0]));
  }

  ngOnDestroy(): void {
    if (this.catSub) this.catSub.unsubscribe();
  }
}
