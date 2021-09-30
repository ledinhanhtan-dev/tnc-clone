import { Component, OnInit } from '@angular/core';
import {
  heroBanners,
  HomeBanner,
  subBanners,
} from 'app/home/models/home-banner.model';
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
  heroBanners: HomeBanner[] = heroBanners;
  subBanners: HomeBanner[] = subBanners;

  heroSwiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 32, // 2rem
    autoplay: { delay: 5000, disableOnInteraction: true },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    centeredSlides: true,
    navigation: true,
    loop: true,
  };

  subSwiperConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 32, // 2rem
    autoplay: { delay: 10000, disableOnInteraction: true },
    scrollbar: { draggable: true },
    navigation: true,
    loop: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
