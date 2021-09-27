import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-button',
  templateUrl: './youtube-button.component.html',
  styleUrls: ['./youtube-button.component.scss'],
})
export class YoutubeButtonComponent implements OnInit {
  @Input() size: 'sm' | 'md' = 'md';

  constructor() {}

  ngOnInit(): void {}
}
