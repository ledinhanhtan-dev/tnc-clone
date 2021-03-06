import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { StoreResolver } from './resolvers/store.resolver';

const routes: Routes = [
  {
    path: ':slug',
    component: StoreComponent,
    resolve: [StoreResolver],
  },
];

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class StoreModule {}
