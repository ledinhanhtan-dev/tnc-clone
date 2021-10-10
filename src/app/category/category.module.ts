import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { SharedModule } from '@shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule } from '@angular/forms';
import { components } from './components';
import { CatFilterMobileService } from './services/cat-filter-mobile.service';

@NgModule({
  declarations: [...components, CategoryComponent],
  imports: [CommonModule, SharedModule, CategoryRoutingModule, FormsModule],
  providers: [CatFilterMobileService],
})
export class CategoryModule {}
