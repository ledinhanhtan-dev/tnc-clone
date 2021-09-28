import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductInfoService } from 'app/product/services/product-info.service';
import { Subscription } from 'rxjs';

type Div = HTMLDivElement;

@Component({
  selector: 'app-product-top-toolbar',
  templateUrl: './product-top-toolbar.component.html',
  styleUrls: ['./product-top-toolbar.component.scss'],
})
export class ProductTopToolbarComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild('navigation') private navigationRef!: ElementRef;
  private indexSub!: Subscription;
  private tabs!: NodeList;

  @Input() name!: string;
  @Input() price!: number;
  @HostBinding('class.active')
  private active: boolean = false;

  titles: string[] = [
    'Chi tiết sản phẩm',
    'Thông số kỹ thuật',
    'Video',
    'Review sản phẩm',
  ];

  constructor(private readonly productInfoService: ProductInfoService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.tabs = (this.navigationRef.nativeElement as Div).querySelectorAll(
      '.tab'
    );

    this.indexSub = this.productInfoService.activeIndex$.subscribe(
      activeIndex => {
        this.tabs.forEach(tab => (tab as Div).classList.remove('active'));
        (this.tabs[activeIndex] as Div).classList.add('active');
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY >= 850) this.active = true;
    else this.active = false;
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
