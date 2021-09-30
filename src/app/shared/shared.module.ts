import { NgModule } from '@angular/core';
import { components } from './components';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { PricePipe } from './pipes/price.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [components, PricePipe],
  imports: [CommonModule, SwiperModule, RouterModule],
  exports: [components, SwiperModule, PricePipe],
})
export class SharedModule {}
