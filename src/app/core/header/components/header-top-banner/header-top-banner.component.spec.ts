import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTopBannerComponent } from './header-top-banner.component';

describe('HeaderTopBannerComponent', () => {
  let component: HeaderTopBannerComponent;
  let fixture: ComponentFixture<HeaderTopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTopBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
