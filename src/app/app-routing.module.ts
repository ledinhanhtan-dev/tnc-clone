import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolver } from './home/resolvers/home.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: [HomeResolver] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
