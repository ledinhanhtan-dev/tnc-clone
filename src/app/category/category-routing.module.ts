import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryResolver } from './resolvers/category.resolver';

const routes: Routes = [
  { path: ':slug', component: CategoryComponent, resolve: [CategoryResolver] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
