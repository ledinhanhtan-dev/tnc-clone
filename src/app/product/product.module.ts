import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsSwiperComponent } from './components/products-swiper/products-swiper.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './services/product.service';
import { ProductComponent } from './product.component';
import { SwiperModule } from 'swiper/angular';
import { PricePipe } from './pipes/price.pipe';
import { components } from './components';
import { ProductInfoService } from './services/product-info.service';

@NgModule({
  declarations: [...components, PricePipe, ProductComponent],
  imports: [CommonModule, SharedModule, SwiperModule, ProductRoutingModule],
  exports: [ProductsSwiperComponent],
  providers: [ProductService, ProductInfoService],
})
export class ProductModule {}
