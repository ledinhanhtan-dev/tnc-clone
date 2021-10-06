import { Component, OnInit } from '@angular/core';
import {
  HomeChannel,
  HOME_CHANNELS,
} from 'app/home/constants/home-channels.constant';

@Component({
  selector: 'app-home-channel',
  templateUrl: './home-channel.component.html',
  styleUrls: ['./home-channel.component.scss'],
})
export class HomeChannelComponent implements OnInit {
  homeChannels: HomeChannel[] = HOME_CHANNELS;

  constructor() {}

  ngOnInit(): void {}
}
