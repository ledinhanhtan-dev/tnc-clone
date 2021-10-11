import { Component, OnInit } from '@angular/core';
import { FEEDBACKS } from '@shared/constants/feedbacks.constant';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
})
export class FeedbacksComponent implements OnInit {
  feedbacks: string[] = FEEDBACKS;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    scrollbar: { draggable: true },
    navigation: true,
    pagination: true,
    loop: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
