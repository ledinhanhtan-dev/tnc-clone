import { Component, OnInit } from '@angular/core';
import { HomeChannel, homeChannels } from 'app/home/models/home-channel.model';

@Component({
  selector: 'app-home-channel',
  templateUrl: './home-channel.component.html',
  styleUrls: ['./home-channel.component.scss'],
})
export class HomeChannelComponent implements OnInit {
  homeChannels: HomeChannel[] = homeChannels;

  constructor() {}

  ngOnInit(): void {}
}
