import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PricePipe } from './pipes/price.pipe';
import { SwiperModule } from 'swiper/angular';
import { components } from './components';
import { PolicyComponent } from './components/policy/policy.component';

@NgModule({
  declarations: [components, PricePipe],
  imports: [CommonModule, SwiperModule, RouterModule],
  exports: [components, SwiperModule, PricePipe],
})
export class SharedModule {}
