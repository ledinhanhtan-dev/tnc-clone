import SwiperCore from 'swiper';
import { Component, OnInit } from '@angular/core';
import { Pagination, SwiperOptions } from 'swiper';
import { HomeBrand, homeBrands } from 'app/home/models/home-brand.model';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home-brands',
  templateUrl: './home-brands.component.html',
  styleUrls: ['./home-brands.component.scss'],
})
export class HomeBrandsComponent implements OnInit {
  homeBrands: HomeBrand[] = homeBrands;

  swiperConfig: SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 6,
    scrollbar: { draggable: true },
    navigation: true,
    loop: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
