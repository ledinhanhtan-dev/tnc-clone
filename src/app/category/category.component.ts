import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { Category } from './models/category.model';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Filter } from '@core/models/filter.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  private catSub!: Subscription;
  filtersClone!: Filter[];
  category!: Category;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private catService: CategoryService
  ) {}

  ngOnInit(): void {
    this.catSub = this.route.data.subscribe(data => {
      this.category = data[0];

      // Only fetch filters ONE time
      this.filtersClone = Array.from(data[0].filters);

      // Switch to subscribe from CatService
      this.catSub = this.catService.category$.subscribe(category => {
        this.category = category;
      });
    });

    this.title.setTitle(this.category.name);
  }

  ngOnDestroy(): void {
    if (this.catSub) this.catSub.unsubscribe();
  }
}
