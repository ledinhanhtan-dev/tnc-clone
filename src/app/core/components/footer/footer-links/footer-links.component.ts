import { Component, Input, OnInit } from '@angular/core';
import { FooterLinks } from '@core/constants/footer-links.constant';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss'],
})
export class FooterLinksComponent implements OnInit {
  @Input() footerLinks!: FooterLinks;

  constructor() {}

  ngOnInit(): void {}
}
