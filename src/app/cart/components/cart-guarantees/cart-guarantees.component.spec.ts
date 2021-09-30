import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartGuaranteesComponent } from './cart-guarantees.component';

describe('CartGuaranteesComponent', () => {
  let component: CartGuaranteesComponent;
  let fixture: ComponentFixture<CartGuaranteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartGuaranteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartGuaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
