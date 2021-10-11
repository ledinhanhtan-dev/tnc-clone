import { Component, OnInit } from '@angular/core';
import { CHECKOUT_BANKS } from 'app/checkout/constants/checkout-banks.constant';

@Component({
  selector: 'app-checkout-banks',
  templateUrl: './checkout-banks.component.html',
  styleUrls: ['./checkout-banks.component.scss'],
})
export class CheckoutBanksComponent implements OnInit {
  banks = CHECKOUT_BANKS;

  constructor() {}

  ngOnInit(): void {}
}
