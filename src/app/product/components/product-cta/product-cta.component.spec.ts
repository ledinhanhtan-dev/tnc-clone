import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCtaComponent } from './product-cta.component';

describe('ProductCtaComponent', () => {
  let component: ProductCtaComponent;
  let fixture: ComponentFixture<ProductCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
