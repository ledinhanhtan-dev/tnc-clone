import { Component, OnInit } from '@angular/core';
import {
  HomeFeedback,
  HOME_FEEDBACKS,
} from 'app/home/constants/home-feedback.constant';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-feedbacks',
  templateUrl: './home-feedbacks.component.html',
  styleUrls: ['./home-feedbacks.component.scss'],
})
export class HomeFeedbacksComponent implements OnInit {
  homeFeedbacks: HomeFeedback[] = HOME_FEEDBACKS;

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
