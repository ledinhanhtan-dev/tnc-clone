import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolver } from './resolver/home.resolver';
import { HomeComponent } from './home.component';
import { components } from './components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    resolve: [HomeResolver],
  },
];

@NgModule({
  declarations: [HomeComponent, ...components],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [HomeComponent],
})
export class HomeModule {}
