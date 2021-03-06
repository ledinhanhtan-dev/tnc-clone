import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CatItem, CAT_ITEMS } from 'app/page/constants/cat-items.constant';

@Component({
  selector: 'app-build-pc',
  templateUrl: './build-pc.component.html',
  styleUrls: ['./build-pc.component.scss'],
})
export class BuildPcComponent implements OnInit {
  catItems: CatItem[] = CAT_ITEMS;

  constructor(private readonly title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Xây dựng cấu hình PC');
  }
}
