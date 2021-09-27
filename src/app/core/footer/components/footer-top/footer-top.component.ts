import { Component, OnInit } from '@angular/core';
import { LinksGroup, linksGroups } from '../../models/links-group.model';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss'],
})
export class FooterTopComponent implements OnInit {
  groups: LinksGroup[] = linksGroups;

  constructor() {}

  ngOnInit(): void {}
}
