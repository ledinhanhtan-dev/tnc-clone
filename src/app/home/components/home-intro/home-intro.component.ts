import { Component, OnInit } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss'],
})
export class HomeIntroComponent implements OnInit {
  environment = environment;

  constructor() {}

  ngOnInit(): void {}
}
