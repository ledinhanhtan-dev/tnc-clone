import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaMenuMobileComponent } from './mega-menu-mobile.component';

describe('MegaMenuMobileComponent', () => {
  let component: MegaMenuMobileComponent;
  let fixture: ComponentFixture<MegaMenuMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaMenuMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
