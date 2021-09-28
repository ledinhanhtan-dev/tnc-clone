import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit, AfterViewInit {
  @ViewChild('contents') private contentsRef!: ElementRef;
  @ViewChild('tabs') private tabsRef!: ElementRef;
  private contents!: NodeList;
  private tabs!: NodeList;

  titles: string[] = [
    'Chi tiết sản phẩm',
    'Thông số kỹ thuật',
    'Video',
    'Review sản phẩm',
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.tabs = (this.tabsRef.nativeElement as HTMLDivElement).querySelectorAll(
      '.tab'
    );

    (this.tabs[0] as HTMLDivElement).classList.add('active');

    this.contents = (
      this.contentsRef.nativeElement as HTMLDivElement
    ).querySelectorAll('.content');
  }

  onSelectTab(e: MouseEvent) {
    this.tabs.forEach(tab => {
      (tab as HTMLDivElement).classList.remove('active');
    });

    this.contents.forEach(content => {
      (content as HTMLDivElement).classList.remove('active');
    });

    (e.target as HTMLDivElement).classList.add('active');

    const index = (e.target as HTMLDivElement).dataset.index!;
    (this.contents[+index] as HTMLDivElement).classList.add('active');
  }
}
