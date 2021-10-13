import { Injectable } from '@angular/core';
import { Toast } from '@core/models/toast.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast$ = new Subject<Toast>();

  constructor() {}

  pushAddedToCart() {
    this.toast$.next({
      message: 'Sản phẩm đã được thêm vào giỏ hàng',
      type: 'success',
    });
  }
}
