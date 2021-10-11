import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBanksComponent } from './checkout-banks.component';

describe('CheckoutBanksComponent', () => {
  let component: CheckoutBanksComponent;
  let fixture: ComponentFixture<CheckoutBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
