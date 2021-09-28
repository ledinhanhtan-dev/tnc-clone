import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductInfoService } from 'app/product/services/product-info.service';
import { Subscription } from 'rxjs';

type Div = HTMLDivElement;
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('contents') private contentsRef!: ElementRef;
  @ViewChild('tabs') private tabsRef!: ElementRef;
  private indexSub!: Subscription;
  private contents!: NodeList;
  private tabs!: NodeList;

  titles: string[] = [
    'Chi tiết sản phẩm',
    'Thông số kỹ thuật',
    'Video',
    'Review sản phẩm',
  ];

  constructor(private readonly productInfoService: ProductInfoService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.tabs = (this.tabsRef.nativeElement as Div).querySelectorAll('.tab');

    this.contents = (this.contentsRef.nativeElement as Div).querySelectorAll(
      '.content'
    );

    this.indexSub = this.productInfoService.activeIndex$.subscribe(
      activeIndex => {
        this.tabs.forEach(tab => (tab as Div).classList.remove('active'));
        this.contents.forEach(content =>
          (content as Div).classList.remove('active')
        );

        (this.tabs[activeIndex] as Div).classList.add('active');
        (this.contents[activeIndex] as Div).classList.add('active');
      }
    );
  }

  ngOnDestroy(): void {
    if (this.indexSub) this.indexSub.unsubscribe();
  }

  onSelectTab(e: MouseEvent) {
    const index = (e.target as Div).dataset.index!;
    this.productInfoService.activeIndex$.next(+index);
  }
}
