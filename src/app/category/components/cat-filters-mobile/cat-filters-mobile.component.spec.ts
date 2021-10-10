import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFiltersMobileComponent } from './cat-filters-mobile.component';

describe('CatFiltersMobileComponent', () => {
  let component: CatFiltersMobileComponent;
  let fixture: ComponentFixture<CatFiltersMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFiltersMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFiltersMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
