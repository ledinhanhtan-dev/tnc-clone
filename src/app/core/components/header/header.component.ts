import { Component, OnInit } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  environment = environment;

  constructor() {}

  ngOnInit(): void {}
}
