import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnInit {
  @Input() step: 1 | 2 | 3 = 2;

  processes: string[] = [
    '1. Chọn sản phẩm',
    '2. Xác nhận đơn hàng',
    '3. Thanh toán',
  ];

  constructor() {}

  ngOnInit(): void {}
}
