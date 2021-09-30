import { Component, OnInit } from '@angular/core';
import {
  FooterLinks,
  LINKS_GROUP,
} from '@core/constants/footer-links.constant';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss'],
})
export class FooterTopComponent implements OnInit {
  groups: FooterLinks[] = LINKS_GROUP;

  constructor() {}

  ngOnInit(): void {}
}
