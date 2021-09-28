import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPolicyComponent } from './product-policy.component';

describe('ProductPolicyComponent', () => {
  let component: ProductPolicyComponent;
  let fixture: ComponentFixture<ProductPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
