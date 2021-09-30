import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBottomMobileComponent } from './header-bottom-mobile.component';

describe('HeaderBottomMobileComponent', () => {
  let component: HeaderBottomMobileComponent;
  let fixture: ComponentFixture<HeaderBottomMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBottomMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBottomMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
