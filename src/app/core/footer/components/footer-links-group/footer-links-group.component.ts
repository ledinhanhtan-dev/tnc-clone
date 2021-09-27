import { Component, Input, OnInit } from '@angular/core';
import { LinksGroup } from '../../models/links-group.model';

@Component({
  selector: 'app-footer-links-group',
  templateUrl: './footer-links-group.component.html',
  styleUrls: ['./footer-links-group.component.scss'],
})
export class FooterLinksGroupComponent implements OnInit {
  @Input() linksGroup!: LinksGroup;

  constructor() {}

  ngOnInit(): void {}
}
