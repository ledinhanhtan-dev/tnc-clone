import { NgModule } from '@angular/core';
import { PricePipe } from './pipes/price.pipe';
import { CommonModule } from '@angular/common';
import { ProductsSwiperComponent } from './components/products-swiper/products-swiper.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './services/product.service';
import { SwiperModule } from 'swiper/angular';

import { components } from './components';

@NgModule({
  declarations: [...components, PricePipe],
  imports: [CommonModule, SwiperModule, ProductRoutingModule],
  exports: [ProductsSwiperComponent],
  providers: [ProductService],
})
export class ProductModule {}
