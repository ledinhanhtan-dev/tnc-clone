import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopToolbarComponent } from './product-top-toolbar.component';

describe('ProductTopToolbarComponent', () => {
  let component: ProductTopToolbarComponent;
  let fixture: ComponentFixture<ProductTopToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTopToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
