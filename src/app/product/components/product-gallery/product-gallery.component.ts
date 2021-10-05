import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Controller, Navigation, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore from 'swiper';
import { Product } from '@core/models/product.model';

SwiperCore.use([Navigation, Controller]);

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent implements OnInit, AfterViewInit {
  @ViewChild('topSlider') topSlider!: SwiperComponent;
  @ViewChild('thumbsSlider') thumbsSlider!: SwiperComponent;
  @Input()
  product!: Product;

  mainGalleryConfig: SwiperOptions = {
    slidesPerView: 1,
    scrollbar: { draggable: true },
    navigation: true,
    centeredSlides: true,
    grabCursor: true,
  };

  subGalleryConfig: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 32,
    scrollbar: { draggable: true },
    navigation: true,
    grabCursor: true,
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log(this.product);
  }

  ngAfterViewInit(): void {
    this.topSlider.swiperRef.controller.control = this.thumbsSlider.swiperRef;
    this.thumbsSlider.swiperRef.controller.control = this.topSlider.swiperRef;
  }
}
