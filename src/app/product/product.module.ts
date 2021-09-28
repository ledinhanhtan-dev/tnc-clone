import { NgModule } from '@angular/core';
import { PricePipe } from './pipes/price.pipe';
import { CommonModule } from '@angular/common';
import { ProductsSwiperComponent } from './components/products-swiper/products-swiper.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './services/product.service';
import { SwiperModule } from 'swiper/angular';

import { components } from './components';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductRatingComponent } from './components/product-rating/product-rating.component';
import { ProductActionsComponent } from './components/product-actions/product-actions.component';
import { SharedModule } from '@shared/shared.module';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ProductPolicyComponent } from './components/product-policy/product-policy.component';

@NgModule({
  declarations: [
    ...components,
    PricePipe,
    ProductGalleryComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductInfoComponent,
    ProductRatingComponent,
    ProductActionsComponent,
    ProductQuantityComponent,
    ProductPolicyComponent,
  ],
  imports: [CommonModule, SharedModule, SwiperModule, ProductRoutingModule],
  exports: [ProductsSwiperComponent],
  providers: [ProductService],
})
export class ProductModule {}
