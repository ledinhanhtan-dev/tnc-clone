import { Component, OnInit } from '@angular/core';
import { FooterLinks, linksGroups } from '@core/models/footer-links.model';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss'],
})
export class FooterTopComponent implements OnInit {
  groups: FooterLinks[] = linksGroups;

  constructor() {}

  ngOnInit(): void {}
}
