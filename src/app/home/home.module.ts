import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolver } from './resolver/home.resolver';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { components } from './components';
import { ProductsService } from '@core/services/products.service';

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
  providers: [ProductsService],
})
export class HomeModule {}
