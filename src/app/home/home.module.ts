import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsModule } from 'app/products/products.module';
import { ProductsService } from 'app/products/services/products.service';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { RouterModule, Routes } from '@angular/router';
import { components } from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, ...components],
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    ProductsModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent],
  providers: [ProductsService],
})
export class HomeModule {}
