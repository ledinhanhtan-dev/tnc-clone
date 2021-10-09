import { Component, OnInit } from '@angular/core';
import {
  HERO_BANNERS,
  HomeBanner,
  SUB_BANNERS,
} from 'app/home/constants/home-banners.constant';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-home-banners',
  templateUrl: './home-banners.component.html',
  styleUrls: ['./home-banners.component.scss'],
})
export class HomeBannersComponent implements OnInit {
  heroBanners: HomeBanner[] = HERO_BANNERS;
  subBanners: HomeBanner[] = SUB_BANNERS;

  heroSwiperConfig: SwiperOptions = {
    slidesPerView: 1,
    autoplay: { delay: 5000, disableOnInteraction: true },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    centeredSlides: true,
    navigation: true,
    loop: true,
  };

  subSwiperConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 14,
    autoplay: { delay: 10000, disableOnInteraction: true },
    scrollbar: { draggable: true },
    navigation: true,
    loop: true,

    breakpoints: {
      '1000': { spaceBetween: 32 },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
