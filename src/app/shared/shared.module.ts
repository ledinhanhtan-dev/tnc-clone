import { NgModule } from '@angular/core';
import { components } from './components';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [components],
  imports: [CommonModule, SwiperModule],
  exports: [components],
})
export class SharedModule {}
