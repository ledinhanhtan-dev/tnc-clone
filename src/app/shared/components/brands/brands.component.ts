import { Component, OnInit } from '@angular/core';
import { BRANDS } from '@shared/constants/brands.constant';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brands = BRANDS;

  swiperConfig: SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 5,
    scrollbar: { draggable: true },
    navigation: true,
    loop: true,

    breakpoints: {
      '860': { slidesPerView: 6 },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
