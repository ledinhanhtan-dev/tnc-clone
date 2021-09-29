import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  {
    path: 'product',
    children: [
      { path: ':id', component: ProductComponent, resolve: [ProductResolver] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
