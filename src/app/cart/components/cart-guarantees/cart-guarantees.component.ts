import { Component, OnInit } from '@angular/core';
import { GUARANTEES } from '@cart/constants/guarantees.constant';

@Component({
  selector: 'app-cart-guarantees',
  templateUrl: './cart-guarantees.component.html',
  styleUrls: ['./cart-guarantees.component.scss'],
})
export class CartGuaranteesComponent implements OnInit {
  guarantees: string[] = GUARANTEES;

  constructor() {}

  ngOnInit(): void {}
}
