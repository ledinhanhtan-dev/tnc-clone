import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedModule } from '@shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { components } from './components';
import { CatSortComponent } from './components/cat-sort/cat-sort.component';
import { CatPaginationComponent } from './components/cat-pagination/cat-pagination.component';
import { CatListFilterComponent } from './components/cat-list-filter/cat-list-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...components,
    CategoryComponent,
    CatSortComponent,
    CatPaginationComponent,
    CatListFilterComponent,
  ],
  imports: [CommonModule, SharedModule, CategoryRoutingModule, FormsModule],
})
export class CategoryModule {}
