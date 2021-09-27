import { Component, OnInit } from '@angular/core';
import {
  HomeFeedback,
  homeFeedbacks,
} from 'app/home/models/home-feedback.model';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-feedbacks',
  templateUrl: './home-feedbacks.component.html',
  styleUrls: ['./home-feedbacks.component.scss'],
})
export class HomeFeedbacksComponent implements OnInit {
  homeFeedbacks: HomeFeedback[] = homeFeedbacks;

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
