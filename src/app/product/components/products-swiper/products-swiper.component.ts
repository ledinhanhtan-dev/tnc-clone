import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/product/models/product.model';
import { Pagination, SwiperOptions } from 'swiper';

import SwiperCore from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-products-swiper',
  templateUrl: './products-swiper.component.html',
  styleUrls: ['./products-swiper.component.scss'],
})
export class ProductsSwiperComponent implements OnInit {
  @Input() products!: Product[];

  swiperConfig: SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 4,
    scrollbar: { draggable: true },
    navigation: true,
    loop: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
