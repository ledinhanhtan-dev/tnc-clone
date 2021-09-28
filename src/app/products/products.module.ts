import { NgModule } from '@angular/core';
import { PricePipe } from './pipes/price.pipe';
import { CommonModule } from '@angular/common';
import { ProductsSwiperComponent } from './components/products-swiper/products-swiper.component';
import { ProductsService } from './services/products.service';
import { SwiperModule } from 'swiper/angular';

import { components } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [...components, PricePipe],
  imports: [CommonModule, SwiperModule, ProductsRoutingModule],
  exports: [ProductsSwiperComponent],
  providers: [ProductsService],
})
export class ProductsModule {}
