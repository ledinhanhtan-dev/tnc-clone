import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ToastService } from '@core/services/toast.service';
import { ToastType } from '@core/models/toast.model';
import { timer } from 'rxjs';

const FADE_OUT_TIME = 2000;
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @HostBinding('class')
  type: ToastType = 'success';

  @HostBinding('class.show')
  private show: boolean = false;

  message: string = 'Sản phẩm đã được thêm vào giỏ hàng';

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toast$.subscribe(toast => {
      this.message = toast.message;
      this.type = toast.type;
      this.show = true;

      timer(FADE_OUT_TIME).subscribe(() => (this.show = false));
    });
  }
}
