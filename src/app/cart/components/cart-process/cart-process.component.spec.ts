import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProcessComponent } from './cart-process.component';

describe('CartProcessComponent', () => {
  let component: CartProcessComponent;
  let fixture: ComponentFixture<CartProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
