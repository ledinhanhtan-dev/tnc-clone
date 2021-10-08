import {
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import { ProductService } from 'app/product/services/product.service';
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

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.tabs = (this.tabsRef.nativeElement as Div).querySelectorAll('.tab');

    this.contents = (this.contentsRef.nativeElement as Div).querySelectorAll(
      '.content'
    );

    this.indexSub = this.productService.activeInfoIndex$.subscribe(
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
    this.productService.activeInfoIndex$.next(0);
    if (this.indexSub) this.indexSub.unsubscribe();
  }

  onSelectTab(e: MouseEvent) {
    const index = (e.target as Div).dataset.index!;
    this.productService.activeInfoIndex$.next(+index);
  }
}
