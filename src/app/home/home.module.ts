import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsModule } from 'app/products/products.module';
import { ProductsService } from 'app/products/services/products.service';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';

import { components } from './components';

@NgModule({
  declarations: [HomeComponent, ...components],
  imports: [CommonModule, SharedModule, SwiperModule, ProductsModule],
  exports: [HomeComponent],
  providers: [ProductsService],
})
export class HomeModule {}
