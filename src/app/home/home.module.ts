import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from 'app/product/product.module';
import { ProductService } from 'app/product/services/product.service';
import { HomeResolver } from './resolver/home.resolver';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
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
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    ProductModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent],
  providers: [ProductService],
})
export class HomeModule {}
