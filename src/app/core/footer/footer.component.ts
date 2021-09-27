import { Component, OnInit } from '@angular/core';
import { LinksGroup, linksGroups } from './models/links-group.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  groups: LinksGroup[] = linksGroups;

  constructor() {}
  ngOnInit(): void {}
}
