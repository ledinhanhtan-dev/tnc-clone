import { NgModule } from '@angular/core';
import { PricePipe } from './pipes/price.pipe';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsSwiperComponent } from './components/products-swiper/products-swiper.component';
import { ProductsService } from './services/products.service';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ProductCardComponent, PricePipe, ProductsSwiperComponent],
  imports: [CommonModule, SwiperModule],
  exports: [ProductsSwiperComponent],
  providers: [ProductsService],
})
export class ProductsModule {}
