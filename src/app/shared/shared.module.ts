import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PricePipe } from './pipes/price.pipe';
import { SwiperModule } from 'swiper/angular';
import { components } from './components';
import { LazyImgDirective } from './directives/lazy-img.directive';

@NgModule({
  declarations: [components, PricePipe, LazyImgDirective],
  imports: [CommonModule, SwiperModule, RouterModule],
  exports: [components, SwiperModule, PricePipe, LazyImgDirective],
})
export class SharedModule {}
