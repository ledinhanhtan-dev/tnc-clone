import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedModule } from '@shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CatFilterComponent } from './components/cat-filter/cat-filter.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { CatFilterBlockComponent } from './components/cat-filter-block/cat-filter-block.component';
import { CatFilterItemComponent } from './components/cat-filter-item/cat-filter-item.component';
import { CatDescriptionComponent } from './components/cat-description/cat-description.component';

@NgModule({
  declarations: [CategoryComponent, CatFilterComponent, CatListComponent, CatFilterBlockComponent, CatFilterItemComponent, CatDescriptionComponent],
  imports: [CommonModule, SharedModule, CategoryRoutingModule],
})
export class CategoryModule {}
